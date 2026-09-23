const projects = [
  {
    id: "arrendamiento",
    title: "Plataforma de arrendamiento",
    label: "Web · Full Stack",
    categories: ["Web", "Backend", "Full Stack", "Ventas"],
    summary: "Gestión administrativa de clientes, contratos, cobranza, pagos, documentos y reportes.",
    role: "Desarrollo full stack",
    stack: ["React", "TypeScript", "APIs REST", "Node.js", "Express", "MySQL"],
    image: "./assets/projects/arrendamiento.svg",
    imageAlt: "Mockup recreado de un panel administrativo de arrendamiento con contratos y documentos ficticios.",
    problem: "La operación requería consultar clientes, contratos, pagos y documentos desde flujos administrativos conectados.",
    solution: "La experiencia se organiza alrededor de vistas de consulta y captura que conectan operaciones con servicios REST y persistencia relacional.",
    features: ["Clientes y contratos", "Cobranza y pagos", "Documentos", "Reportes administrativos", "Autenticación, roles y permisos"],
    privacy: "Caso anonimizado y recreado. La demostración no utiliza marcas, rutas, capturas, datos ni código del sistema privado.",
  },
  {
    id: "bienestar-citas",
    title: "Plataforma de bienestar y citas",
    label: "Web · Full Stack",
    categories: ["Web", "Backend", "Full Stack"],
    summary: "Perfiles y disponibilidad para organizar citas, pagos y suscripciones en una plataforma de bienestar.",
    role: "Desarrollo full stack",
    stack: ["React", "TypeScript", "Node.js", "Sails.js", "MySQL", "JWT"],
    image: "./assets/projects/bienestar.svg",
    imageAlt: "Mockup original de una agenda ficticia de bienestar con horarios de demostración.",
    problem: "La coordinación de pacientes, especialistas, disponibilidad y citas necesita flujos claros entre perfiles y agenda.",
    solution: "Una plataforma web agrupa perfiles, consulta de disponibilidad, programación y seguimiento de pagos y suscripciones.",
    features: ["Perfiles de pacientes y especialistas", "Disponibilidad y citas", "Pagos y suscripciones", "JWT y roles", "Notificaciones e integraciones externas"],
    privacy: "Presentación de bienestar con contenido anonimizado y recreado. No incluye datos clínicos ni nombres reales.",
  },
  {
    id: "automotriz-membresias",
    title: "Sistema automotriz y membresías",
    label: "Backend · Pagos",
    categories: ["Backend", "Full Stack", "Ventas"],
    role: "Desarrollo backend",
    summary: "Servicios para administrar clientes, vehículos, membresías, órdenes, garantías, pagos y recompensas.",
    stack: ["Node.js", "Express", "MySQL", "JWT", "Mercado Pago"],
    image: "./assets/projects/automotriz.svg",
    imageAlt: "Mockup recreado de una consola automotriz genérica con membresías y órdenes ficticias.",
    problem: "Las operaciones de atención automotriz conectan vehículos y órdenes con membresías, garantías y pagos.",
    solution: "Se presenta una capa de servicios con reglas de negocio, permisos e integración de pago para coordinar los flujos.",
    features: ["Clientes y vehículos", "Membresías y recompensas", "Órdenes y garantías", "Integración de pagos", "Automatizaciones y pruebas de backend"],
    privacy: "Caso genérico sin nombre de empresa, marca, credenciales, identificadores ni configuración real.",
  },
  {
    id: "wms-alimentos",
    title: "WMS para inventario de alimentos",
    label: "Web · Inventarios",
    categories: ["Web", "Full Stack", "Inventarios", "Ventas"],
    role: "Desarrollo full stack",
    summary: "Trazabilidad de existencias y movimientos para entradas, salidas, viajes, ventas y proveedores.",
    stack: ["React", "TypeScript", "APIs REST", "MySQL"],
    image: "./assets/projects/wms-alimentos.svg",
    imageAlt: "Mockup nuevo de un WMS ficticio para inventario, ubicaciones y movimientos de alimentos.",
    problem: "El flujo de almacén necesita mantener contexto entre existencias, movimientos, viajes, ventas y proveedores.",
    solution: "Una interfaz de operación presenta las cantidades y movimientos por área, con trazabilidad de los registros.",
    features: ["Inventario y existencias", "Entradas y salidas", "Viajes y ventas", "Proveedores", "Trazabilidad de movimientos"],
    privacy: "Interfaz diseñada de nuevo con datos ficticios; sin información operativa, proveedores ni ubicaciones reales.",
  },
  {
    id: "administracion-barberia",
    title: "Administración de servicios y citas",
    label: "Web · Ventas",
    categories: ["Web", "Full Stack", "Ventas"],
    role: "Desarrollo full stack",
    summary: "Agenda y administración de clientes, servicios, productos, inventario, ventas, usuarios y roles.",
    stack: ["React", "APIs REST", "MySQL"],
    image: "./assets/projects/servicios.svg",
    imageAlt: "Mockup original para una agenda de servicios con clientes y horarios ficticios.",
    problem: "La atención diaria combina citas con catálogo de servicios y productos, existencias, ventas y permisos de usuario.",
    solution: "Un panel administrativo reúne la agenda y las tareas de operación en una experiencia consistente.",
    features: ["Clientes y citas", "Servicios y productos", "Inventario y ventas", "Usuarios y roles"],
    privacy: "Diseño completamente recreado, con contenido anonimizado y ficticio, sin marcas ni información de un negocio real.",
  },
  {
    id: "sistema-joyeria",
    title: "Sistema de inventario y ventas",
    label: "Web · Inventarios",
    categories: ["Web", "Full Stack", "Inventarios", "Ventas"],
    role: "Desarrollo full stack",
    summary: "Administración de productos, clientes, ventas, inventario, usuarios, cortes de caja y reportes.",
    stack: ["React", "TypeScript", "APIs REST", "MySQL"],
    image: "./assets/projects/joyeria.svg",
    imageAlt: "Mockup nuevo de un sistema comercial genérico con catálogo y existencias ficticias.",
    problem: "La gestión comercial requiere relacionar el catálogo con existencias, ventas, usuarios y cortes de caja.",
    solution: "Vistas administrativas agrupan el catálogo, movimientos y reportes para apoyar la consulta de la operación.",
    features: ["Productos y clientes", "Ventas e inventario", "Usuarios y roles", "Cortes de caja", "Reportes"],
    privacy: "Presentación genérica de un sistema comercial, con datos y diseño recreados y sin identidad de empresa.",
  },
  {
    id: "punto-venta-abarrotes",
    title: "Punto de venta para abarrotes",
    label: "Móvil · Ventas",
    categories: ["Móvil", "Full Stack", "Inventarios", "Ventas"],
    role: "Desarrollo móvil y persistencia local",
    summary: "Aplicación de escritorio y móvil para clientes, productos, crédito e importación de archivos CSV.",
    stack: [".NET MAUI", "C#", "SQLite"],
    image: "./assets/projects/punto-venta.svg",
    imageAlt: "Mockup original de una pantalla de punto de venta con artículos y datos ficticios.",
    problem: "La venta y consulta de productos necesita funcionar en escritorio y móvil con datos locales disponibles.",
    solution: "Una aplicación multiplataforma mantiene los registros en SQLite e incorpora manejo lógico de datos y respaldos.",
    features: ["Clientes y productos", "Crédito", "Importación CSV", "Eliminación lógica", "Respaldos y persistencia local"],
    privacy: "La demostración utiliza productos y clientes ficticios; no incluye bases de datos ni datos de operación reales.",
  },
  {
    id: "automatizacion-contenido",
    title: "Automatización de contenido",
    label: "Full Stack · Automatización",
    categories: ["Web", "Backend", "Full Stack", "Automatización"],
    role: "Desarrollo full stack",
    summary: "Gestión, preparación y programación de publicaciones multimedia para múltiples plataformas.",
    stack: ["ASP.NET Core", "React", "TypeScript", "SQLite", "SignalR", "FFprobe"],
    image: "./assets/projects/automatizacion.svg",
    imageAlt: "Mockup recreado de un calendario editorial con publicaciones de ejemplo.",
    problem: "Preparar y coordinar contenido multimedia para varias plataformas implica pasos de procesamiento y programación.",
    solution: "Un espacio de trabajo centraliza borradores, preparación de video y programación de publicaciones.",
    features: ["Calendario de contenido", "OAuth", "Procesamiento de video", "Actualizaciones con SignalR", "Publicación programada"],
    privacy: "Mockup con contenido de muestra. No incluye credenciales, llaves, tokens, identificadores ni configuraciones reales.",
  },
  {
    id: "operacion-restaurante",
    title: "Operación de restaurante",
    label: "Móvil · Full Stack",
    categories: ["Móvil", "Backend", "Full Stack", "Inventarios", "Ventas"],
    role: "Desarrollo full stack",
    summary: "Flujo operativo para menú, pedidos, inventario, cocina, productos, combos y ventas.",
    stack: [".NET MAUI", "Node.js", "Express", "Prisma", "MySQL"],
    image: "./assets/projects/restaurante.svg",
    imageAlt: "Mockup original de un tablero de pedidos y cocina para un restaurante ficticio.",
    problem: "La operación del restaurante integra catálogo, pedidos, inventario y preparación en un flujo coordinado.",
    solution: "Una aplicación móvil con servicios y persistencia relacional organiza el ciclo desde la selección del menú hasta la cocina.",
    features: ["Menú y productos", "Pedidos y combos", "Inventario", "Vista de cocina", "Flujo de ventas"],
    privacy: "Sistema genérico con nueva identidad visual y contenido ficticio; sin nombres, logotipos ni datos de restaurante.",
  },
];

