const projects = [
  {
    id: "arrendamiento",
    title: "Sistema de arrendamiento",
    label: "Administrativo",
    categories: ["Full stack", "Administrativo"],
    summary:
      "Sistema para clientes, contratos, equipos, seguros y recibos. Presentado como caso privado con datos ficticios.",
    role: "Frontend y apoyo backend",
    status: "Proyecto privado",
    stack: ["React", "APIs REST", "MySQL", "Formularios"],
    visual: "rental",
    image: "./assets/projects/arrendamiento.svg",
    imageAlt: "Mockup ficticio de sistema de arrendamiento con contratos y recibos demo.",
    problem:
      "El equipo necesitaba consultar clientes, contratos, equipos, seguros y recibos sin depender de hojas o procesos manuales.",
    solution:
      "Se organizaron pantallas de captura, consulta y seguimiento conectadas a APIs REST para operaciones administrativas.",
    proves:
      "Manejo de formularios, vistas administrativas, integración API y estructura de datos orientada a negocio.",
    privacy:
      "No se publican contratos, recibos, clientes, URLs internas, capturas reales ni código privado.",
  },
  {
    id: "delice-flow",
    title: "Delice Flow",
    label: "Restaurante / Full stack",
    categories: ["Full stack", "Backend", "Inventarios", "Administrativo"],
    summary:
      "Plataforma administrativa para menú, pedidos, inventario, proveedores y movimientos de restaurante.",
    role: "Backend / Full Stack Jr.",
    status: "Caso recreado",
    stack: ["Node.js", "Express", "Prisma", "MySQL"],
    visual: "restaurant",
    image: "./assets/projects/delice-flow.svg",
    imageAlt: "Mockup ficticio de plataforma para restaurante con pedidos e inventario demo.",
    problem:
      "El restaurante requería centralizar menú, pedidos, proveedores e inventario en un flujo administrativo más ordenado.",
    solution:
      "Se desarrollaron endpoints REST, modelos con Prisma y módulos para consultar y registrar movimientos operativos.",
    proves:
      "Backend REST, modelado relacional, reglas de negocio, validaciones e integración con frontend administrativo.",
    privacy:
      "La versión real permanece privada; las demos usan productos, pedidos y proveedores ficticios.",
  },
  {
    id: "schoolback",
    title: "SchoolBack",
    label: "Educación / Backend",
    categories: ["Backend", "Administrativo"],
    summary:
      "Backend escolar para usuarios, permisos, registros y módulos administrativos sin datos de alumnos.",
    role: "Backend",
    status: "Proyecto privado",
    stack: ["Node.js", "Express", "Prisma", "Auth"],
    visual: "school",
    image: "./assets/projects/schoolback.svg",
    imageAlt: "Mockup ficticio de backend escolar con usuarios, permisos y modulos demo.",
    problem:
      "El sistema escolar necesitaba separar usuarios, permisos, registros y módulos administrativos de forma mantenible.",
    solution:
      "Se trabajó con rutas, servicios, autenticación, estructura de datos y separación de responsabilidades.",
    proves:
      "Organización backend, permisos, autenticación básica, servicios y estructura modular.",
    privacy:
      "No se muestran alumnos, credenciales, URLs internas, registros reales ni código fuente privado.",
  },
  {
    id: "ag-note",
    title: "AG Note",
    label: "Productividad",
    categories: ["Frontend", "Administrativo"],
    summary:
      "Módulo para seguimiento de notas, tareas, estados, filtros y flujo de información por equipo.",
    role: "Frontend",
    status: "Caso privado",
    stack: ["React", "Node.js", "MySQL", "Filtros"],
    visual: "notes",
    image: "./assets/projects/ag-note.svg",
    imageAlt: "Mockup ficticio de tablero para notas, tareas y estados demo.",
    problem:
      "El equipo necesitaba registrar notas, tareas y estados de avance con consultas rápidas por filtros.",
    solution:
      "Se diseñaron vistas de seguimiento con formularios, estados, filtros y organización de información por módulo.",
    proves:
      "UI administrativa, control de estados, filtros, organización de datos y experiencia de usuario interna.",
    privacy:
      "Las tareas, usuarios, comentarios y estados productivos no se publican.",
  },
  {
    id: "barberia-admin",
    title: "Barbería Admin",
    label: "Servicios / Admin",
    categories: ["Full stack", "Administrativo"],
    summary:
      "Sistema para citas, servicios, clientes y movimientos de una barbería con caso recreado.",
    role: "Full Stack Jr.",
    status: "Demo segura",
    stack: ["React", "Express", "MySQL", "Reportes"],
    visual: "service",
    image: "./assets/projects/barberia-admin.svg",
    imageAlt: "Mockup ficticio de administracion de barberia con citas y servicios demo.",
    problem:
      "El negocio requería administrar citas, servicios, clientes y movimientos desde una interfaz sencilla.",
    solution:
      "Se estructuraron pantallas administrativas y flujo de datos para registrar citas, servicios y consultas.",
    proves:
      "Diseño de módulos administrativos, CRUD, reportes simples e integración frontend-backend.",
    privacy:
      "No se incluyen nombres, citas, pagos, clientes ni datos reales del negocio.",
  },
  {
    id: "wms",
    title: "Sistema WMS",
    label: "Inventarios",
    categories: ["Frontend", "Inventarios", "Administrativo"],
    summary:
      "Control de existencias, entradas, salidas, ubicaciones, lotes y viajes de proveedores.",
    role: "Frontend / Modelo de datos",
    status: "Proyecto privado",
    stack: ["React", "MySQL", "Inventario", "Movimientos"],
    visual: "inventory",
    image: "./assets/projects/wms.svg",
    imageAlt: "Mockup ficticio de sistema WMS con ubicaciones, lotes y movimientos demo.",
    problem:
      "La operación necesitaba trazabilidad para existencias, entradas, salidas, ubicaciones, lotes y viajes.",
    solution:
      "Se organizaron pantallas y estructura de datos para registrar movimientos y consultar inventario operativo.",
    proves:
      "Pensamiento de inventarios, trazabilidad, modelado de entidades y flujos administrativos.",
    privacy:
      "No se muestran proveedores reales, movimientos productivos, precios, lotes ni ubicaciones reales.",
  },
  {
    id: "finanzas",
    title: "Proyecto Finanzas",
    label: "Repo publico",
    categories: ["Full stack", "Backend", "Frontend", "Repo publico"],
    summary:
      "Proyecto público separado en frontend y backend para demostrar TypeScript, estructura y flujo full stack.",
    role: "Frontend y backend",
    status: "Repo publico",
    stack: ["TypeScript", "React", "Node.js", "Backend"],
    visual: "finance",
    image: "./assets/projects/finanzas.svg",
    imageAlt: "Mockup ficticio de proyecto de finanzas con graficas e indicadores demo.",
    problem:
      "Era necesario tener un ejemplo público que mostrara estructura real de app sin depender de repos privados.",
    solution:
      "Se separó frontend y backend para mostrar consumo de API, organización de código y lógica de aplicación.",
    proves:
      "TypeScript, separación de capas, estructura full stack y capacidad de publicar trabajo revisable.",
    privacy:
      "El repo público no contiene credenciales ni datos privados; se usa como muestra segura.",
  },
];

