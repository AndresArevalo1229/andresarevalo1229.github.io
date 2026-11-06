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

// Conserva los enlaces a los recursos completos como alternativa sin JavaScript.
if (typeof HTMLDialogElement !== "undefined" && document.querySelector("[data-image-preview]")) {
  const dialog = document.createElement("dialog");
  dialog.className = "image-dialog";
  dialog.setAttribute("aria-labelledby", "imagePreviewTitle");
  dialog.setAttribute("aria-describedby", "imagePreviewCaption");
  dialog.innerHTML = `
    <div class="image-dialog-header">
      <h2 id="imagePreviewTitle">Imagen ampliada</h2>
      <button class="image-dialog-close" type="button" autofocus>Cerrar ×</button>
    </div>
    <figure>
      <img class="image-dialog-image" alt="">
      <figcaption id="imagePreviewCaption"></figcaption>
    </figure>
    <div class="image-dialog-footer">
      <span>Escape para cerrar · Datos de demostración</span>
      <a class="image-link" target="_blank" rel="noopener noreferrer">Abrir archivo original ↗</a>
    </div>`;
  document.body.append(dialog);
  const previewImage = dialog.querySelector("img");
  const previewTitle = dialog.querySelector("h2");
  const previewCaption = dialog.querySelector("figcaption");
  const originalLink = dialog.querySelector("a");
  let opener;

  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a[data-image-preview]") : null;
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const figure = link.closest("figure") || link.closest("article")?.querySelector("figure");
    const image = link.querySelector("img") || figure?.querySelector("img");
    if (!image) return;
    event.preventDefault();
    opener = link;
    previewImage.src = link.href;
    previewImage.alt = image.alt;
    previewTitle.textContent = link.closest("article.project-card")?.querySelector("h3")?.textContent || document.querySelector("main h1")?.textContent || "Imagen ampliada";
    previewCaption.textContent = figure?.querySelector("figcaption")?.textContent || image.alt;
    originalLink.href = link.href;
    dialog.showModal();
    document.body.classList.add("image-preview-open");
  });
  dialog.querySelector("button").addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const first = dialog.querySelector("button");
    const last = originalLink;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("image-preview-open");
    opener?.focus();
    previewImage.removeAttribute("src");
  });
}