const capabilities = [
  { title: "Frontend web", description: "Interfaces para explorar información, capturar datos y administrar procesos.", skills: ["React", "TypeScript", "Angular"] },
  { title: "Aplicaciones móviles", description: "Experiencias multiplataforma que conectan tareas de operación con persistencia local.", skills: [".NET MAUI", "C#", "SQLite"] },
  { title: "Backend y APIs REST", description: "Servicios, reglas de negocio y contratos para comunicar interfaces y datos.", skills: ["ASP.NET Core", "Node.js", "Express", "Sails.js"] },
  { title: "Bases de datos", description: "Persistencia relacional y local para catálogos, movimientos y procesos administrativos.", skills: ["MySQL", "SQLite", "Prisma"] },
  { title: "Autenticación, roles y permisos", description: "Control de acceso con identidades, sesiones y permisos por perfil.", skills: ["JWT", "OAuth", "Roles"] },
  { title: "Pagos e integraciones", description: "Conexión de sistemas con servicios externos y flujos de pago.", skills: ["Mercado Pago", "Integraciones", "Notificaciones"] },
  { title: "Inventarios y ventas", description: "Flujos operativos que vinculan existencias, movimientos, pedidos y reportes.", skills: ["Trazabilidad", "Punto de venta", "Reportes"] },
  { title: "Pruebas y manejo de errores", description: "Validación de procesos y manejo de respuestas para operar con información confiable.", skills: ["Pruebas backend", "Validaciones", "Errores"] },
  { title: "Automatización y multimedia", description: "Procesamiento y programación de publicaciones en flujos de contenido.", skills: ["SignalR", "FFprobe", "Publicación programada"] },
];