const modules = [
  {
    title: "Arrendamiento",
    count: "Clientes, contratos y recibos",
    description:
      "Módulos para administrar contratos, equipos, seguros, recibos y consultas operativas.",
    skills: ["React", "Node.js", "APIs REST", "MySQL"],
  },
  {
    title: "Ventas",
    count: "Flujo comercial",
    description:
      "Pantallas y backend para inventario, movimientos, administración y reportes de ventas.",
    skills: ["React", "Backend", "Inventario", "Reportes"],
  },
  {
    title: "Operación",
    count: "Scrum interno",
    description:
      "Seguimiento de actividades, tableros, estados, sprints y control de trabajo por equipo.",
    skills: ["Estados", "Filtros", "Tableros", "Seguimiento"],
  },
  {
    title: "Inventarios",
    count: "Movimientos y proveedores",
    description:
      "Entradas, salidas, existencias, viajes, lotes y control operativo de almacén.",
    skills: ["MySQL", "Movimientos", "Proveedores", "Trazabilidad"],
  },
  {
    title: "Personal",
    count: "Checador administrativo",
    description:
      "Interfaz para asistencia, horarios, registros de personal y consulta de actividad.",
    skills: ["React", "Formularios", "Consultas", "UX admin"],
  },
  {
    title: "APIs",
    count: "Servicios versionados",
    description:
      "Rutas, servicios, validaciones y estructura de datos para integraciones internas.",
    skills: ["Node.js", "REST", "Servicios", "Validación"],
  },
];

