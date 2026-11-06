document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("#siteNav");
const mobileLayout = window.matchMedia("(max-width: 780px)");

function closeMenu({ restoreFocus = false } = {}) {
  if (!menuButton || !siteNav) return;
  siteNav.dataset.open = "false";
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menú";
  if (restoreFocus) menuButton.focus();
}

if (menuButton && siteNav) {
  closeMenu();
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.textContent = willOpen ? "Cerrar" : "Menú";
    siteNav.dataset.open = String(willOpen);
  });
  siteNav.addEventListener("click", (event) => {
    if (!(event.target instanceof Element) || !event.target.closest("a")) return;
    if (mobileLayout.matches) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu({ restoreFocus: true });
    }
  });
  mobileLayout.addEventListener("change", () => closeMenu());
}

const filters = document.querySelector("[data-project-filters]");
const projectCards = [...document.querySelectorAll("[data-project-kind]")];
const filterStatus = document.querySelector("#filterStatus");

if (filters && projectCards.length && filterStatus) {
  filters.hidden = false;
  filterStatus.hidden = false;
  const filterButtons = [...filters.querySelectorAll("[data-filter]")];
  function filterProjects(filter) {
    let count = 0;
    projectCards.forEach((card) => {
      const visible = filter === "todos" || (card.dataset.projectKinds || card.dataset.projectKind || "").split(" ").includes(filter);
      card.hidden = !visible;
      if (visible) count += 1;
    });
    document.querySelectorAll("[data-catalog-group]").forEach((group) => { group.hidden = ![...group.querySelectorAll("[data-project-kind]")].some((card) => !card.hidden); });
    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    });
    filterStatus.textContent = `${count} ${count === 1 ? "proyecto" : "proyectos"}.`;
  }
  filterButtons.forEach((button) => button.addEventListener("click", () => filterProjects(button.dataset.filter)));
  filterProjects("todos");
  window.addEventListener("pageshow", () => {
    const selected = filterButtons.find((button) => button.getAttribute("aria-pressed") === "true");
    filterProjects(selected?.dataset.filter || "todos");
  });
}

const copyTimers = new WeakMap();
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const email = button.dataset.copy;
    const status = document.querySelector("#copyStatus");
    if (!email || !status) return;
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = "Correo copiado al portapapeles.";
      button.textContent = "Correo copiado";
      window.clearTimeout(copyTimers.get(button));
      copyTimers.set(button, window.setTimeout(() => { button.textContent = "Copiar correo"; }, 1800));
    } catch {
      status.textContent = "Puedes copiar la dirección visible o usar el enlace de correo.";
    }
  });
});