const workSteps = [
  { title: "Análisis del problema", description: "Entender el flujo operativo, sus necesidades y la información involucrada." },
  { title: "Diseño de interfaces y flujos", description: "Organizar pantallas y recorridos para que las tareas sean claras y consistentes." },
  { title: "Desarrollo frontend y backend", description: "Construir interfaces y servicios de acuerdo con las responsabilidades del proyecto." },
  { title: "Integración y validación", description: "Conectar servicios, persistencia y sistemas externos; revisar los flujos principales." },
  { title: "Pruebas y corrección de errores", description: "Probar comportamientos y ajustar las respuestas ante entradas y situaciones inválidas." },
  { title: "Privacidad y documentación", description: "Proteger código y datos operativos, y explicar el trabajo con contenido anonimizado y recreado." },
];

const repos = [
  {
    name: "Portafolio principal",
    url: "https://github.com/AndresArevalo1229/andresarevalo1229.github.io",
    note: "GitHub Pages",
    description: "Sitio estático con casos profesionales anonimizados, capacidades y demostraciones recreadas.",
    role: "Muestra estructura con HTML, CSS y JavaScript, accesibilidad y documentación.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
  },
  {
    name: "FrontFinanzas",
    url: "https://github.com/AndresArevalo1229/FrontFinanzas",
    note: "Repositorio público",
    description: "Proyecto público de frontend para mostrar estructura de aplicación y componentes.",
    role: "Frontend con React y TypeScript; repositorio público verificado.",
    stack: ["React", "TypeScript", "Frontend"],
  },
  {
    name: "Proyecto Finanzas Backend",
    url: "https://github.com/AndresArevalo1229/ProyectofinanzasBackebd",
    note: "Repositorio público",
    description: "Proyecto público de backend para mostrar servicios, rutas y lógica de API.",
    role: "Backend con Node.js y TypeScript; repositorio público verificado.",
    stack: ["Node.js", "TypeScript", "Backend"],
  },
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll("[data-filter]");
const filterStatus = document.querySelector("#filterStatus");
const moduleBoard = document.querySelector("#moduleBoard");
const workStepsList = document.querySelector("#workSteps");
const repoShowcase = document.querySelector("#repoShowcase");
const repoVerificationNote = document.querySelector("#repoVerificationNote");
const copyButtons = document.querySelectorAll("[data-copy]");
const views = document.querySelectorAll("[data-view]");
const navLinks = document.querySelectorAll("[data-nav-route]");
const routeLinks = document.querySelectorAll("[data-route-link]");
const pageEyebrow = document.querySelector("#pageEyebrow");
const pageTitle = document.querySelector("#pageTitle");
const pageDescription = document.querySelector("#pageDescription");
const workspace = document.querySelector(".workspace");
const mainContent = document.querySelector("#mainContent");
const projectModal = document.querySelector("#projectModal");
const projectModalCard = document.querySelector(".project-modal-card");
const projectModalContent = document.querySelector("#projectModalContent");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const modalCloseButton = document.querySelector(".modal-close");
const appShell = document.querySelector(".app-shell");
const copyStatus = document.querySelector("#copyStatus");

const routeMeta = {
  inicio: { eyebrow: "Portafolio", title: "Desarrollador Full Stack", description: "Aplicaciones web, móviles y sistemas administrativos." },
  proyectos: { eyebrow: "Trabajo destacado", title: "Proyectos", description: "Casos profesionales anonimizados y demostraciones recreadas." },
  capacidades: { eyebrow: "Experiencia aplicada", title: "Experiencia técnica", description: "Interfaces, servicios, datos, seguridad e integraciones." },
  "forma-de-trabajo": { eyebrow: "Criterio profesional", title: "Método de trabajo", description: "Privacidad, colaboración y comunicación técnica." },
  github: { eyebrow: "GitHub", title: "Repositorios", description: "Proyectos y demostraciones públicas con estructura y prácticas de desarrollo." },
  contacto: { eyebrow: "Contacto", title: "Oportunidades Full Stack", description: "Contacto profesional, experiencia y formación." },
};

const routeAliases = {
  dashboard: "inicio",
  modulos: "capacidades",
  privacidad: "forma-de-trabajo",
  repos: "github",
};

let activeFilter = "Todos";
let lastFocusedElement = null;
let modalCloseTimer = null;
let copyResetTimer = null;

function normalizeRoute() {
  const hash = window.location.hash.slice(1) || "inicio";
  const route = routeAliases[hash] || hash;
  return routeMeta[route] ? route : "inicio";
}

function setRoute(route, { moveFocus = false } = {}) {
  const canonicalRoute = routeAliases[route] || route;
  const meta = routeMeta[canonicalRoute] || routeMeta.inicio;

  views.forEach((view) => {
    const isActive = view.dataset.view === canonicalRoute;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });

  navLinks.forEach((link) => {
    const isCurrent = link.dataset.navRoute === canonicalRoute;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  pageEyebrow.textContent = meta.eyebrow;
  pageTitle.textContent = meta.title;
  pageDescription.textContent = meta.description;
  document.title = `${meta.title} | Andrés Arévalo`;
  document.body.dataset.route = canonicalRoute;

  if (workspace) workspace.scrollTo({ top: 0, behavior: "auto" });
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  if (moveFocus) mainContent.focus({ preventScroll: true });
}

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createStack(items, label = "Tecnologías") {
  const list = element("ul", "stack");
  list.setAttribute("aria-label", label);
  items.forEach((item) => list.append(element("li", "", item)));
  return list;
}

function createProjectImage(project, large = false) {
  const figure = element("figure", `project-image ${large ? "project-image-large" : ""} ${project.id}`.trim());
  const image = element("img");
  image.src = project.image;
  image.alt = project.imageAlt;
  image.loading = large ? "eager" : "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    figure.classList.add("is-fallback");
    image.hidden = true;
  });
  figure.append(image, element("figcaption", "", project.title));
  return figure;
}

function createProjectCard(project) {
  const card = element("article", "project-card");
  card.dataset.projectCard = project.id;
  card.setAttribute("role", "listitem");

  const copy = element("div", "project-card-copy");
  copy.append(element("span", "tag", project.label));
  copy.append(element("h3", "", project.title));
  copy.append(element("p", "project-summary", project.summary));
  copy.append(element("p", "project-role", project.role));
  copy.append(createStack(project.stack, `Tecnologías de ${project.title}`));

  const detailButton = element("button", "project-detail-button", "Ver detalles");
  detailButton.type = "button";
  detailButton.dataset.project = project.id;
  detailButton.setAttribute("aria-haspopup", "dialog");
  detailButton.addEventListener("click", () => openProjectModal(project.id));
  copy.append(detailButton);

  card.append(copy, createProjectImage(project));
  return card;
}

function renderProjects() {
  const visibleProjects = activeFilter === "Todos"
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));
  projectGrid.replaceChildren(...visibleProjects.map(createProjectCard));
  if (filterStatus) {
    filterStatus.textContent = activeFilter === "Todos"
      ? `Se muestran los ${visibleProjects.length} proyectos.`
      : `Filtro ${activeFilter}: ${visibleProjects.length} proyectos.`;
  }
}