const repos = [
  {
    name: "Portafolio principal",
    url: "https://github.com/AndresArevalo1229/andresarevalo1229.github.io",
    note: "GitHub Pages",
    description:
      "Página entregable para mostrar casos privados como experiencia profesional segura.",
    role: "Demuestra criterio de presentación, privacidad y comunicación técnica.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
  },
  {
    name: "FrontFinanzas",
    url: "https://github.com/AndresArevalo1229/FrontFinanzas",
    note: "Repo publico",
    description:
      "Frontend público para mostrar estructura de aplicación, consumo de datos y componentes.",
    role: "Buen repo para fijar porque enseña React y TypeScript en una app concreta.",
    stack: ["React", "TypeScript", "Frontend", "UI"],
  },
  {
    name: "Finanzas Backend",
    url: "https://github.com/AndresArevalo1229/ProyectofinanzasBackebd",
    note: "Repo publico",
    description:
      "Backend separado para mostrar rutas, servicios, lógica de negocio y API.",
    role: "Complementa el frontend y deja ver trabajo full stack sin exponer proyectos privados.",
    stack: ["Node.js", "TypeScript", "API", "Backend"],
  },
  {
    name: "Imdelice Backend",
    url: "https://github.com/AndresArevalo1229/Imdelice_BackEnd",
    note: "Demo segura",
    description:
      "Backend público relacionado con flujo de restaurante, útil para explicar APIs y módulos.",
    role: "Se presenta como referencia pública separada del sistema privado real.",
    stack: ["Node.js", "Express", "REST", "MySQL"],
  },
  {
    name: "Android restaurante",
    url: "https://github.com/AndresArevalo1229/Andorid",
    note: "Repo publico",
    description:
      "Aplicación móvil de restaurante que muestra experiencia adicional fuera del frontend web.",
    role: "Ayuda a demostrar base móvil y capacidad de aprender otras plataformas.",
    stack: ["Kotlin", "Android", "Mobile", "Restaurante"],
  },
  {
    name: "Im-delice web",
    url: "https://github.com/AndresArevalo1229/Im-delice",
    note: "Repo publico",
    description:
      "Sitio web público de restaurante que sirve como pieza visual y complemento del backend.",
    role: "Útil si se fija junto al backend para mostrar relación entre interfaz y servicios.",
    stack: ["HTML", "CSS", "Frontend", "UI"],
  },
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll("[data-filter]");
const moduleBoard = document.querySelector("#moduleBoard");
const repoShowcase = document.querySelector("#repoShowcase");
const copyButtons = document.querySelectorAll("[data-copy]");
const counters = document.querySelectorAll("[data-count]");
const views = document.querySelectorAll("[data-view]");
const navLinks = document.querySelectorAll("[data-nav-route]");
const routeLinks = document.querySelectorAll("[data-route-link]");
const pageEyebrow = document.querySelector("#pageEyebrow");
const pageTitle = document.querySelector("#pageTitle");
const pageDescription = document.querySelector("#pageDescription");
const workspace = document.querySelector(".workspace");
const projectModal = document.querySelector("#projectModal");
const projectModalCard = document.querySelector(".project-modal-card");
const projectModalContent = document.querySelector("#projectModalContent");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

const routeMeta = {
  dashboard: {
    eyebrow: "Portafolio",
    title: "Dashboard profesional",
    description:
      "Vista principal para revisar proyectos, modulos, privacidad y repos publicos.",
  },
  proyectos: {
    eyebrow: "Casos de estudio",
    title: "Proyectos documentados",
    description:
      "Pantalla para filtrar proyectos y revisar el detalle tecnico de cada caso.",
  },
  modulos: {
    eyebrow: "Mapa de experiencia",
    title: "Modulos por dominio",
    description:
      "Trabajo agrupado por areas funcionales como inventarios, ventas, APIs y administracion.",
  },
  privacidad: {
    eyebrow: "Confidencialidad",
    title: "Privacidad profesional",
    description:
      "Como presentar trabajo privado sin exponer codigo, clientes, credenciales ni datos reales.",
  },
  repos: {
    eyebrow: "GitHub",
    title: "Repos publicos seguros",
    description:
      "Repos que conviene mostrar con contexto para que el perfil se vea mas profesional.",
  },
  contacto: {
    eyebrow: "Contacto",
    title: "Oportunidades Full Stack Jr.",
    description:
      "Contacto directo y GitHub para compartir el perfil con reclutadores o equipos.",
  },
};

let activeFilter = "Todos";
let activeProjectId = projects[0].id;
let countersAnimated = false;
let lastFocusedElement = null;
let modalCloseTimer = null;

function normalizeRoute() {
  const route = window.location.hash.replace("#", "") || "dashboard";
  return routeMeta[route] ? route : "dashboard";
}

function setRoute(route) {
  const meta = routeMeta[route] ?? routeMeta.dashboard;

  views.forEach((view) => {
    const isActive = view.getAttribute("data-view") === route;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("data-nav-route") === route);
  });

  pageEyebrow.textContent = meta.eyebrow;
  pageTitle.textContent = meta.title;
  pageDescription.textContent = meta.description;
  document.title = `${meta.title} | Andres Arevalo`;
  document.body.setAttribute("data-route", route);

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  if (workspace) {
    workspace.scrollTo({ top: 0, behavior: "auto" });
  }

  if (route === "dashboard") {
    animateCounters();
  }
}

