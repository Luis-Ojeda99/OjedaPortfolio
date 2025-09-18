export const portfolioData = [
  // Projects
  {
    id: 1,
    title: "HOMEnVentory",
    category: "projects",
    categoryLabel: "Proyectos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/HOMEnVentory-square.webp`,
    description:
      "Sistema de gestión de inventario construido con Python (Django) y SQLite. Incluye autenticación, recuperación de contraseñas y panel de administración.",
    shortDescription:
      "Aplicación web Django para gestión de inventario doméstico",
    githubUrl: "https://github.com/Luis-Ojeda99/HOMEnVentory",
    technologies: ["Python", "Django", "Patrón MTV"],
  },
  {
    id: 2,
    title: "Servicio de Notificaciones",
    category: "projects",
    categoryLabel: "Proyectos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/notificaiton-service-square.webp`,
    description:
      "Servicio de notificaciones construido con Node.js y PostgreSQL. Incluye entrega masiva de emails, análisis y soporte multicanal.",
    shortDescription:
      "Servicio de notificaciones construido con Node.js y PostgreSQL",
    githubUrl: "https://github.com/Luis-Ojeda99/notification-service",
    technologies: ["Node.js", "PostgreSQL", "JavaScript"],
  },
  {
    id: 3,
    title: "Rastreador de Búsqueda Laboral",
    category: "projects",
    categoryLabel: "Proyectos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/jobhunt-tracker-square.webp`,
    description:
      "Una aplicación web construida con Node.js, Express y PostgreSQL para rastrear solicitudes de empleo, actualizar estados y monitorear el progreso durante la búsqueda laboral.",
    shortDescription:
      "Rastreador de solicitudes de empleo construido con Node.js, Express y PostgreSQL",
    githubUrl: "https://github.com/Luis-Ojeda99/jobhunt-tracker",
    technologies: ["Node.js", "PostgreSQL", "Express"],
  },
  {
    id: 4,
    title: "Aplicación de Marcadores",
    category: "projects",
    categoryLabel: "Proyectos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/bookmark-app-square.webp`,
    description:
      "Sitio web de marcadores para realizar seguimiento de tus sitios web favoritos. Creado usando HTML/CSS/JS.",
    shortDescription: "Aplicación web para gestionar y organizar marcadores",
    demoUrl: "https://luis-ojeda99.github.io/bookmarks-app/",
    demoText: "Ver Demo",
    githubUrl: "https://github.com/Luis-Ojeda99/bookmarks-app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Aplicación Calculadora",
    category: "projects",
    categoryLabel: "Proyectos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/calculator-app-square.webp`,
    description:
      "Aplicación web calculadora con funcionalidad para realizar operaciones básicas de suma, resta, multiplicación y división.",
    shortDescription:
      "Calculadora básica con operaciones matemáticas esenciales",
    demoUrl: "https://luis-ojeda99.github.io/calculator/",
    demoText: "Ver Demo",
    githubUrl: "https://github.com/Luis-Ojeda99/calculator",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "TicTacToe Java",
    category: "projects",
    categoryLabel: "Proyectos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/ticTacToe-java-square.webp`,
    description: "Proyecto TicTacToe creado usando Java.",
    shortDescription: "Juego clásico de TicTacToe construido con Java",
    githubUrl: "https://github.com/Luis-Ojeda99/TicTacToe",
    technologies: ["Java"],
  },
  {
    id: 7,
    title: "Sitio Web Portafolio",
    category: "projects",
    categoryLabel: "Proyectos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/portfolio-website-square.webp`,
    description:
      "Sitio web de portafolio personal construido con React y Tailwind CSS. Incluye diseño responsivo, componentes modulares y optimización SEO.",
    shortDescription:
      "Este sitio web de portafolio React que estás viendo actualmente",
    githubUrl: "https://github.com/Luis-Ojeda99/OjedaPortfolio",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },

  // Articles
  {
    id: 8,
    title: "Artículo Importancia de PHP",
    category: "articles",
    categoryLabel: "Artículos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/php-post-square.webp`,
    description:
      "Artículo sobre el lenguaje PHP y su importancia para desarrolladores web.",
    shortDescription:
      "Artículo de Medium discutiendo el papel de PHP en desarrollo web",
    articleUrl:
      "https://medium.com/php-and-its-importance-if-you-want-to-be-a-web",
    articleText: "Leer Artículo",
    technologies: ["PHP", "Desarrollo Web"],
  },
  {
    id: 9,
    title: "Artículo Qué es PHP",
    category: "articles",
    categoryLabel: "Artículos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/php-post2-square.webp`,
    description:
      "Artículo sobre qué es el lenguaje PHP y por qué deberías aprenderlo.",
    shortDescription:
      "Guía para principiantes del lenguaje de programación PHP",
    articleUrl:
      "https://medium.com/@luisojeda27180/what-is-php-and-why-you-should-learn-it-a76f2750f367",
    articleText: "Leer Artículo",
    technologies: ["PHP", "Tutorial"],
  },
  {
    id: 10,
    title: "Creando Aplicación Web PHP",
    category: "articles",
    categoryLabel: "Artículos",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/php-post3-square.webp`,
    description: "Artículo sobre crear una aplicación web usando PHP.",
    shortDescription: "Tutorial sobre construcción de aplicaciones web con PHP",
    articleUrl:
      "https://medium.com/@luisojeda27180/creating-a-php-web-application-7d69fa6e23d",
    articleText: "Leer Artículo",
    technologies: ["PHP", "Desarrollo Web", "Tutorial"],
  },

  // About Me / Personal Links
  {
    id: 11,
    title: "Perfil de GitHub",
    category: "me",
    categoryLabel: "Sobre Mí",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/github-profile-square.webp`,
    description:
      "Mi perfil de GitHub mostrando todos mis proyectos y contribuciones.",
    shortDescription: "Revisa mis repositorios de código y contribuciones",
    profileUrl: "https://github.com/Luis-Ojeda99",
    profileText: "Visitar Perfil",
    technologies: ["Git", "Código Abierto"],
  },
  {
    id: 12,
    title: "Perfil de LinkedIn",
    category: "me",
    categoryLabel: "Sobre Mí",
    image: `${process.env.PUBLIC_URL}/img/portfolio/thumbnails/linkedin-logo-square.webp`,
    description: "Mi perfil profesional de LinkedIn.",
    shortDescription: "Conéctate conmigo profesionalmente en LinkedIn",
    profileUrl: "https://www.linkedin.com/in/luis-a-ojeda/",
    profileText: "Visitar Perfil",
    technologies: ["Networking Profesional"],
  },
];

export const portfolioFilters = [
  { key: "all", label: "Todos" },
  { key: "projects", label: "Proyectos" },
  { key: "articles", label: "Artículos" },
  { key: "me", label: "Sobre Mí" },
];