function createProjectDetails(project) {
  const layout = element("div", "project-modal-layout");
  layout.append(createProjectImage(project, true));

  const content = element("div", "detail-content");
  content.append(element("span", "tag", "Caso anonimizado · demostración recreada"));
  const title = element("h2", "", project.title);
  title.id = "projectModalTitle";
  const summary = element("p", "detail-text", project.summary);
  summary.id = "projectModalSummary";
  content.append(title, summary);

  const meta = element("dl", "detail-meta");
  [["Participación", project.role], ["Área", project.label]].forEach(([label, value]) => {
    const group = element("div");
    group.append(element("dt", "", label), element("dd", "", value));
    meta.append(group);
  });
  content.append(meta);

  const detailList = element("div", "detail-list");
  [["Problema", project.problem], ["Solución", project.solution], ["Funciones", project.features.join(" · ")], ["Privacidad", project.privacy]].forEach(([heading, value]) => {
    const article = element("article");
    article.append(element("h3", "", heading), element("p", "", value));
    detailList.append(article);
  });
  content.append(detailList, createStack(project.stack, "Tecnologías del proyecto"));
  layout.append(content);
  return layout;
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project || !projectModal || !projectModalContent || !projectModalCard) return;

  window.clearTimeout(modalCloseTimer);
  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  projectModalContent.replaceChildren(createProjectDetails(project));
  appShell.inert = true;
  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  void projectModal.offsetHeight;
  projectModal.classList.add("is-open");
  modalCloseButton.focus({ preventScroll: true });
}