function getProjectImageMarkup(project, variant = "card") {
  const isLarge = variant === "modal";
  const loading = isLarge ? "eager" : "lazy";

  return `
    <figure class="project-image ${isLarge ? "project-image-large" : ""} ${project.visual}">
      <img
        src="${project.image}"
        alt="${project.imageAlt}"
        loading="${loading}"
        decoding="async"
        data-project-image
      />
      <figcaption>${project.title}</figcaption>
    </figure>
  `;
}

function bindProjectImages(scope) {
  scope.querySelectorAll("[data-project-image]").forEach((image) => {
    image.addEventListener("error", () => {
      const wrapper = image.closest(".project-image");
      if (wrapper) {
        wrapper.classList.add("is-fallback");
      }
      image.hidden = true;
    });
  });
}

function renderProjects() {
  const visibleProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  if (!visibleProjects.some((project) => project.id === activeProjectId)) {
    activeProjectId = visibleProjects[0]?.id ?? projects[0].id;
  }

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card" data-project-card="${project.id}">
          <div class="project-card-copy">
            <span class="tag">${project.label}</span>
            <h3>${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
            <ul class="stack">
              ${project.stack.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <button class="project-detail-button" type="button" data-project="${project.id}">
              Ver detalles
            </button>
          </div>
          ${getProjectImageMarkup(project)}
        </article>
      `,
    )
    .join("");

  bindProjectImages(projectGrid);

  const detailButtons = projectGrid.querySelectorAll("[data-project]");
  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openProjectModal(button.getAttribute("data-project"));
    });
  });
}

function getProjectDetailMarkup(project) {
  return `
    <div class="project-modal-layout">
      ${getProjectImageMarkup(project, "modal")}

      <div class="detail-content">
        <span class="tag">${project.status}</span>
        <h3 id="projectModalTitle">${project.title}</h3>
        <p class="detail-text">${project.summary}</p>
        <div class="detail-meta">
          <div>
            <span>Categoria</span>
            <strong>${project.label}</strong>
          </div>
          <div>
            <span>Rol</span>
            <strong>${project.role}</strong>
          </div>
        </div>
        <ul class="stack modal-stack" aria-label="Stack del proyecto">
          ${project.stack.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="detail-list">
          <article>
            <h4>Problema</h4>
            <p>${project.problem}</p>
          </article>
          <article>
            <h4>Solución</h4>
            <p>${project.solution}</p>
          </article>
          <article>
            <h4>Qué demuestra</h4>
            <p>${project.proves}</p>
          </article>
          <article>
            <h4>Privacidad</h4>
            <p>${project.privacy}</p>
          </article>
        </div>
      </div>
    </div>
  `;
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project || !projectModal || !projectModalContent || !projectModalCard) return;

  window.clearTimeout(modalCloseTimer);
  activeProjectId = project.id;
  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  projectModalContent.innerHTML = getProjectDetailMarkup(project);
  bindProjectImages(projectModalContent);
  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  void projectModal.offsetHeight;
  projectModal.classList.add("is-open");
  projectModalCard.focus({ preventScroll: true });
}

function closeProjectModal() {
  if (!projectModal || projectModal.hidden) return;

  projectModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");

  modalCloseTimer = window.setTimeout(() => {
    projectModal.hidden = true;
    if (projectModalContent) {
      projectModalContent.innerHTML = "";
    }
    if (lastFocusedElement) {
      lastFocusedElement.focus({ preventScroll: true });
    }
    lastFocusedElement = null;
  }, 180);
}

function trapModalFocus(event) {
  if (event.key !== "Tab" || !projectModal || projectModal.hidden) return;

  const focusableElements = projectModal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  const focusable = Array.from(focusableElements).filter(
    (element) => !element.hasAttribute("disabled") && element.tabIndex >= 0,
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderModules() {
  moduleBoard.innerHTML = modules
    .map(
      (module) => `
        <article class="module-domain">
          <header>
            <div>
              <p class="eyebrow">${module.title}</p>
              <h3>${module.count}</h3>
            </div>
            <span class="module-count">${module.skills.length} skills</span>
          </header>
          <p>${module.description}</p>
          <div class="module-skills">
            ${module.skills.map((skill) => `<span>${skill}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderRepos() {
  repoShowcase.innerHTML = repos
    .map(
      (repo) => `
        <article class="repo-card">
          <span class="repo-note">${repo.note}</span>
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <div class="repo-role">${repo.role}</div>
          <ul class="stack">
            ${repo.stack.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="repo-actions">
            <a class="repo-link" href="${repo.url}">Ver repo</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  counters.forEach((counter) => {
    const target = Number(counter.getAttribute("data-count"));
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 24));
    const interval = window.setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = String(target);
        window.clearInterval(interval);
        return;
      }
      counter.textContent = String(current);
    }, 36);
  });
}

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const route = link.getAttribute("href")?.replace("#", "");
    if (!route || !routeMeta[route]) return;

    event.preventDefault();

    if (normalizeRoute() === route) {
      setRoute(route);
      return;
    }

    window.location.hash = route;
  });
});

window.addEventListener("hashchange", () => {
  setRoute(normalizeRoute());
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
    return;
  }

  trapModalFocus(event);
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.getAttribute("data-filter");
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects();
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      const previous = button.textContent;
      button.textContent = "Email copiado";
      window.setTimeout(() => {
        button.textContent = previous;
      }, 1600);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  });
});

renderProjects();
renderModules();
renderRepos();
setRoute(normalizeRoute());
