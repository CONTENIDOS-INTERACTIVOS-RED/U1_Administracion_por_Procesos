export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Teoría de la administración por procesos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Subtítulo tema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Subtítulo tema',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Subtítulo tema',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subtítulo tema',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Subtítulo tema',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Subtítulo tema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Subtítulo tema',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Martínez Martínez, A. & Cegarra Navarro, J. G. (2014). Gestión por procesos de negocio: organización horizontal. Ecobook - Editorial del Economista.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/114309?page=84',
    },
    {
      referencia:
        'Angel Maldonado, J. (2012). Gestión de procesos (o gestión por procesos). B - EUMED.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/51718?page=4',
    },
    {
      referencia:
        'Pardo Álvarez, J. M. (2017). Gestión por procesos y riesgo operacional. AENOR - Asociación Española de Normalización y Certificación.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53618?page=20',
    },
    {
      referencia:
        'Baca Urbina, G. (2015). Administración integral: hacia un enfoque de procesos. Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39374?page=10',
    },
    {
      referencia:
        'Martínez Martínez, A. & Cegarra Navarro, J. G. (2014). Gestión por procesos de negocio: organización horizontal. Ecobook - Editorial del Economista.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/114309?page=84',
    },
    {
      referencia:
        'Angel Maldonado, J. (2012). Gestión de procesos (o gestión por procesos). B - EUMED.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/51718?page=4',
    },
  ],
  glosario: [
    {
      termino: 'Cliente interno',
      significado:
        'Persona, área o proceso dentro de una organización que recibe el resultado (producto o servicio) de un proceso para transformarlo o utilizarlo en el desarrollo de otro.',
    },
    {
      termino: 'Cliente externo',
      significado:
        'Persona o entidad fuera de la organización que recibe el producto o servicio final de un proceso, satisfaciendo sus necesidades o expectativas.',
    },
    {
      termino: 'Gestión por procesos',
      significado:
        'Enfoque organizacional que identifica, gestiona y mejora los procesos de manera continua, priorizando la eficiencia, efectividad y la generación de valor para el cliente.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Principio que promueve la evaluación y optimización constante de los procesos, buscando mayor eficiencia, reducción de errores y adaptación a los cambios del entorno.',
    },
    {
      termino: 'Proceso',
      significado:
        'Conjunto de actividades y recursos interrelacionados que transforman entradas (inputs) en salidas (outputs), generando valor para un cliente interno o externo.',
    },
    {
      termino: 'Proceso clave',
      significado:
        'Actividades esenciales para el cumplimiento de la misión organizacional, directamente relacionadas con la creación de valor para el cliente.',
    },
    {
      termino: 'Proceso interfuncional',
      significado:
        'Proceso que atraviesa varias áreas o departamentos de la organización, promoviendo la colaboración para alcanzar un objetivo común.',
    },
    {
      termino: 'Proceso interno',
      significado:
        'Actividades realizadas exclusivamente dentro de la organización para satisfacer necesidades internas, aunque no siempre generan valor directo.',
    },
    {
      termino: 'Subproceso',
      significado:
        'Parte más pequeña y definida de un proceso, que utiliza recursos para transformarlos o agregarles valor, contribuyendo al logro de un objetivo mayor.',
    },
    {
      termino: 'Valor',
      significado:
        'Resultado que un proceso o subproceso aporta al cliente, ya sea en forma de producto, servicio o beneficio, cumpliendo sus expectativas y necesidades.',
    },
  ],
}