function closeProjectModal() {
  if (!projectModal || projectModal.hidden) return;
  window.clearTimeout(modalCloseTimer);
  projectModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  modalCloseTimer = window.setTimeout(() => {
    projectModal.hidden = true;
    appShell.inert = false;
    projectModalContent.replaceChildren();
    if (lastFocusedElement?.isConnected) lastFocusedElement.focus({ preventScroll: true });
    lastFocusedElement = null;
  }, 180);
}

function trapModalFocus(event) {
  if (event.key !== "Tab" || !projectModal || projectModal.hidden) return;
  const focusable = Array.from(projectModal.querySelectorAll("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])"))
    .filter((node) => node.getClientRects().length > 0 && node.tabIndex >= 0);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && (document.activeElement === first || document.activeElement === projectModalCard)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderCapabilities() {
  const nodes = capabilities.map((capability, index) => {
    const card = element("article", "module-domain capability-card");
    card.setAttribute("role", "listitem");
    const header = element("header");
    const label = element("p", "eyebrow", String(index + 1).padStart(2, "0"));
    header.append(label, element("span", "module-count", "Capacidad"));
    card.append(header, element("h3", "", capability.title), element("p", "", capability.description));
    const skills = element("ul", "module-skills");
    capability.skills.forEach((skill) => skills.append(element("li", "", skill)));
    card.append(skills);
    return card;
  });
  moduleBoard.replaceChildren(...nodes);
}

function renderWorkSteps() {
  const cards = workSteps.map((step, index) => {
    const card = element("article", "privacy-card");
    card.setAttribute("role", "listitem");
    card.append(element("span", "", String(index + 1).padStart(2, "0")), element("h3", "", step.title), element("p", "", step.description));
    return card;
  });
  workStepsList.replaceChildren(...cards);
}

function createRepoCard(repo) {
  const card = element("article", "repo-card");
  card.setAttribute("role", "listitem");
  card.append(element("span", "repo-note", repo.note), element("h3", "", repo.name), element("p", "", repo.description), element("div", "repo-role", repo.role));
  card.append(createStack(repo.stack, `Tecnologías de ${repo.name}`));
  const actions = element("div", "repo-actions");
  const link = element("a", "repo-link", "Ver repositorio");
  link.href = repo.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `Abrir el repositorio público ${repo.name} en GitHub`);
  actions.append(link);
  card.append(actions);
  return card;
}

function renderRepos() {
  repoShowcase.replaceChildren(...repos.map(createRepoCard));
  repoVerificationNote.hidden = true;
}

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const requested = link.getAttribute("href")?.slice(1);
    const route = routeAliases[requested] || requested;
    if (!route || !routeMeta[route]) return;
    event.preventDefault();
    if (normalizeRoute() === route) {
      setRoute(route);
      return;
    }
    window.location.hash = route;
  });
});

window.addEventListener("hashchange", () => setRoute(normalizeRoute(), { moveFocus: true }));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectModal();
  trapModalFocus(event);
});
modalCloseButtons.forEach((button) => button.addEventListener("click", closeProjectModal));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderProjects();
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.copy;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Correo copiado al portapapeles.";
      const previousLabel = button.textContent;
      button.textContent = "Correo copiado";
      window.clearTimeout(copyResetTimer);
      copyResetTimer = window.setTimeout(() => { button.textContent = previousLabel; }, 1600);
    } catch {
      copyStatus.textContent = "No fue posible copiar el correo. Usa el enlace Enviar correo.";
    }
  });
});

renderProjects();
renderCapabilities();
renderWorkSteps();
renderRepos();
setRoute(normalizeRoute());
