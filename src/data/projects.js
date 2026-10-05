const projects = [
  {
    id: "musicalizarte",
    title: "Musicalizarte",
    category: "Proyecto real · En producción",

    description:
      "Medio digital de música y cultura desarrollado con React y una API propia en Node.js y Express que integra y adapta contenido administrado desde Wix.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "REST API",
      "Wix SDK",
    ],

    image: "/images/projects/musicalizarte.webp",

    liveUrl: "https://www.musicalizarte.com.ar/",
    githubUrl: "https://github.com/DaroPonce21/musicalizarte",

    caseStudy: {
      problem:
        "Musicalizarte necesitaba renovar su experiencia web sin abandonar Wix como sistema de gestión de contenidos. El desafío era mantener allí la administración de publicaciones y eventos, pero construir una experiencia frontend independiente y adaptada a las necesidades del sitio.",

      solution:
        "Desarrollé un frontend en React y una API propia en Node.js y Express que funciona como capa intermedia entre la aplicación y los servicios de Wix. El backend obtiene publicaciones, categorías, autores y eventos, transforma esos datos y entrega al frontend una estructura más simple y específica para la aplicación.",

      architecture: [
        "Wix Blog / Events",
        "Wix SDK",
        "Node.js + Express",
        "REST API",
        "React",
      ],

      responsibilities: [
        "Desarrollo de la interfaz y navegación con React y React Router",
        "Creación de una API REST propia con Node.js y Express",
        "Integración del backend con Wix Blog, Events y Members",
        "Normalización de publicaciones, categorías, autores y eventos",
        "Implementación de listados, búsqueda, categorías y páginas de detalle",
        "Manejo de estados de carga, error y contenido vacío",
        "Diseño responsive y creación de componentes reutilizables",
      ],

      challenges: [
        "Transformar las estructuras entregadas por Wix en modelos más simples para el frontend",
        "Convertir las referencias wix:image:// en imágenes utilizables por la aplicación",
        "Transformar imágenes embebidas dentro del Rich Content de las publicaciones",
        "Resolver la paginación de Wix para obtener el conjunto completo de publicaciones",
        "Relacionar publicaciones con sus categorías y autores evitando consultas y datos duplicados",
        "Construir publicaciones relacionadas y navegación entre artículos sin trasladar esa complejidad al frontend",
      ],
      gallery: [
        {
          image: "/images/projects/musicalizarte-posts.webp",
          title: "Exploración de publicaciones",
          description:
            "Listado de contenidos con búsqueda, categorías, ordenamiento y publicación destacada.",
        },
        {
          image: "/images/projects/musicalizarte-article.webp",
          title: "Detalle de publicación",
          description:
            "Vista editorial con autor, categorías, tiempo de lectura, contenido enriquecido y publicaciones relacionadas.",
        },
        {
          image: "/images/projects/musicalizarte-event.webp",
          title: "Agenda y detalle de eventos",
          description:
            "Información de shows integrada desde Wix Events, incluyendo fecha, ubicación, entradas y datos del evento.",
        },
      ],
    },
  },
  {
    id: "devjobs",
    title: "DevJobs",
    category: "Proyecto personal · MVP",

    description:
      "Plataforma de búsqueda de empleos tecnológicos desarrollada con React, con búsqueda en tiempo real, filtros combinables, ordenamiento, paginación y persistencia de postulaciones.",

    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "CSS",
      "LocalStorage",
    ],

    image: "/images/projects/devjobs.webp",

    liveUrl: "https://dev-jobs-wheat.vercel.app/",
    githubUrl: "https://github.com/DaroPonce21/DevJobs",

    caseStudy: {
      problem:
        "DevJobs nació como un proyecto para construir una experiencia de búsqueda de empleos tecnológicos donde el usuario pudiera explorar ofertas, combinar distintos criterios de búsqueda y mantener el estado de sus postulaciones. El desafío principal fue coordinar búsqueda, filtros, ordenamiento, paginación y navegación sin perder consistencia entre la interfaz y la URL.",

      solution:
        "Desarrollé una SPA en React organizada mediante componentes reutilizables y hooks personalizados. La aplicación permite buscar ofertas con debounce, combinar filtros por tecnología, modalidad y nivel de experiencia, ordenar resultados y navegar mediante paginación. Los filtros activos se sincronizan con query parameters para conservar el estado de la búsqueda, mientras que las postulaciones se almacenan en LocalStorage para mantenerlas entre sesiones.",

      architecture: [
        "Data JSON",
        "Custom Hooks",
        "React",
        "React Router",
        "LocalStorage",
      ],

      responsibilities: [
        "Desarrollo de la interfaz y navegación con React y React Router",
        "Implementación de búsqueda en tiempo real con debounce",
        "Creación de filtros combinables por tecnología, ubicación y nivel de experiencia",
        "Implementación de ordenamiento por empresa, fecha y seniority",
        "Desarrollo de paginación para los resultados de búsqueda",
        "Sincronización de búsqueda, filtros y ordenamiento mediante query parameters",
        "Persistencia de postulaciones utilizando LocalStorage",
        "Creación de hooks personalizados para separar búsqueda, filtros, paginación, carga de datos y postulaciones",
        "Manejo de estados de carga, error, resultados vacíos y ofertas inexistentes",
        "Diseño responsive y creación de navegación adaptable para dispositivos móviles",
      ],

      challenges: [
        "Mantener sincronizados los filtros visibles con los parámetros de la URL",
        "Combinar búsqueda, múltiples filtros y ordenamiento sin modificar los datos originales",
        "Evitar búsquedas innecesarias implementando debounce en el campo de texto",
        "Reiniciar y mantener correctamente la paginación al modificar los criterios de búsqueda",
        "Persistir el estado de las postulaciones entre recargas mediante LocalStorage",
        "Mantener una experiencia consistente al navegar entre el listado y el detalle de cada oferta",
        "Adaptar filtros, tarjetas, navegación y páginas de detalle a diferentes tamaños de pantalla",
      ],

      gallery: [
        {
          image: "/images/projects/devjobs-search.webp",
          title: "Búsqueda y filtros combinados",
          description:
            "Exploración de ofertas mediante búsqueda con debounce, filtros combinables por tecnología, ubicación y nivel de experiencia, junto con distintos criterios de ordenamiento.",
        },
        {
          image: "/images/projects/devjobs-application.webp",
          title: "Detalle y seguimiento de postulaciones",
          description:
            "Vista detallada de cada oferta con información del puesto y estado de postulación persistido mediante LocalStorage.",
        },
        {
          image: "/images/projects/devjobs-profile.webp",
          title: "Diseño de perfil de usuario",
          description:
            "Interfaz diseñada para la evolución del producto hacia perfiles de usuario, gestión de información profesional, candidaturas y ofertas guardadas.",
        },
      ],
    },
  },
];

export default projects;
