<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Origen, conceptualización y componentes de los procesos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p(data-aos="fade-up") Los procesos son la base fundamental de cualquier sistema organizacional, puesto que permiten transformar insumos en resultados, mediante una secuencia lógica de actividades. Su origen se remonta a la necesidad de estructurar y optimizar el trabajo humano, destacando enfoques históricos como la administración científica de Taylor, que buscaba eficiencia en las tareas.

  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Concepto de proceso

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Teniendo en cuenta a Martínez Martínez, A. y Cegarra Navarro, J. G. (2014), la palabra "proceso" proviene del latín processus, que significa progreso o avance. 

          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Se entiende como un conjunto de actividades interrelacionadas que consumen recursos específicos, como materias primas y tareas, para generar un valor añadido a las entradas iniciales (inputs), con el propósito de obtener resultados finales (outputs).

          p(data-aos="fade-left") El término puede abordarse desde distintas perspectivas. Por ejemplo, un proceso puede definirse como la gestión integral de las actividades organizativas que aportan valor o como un conjunto de acciones interconectadas que convierten insumos en resultados. 

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")



      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")

        .col-lg-8

          .bg-color-7.p-4(data-aos="fade-left").mb-4
            p.mb-0 Es fundamental no confundir un proceso con un procedimiento. Mientras que el procedimiento establece las instrucciones detalladas sobre cómo realizar una tarea, el proceso se enfoca en qué se hace, sin especificar el "cómo".

          p(data-aos="fade-left") Además, no todas las actividades dentro de una organización se consideran procesos; algunas corresponden a subprocesos que forman parte de un esquema organizativo más amplio. Por tanto, los procesos representan estructuras claves en la creación de valor, mientras que los procedimientos sirven como guías para su ejecución.

          p(data-aos="fade-left") Para determinar si una actividad dentro de una organización es un proceso o un subproceso, es importante observar ciertas características:


      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5.pt-4
          .row.justify-content-center.align-items-center.bg-h85
            .col-lg-11
              .row.justify-content-center.align-items-center
                .col-lg-7(data-aos="fade-left")
                  .pt-1.pb-4.pb-lg-0
                    ul.lista-ul--color.color-dark
                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Poseen una misión claramente definida.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Pueden descomponerse en tareas u operaciones específicas.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Implican entradas y salidas (inputs y outputs), permitiendo identificar a los proveedores, clientes y el producto final.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Se puede asignar a una persona la responsabilidad de gestionarlo.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Pueden ser estabilizados mediante metodologías de gestión por procesos, considerando tiempo, recursos y costos.

                .col-lg-5(data-aos="zoom-in")
                  img.img-fluid(src='@/assets/curso/tema2/4.svg', style="max-width:505px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

      p(data-aos="fade-left") En una organización, los procesos suelen clasificarse en tres categorías principales:

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0

        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Procesos estratégicos")
              p Estos procesos son responsables de establecer la dirección y la gestión general de la organización. Definen y controlan las metas, políticas y estrategias, estando estrechamente vinculados con la misión y visión de la empresa. De su correcta implementación, depende la configuración y el funcionamiento de los procesos operativos y de apoyo.

            .div(titulo="Procesos operativos")
              p Se relacionan directamente con el cliente externo, porque son esenciales para la creación del producto o servicio. Estos procesos permiten al cliente percibir y evaluar la calidad ofrecida por la organización. También se les denomina procesos claves, pues actúan sobre la demanda del cliente. Su objetivo es generar valor añadido a través de una secuencia de actividades que transforman entradas en resultados alineados con los objetivos y estrategias organizacionales. Además, suelen ser interfuncionales, abarcando diferentes áreas de la organización de manera transversal.

            .div(titulo="Procesos de apoyo o soporte")
              p Son aquellos que proporcionan los recursos necesarios para que los procesos operativos puedan generar el valor esperado por los clientes. Aunque sus resultados no son visibles para el cliente externo, son fundamentales para el funcionamiento eficiente de la organización. Estos procesos, que incluyen la gestión de personas, materias primas y maquinaria, suelen estar altamente estandarizados y, en muchos casos, son candidatos ideales para el outsourcing. Sus clientes principales son internos dentro de la organización.


      .bg-full-width.bg-color-7.mb-4
        .px-4.px-md-5.py-4
          p(data-aos="fade-left").mb-0 De esta manera, comprender la naturaleza y el propósito de cada tipo de proceso, permite a las organizaciones gestionar y optimizar sus actividades de forma eficiente.


      .titulo-figura.mb-4
        h5 Figura 1. 
        span Concepto de proceso

      .bg-color-info.mb-0
        .p-4.p-lg-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              figure
                img(src='@/assets/curso/tema2/6.png', alt='', style="max-width: 1030px;").mx-auto

      figcaption.mb-5
        p.mb-0 Nota. Tomado de Martínez Martínez, A. & Cegarra Navarro, J. G. (2014).

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Componentes de los procesos

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 959px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="4%" y="15%" numero="+")
                  h5 Entradas (Inputs)
                  p Son los recursos, datos, información, materiales o cualquier otro elemento, necesario para iniciar y ejecutar un proceso. Las entradas alimentan el proceso para que pueda generar un resultado específico.

                .bg-color-white.box-shadow.p-3(x="4%" y="50%" numero="+")
                  h5 Actividades o tareas
                  p Son las acciones específicas que se llevan a cabo dentro del proceso. Estas actividades se ejecutan de forma secuencial o paralela para transformar las entradas en salidas. Cada tarea debe estar bien definida y alineada con el objetivo del proceso.

                .bg-color-white.box-shadow.p-3(x="4%" y="83%" numero="+")
                  h5 Recursos
                  p Son los elementos necesarios para ejecutar las actividades del proceso. Incluyen recursos humanos, tecnológicos, financieros y materiales. Una gestión adecuada de los recursos, asegura la eficacia del proceso.

                .bg-color-white.box-shadow.p-3(x="36%" y="15%" numero="+")
                  h5 Salidas (Outputs)
                  p Son los resultados generados al final del proceso, que pueden ser bienes, servicios, informes, decisiones o cualquier otro producto tangible o intangible. Las salidas deben cumplir con los requisitos de calidad establecidos y satisfacer las expectativas del cliente interno o externo.

                .bg-color-white.box-shadow.p-3(x="36%" y="50%" numero="+")
                  h5 Clientes
                  p Son los destinatarios de las salidas del proceso. Pueden ser clientes internos (otras áreas dentro de la organización) o clientes externos (consumidores finales). Los procesos deben estar diseñados para cumplir con las necesidades y expectativas de los clientes.


                .bg-color-white.box-shadow.p-3(x="36%" y="83%" numero="+")
                  h5 Indicadores de desempeño (KPI - Key Performance Indicators)
                  p Son métricas utilizadas para medir la eficiencia, efectividad y calidad del proceso. Los indicadores permiten evaluar si el proceso está cumpliendo con sus objetivos y facilitan la identificación de áreas de mejora.

                .bg-color-white.box-shadow.p-3(x="68%" y="15%" numero="+")
                  h5 Infraestructura tecnológica
                  p Incluye las herramientas, sistemas y plataformas que soportan la ejecución del proceso. La tecnología facilita la automatización, la gestión de información y el monitoreo en tiempo real.

                .bg-color-white.box-shadow.p-3(x="68%" y="50%" numero="+")
                  h5 Retroalimentación
                  p Es la información que se obtiene al evaluar las salidas del proceso y que sirve para identificar oportunidades de mejora. La retroalimentación es esencial para la mejora continua y la innovación en los procesos.
                

      p(data-aos="fade-left") Según Martínez Martínez, A. y Cegarra Navarro, J. G. (2014), un proceso se define como un conjunto estructurado de actividades relacionadas que trabajan juntas para transformar uno o varios tipos de entradas (inputs) en resultados (outputs), que aportan valor al cliente. Estos autores resaltan varios puntos importantes: 

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Un proceso no está compuesto por una sola actividad, sino por varias.

        .col-lg-6
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Estas actividades no son aleatorias, sino organizadas y relacionadas entre sí.

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Todas las actividades trabajan en conjunto, para alcanzar un objetivo común.
        .col-lg-6
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los procesos están diseñados para generar un resultado que satisfaga al cliente, ya sea interno o externo.



      .row.mb-5

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")

        .col-lg-8

          p(data-aos="fade-left").mb-4 Algunos procesos pueden estar limitados a una sola función dentro de la organización, pero los más relevantes suelen ser interfuncionales, es decir, atraviesan varias áreas o departamentos dentro de la empresa, superando las divisiones que habitualmente aparecen en los organigramas. También existen procesos que se extienden más allá de los límites de una organización, denominados procesos interorganizacionales.

          .bg-color-7.p-4(data-aos="fade-left").mb-4
            p.mb-0 Para definir claramente un proceso, se identifican los eventos que lo inician (eventos de entrada) y los que lo finalizan (eventos de salida). Un evento de entrada se activa cuando se recibe una entrada externa, conocida como "driver". Entre estos dos eventos se desarrollan las actividades del proceso, las cuales constituyen el "espacio del proceso" ("process space"). Estas actividades consumen recursos como tiempo, tecnología, infraestructura, información, personas y servicios, y su costo total es la suma de todos estos recursos.
          
          p(data-aos="fade-right").mb-4 Los clientes juegan un papel clave, debido a que son quienes inician los procesos mediante los "drivers" y, a su vez, reciben los resultados finales del proceso, ya sea en forma de productos o servicios.


      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Para gestionar de manera más eficiente, es útil dividir el proceso en subprocesos más pequeños y asignar responsabilidades claras a las distintas áreas funcionales que participan. Esto permite que cada unidad funcional tenga una responsabilidad bien definida en cada subproceso. De esta forma, se facilita la organización y la mejora continua.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/12.png', alt='')



      .titulo-figura.mb-4
        h5 Figura 2. 
        span Proceso interfuncional

      .bg-color-info.mb-0
        .p-4.p-lg-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              figure
                img(src='@/assets/curso/tema2/13.png', alt='', style="max-width: 957px;").mx-auto

      figcaption.mb-4
        p.mb-0 Nota. Tomado de Martínez Martínez, A. & Cegarra Navarro, J. G. (2014).


      p(data-aos="fade-left") Una manera efectiva de hacer que los procesos sean más claros y comprensibles, es darles un nombre que refleje tanto su punto de inicio como su punto final. Este enfoque ayuda a visualizar todo el flujo de trabajo necesario, para pasar de un estado inicial a uno final. 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bg-color-6(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/14.svg', alt='')
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") Por ejemplo, si a un proceso se le llama simplemente “Producción”, puede generar confusión, dado que ese término también podría referirse al nombre de un departamento y no describe de manera específica las actividades que comprende. En cambio, un nombre como “de compras a embarque de productos” resulta mucho más intuitivo puesto que, indica claramente las etapas del proceso.
            .bg-color-9.mb-5
              .px-4.px-md-5.pt-4
                .row.justify-content-center.align-items-center.bg-h85
                  .col-lg-11
                    .row.justify-content-center.align-items-center
                      .col-lg-7(data-aos="fade-left")
                        .pt-1.pb-4.pb-lg-0
                          p.mb-3(data-aos="fade-up") Siguiendo esta lógica, otros nombres descriptivos para procesos podrían ser:

                          ul.lista-ul--color.color-dark
                            li.mb-2
                              i.fas.fa-arrow-circle-right
                              | “De concepto a prototipo” para el desarrollo de nuevos productos.
                            li.mb-2
                              i.fas.fa-arrow-circle-right
                              | “De cliente potencial a pedido” para el área de ventas.
                            li.mb-2
                              i.fas.fa-arrow-circle-right
                              | “De pedido a pago” para la gestión de órdenes de compra.

                      .col-lg-5(data-aos="zoom-in")
                        img.img-fluid(src='@/assets/curso/tema2/15.svg', style="max-width:295px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

      p(data-aos="fade-left") Sin embargo, cabe destacar que no todos los autores adoptan este tipo de nomenclatura, aunque es evidente que puede ser muy útil para facilitar la comprensión y gestión de los procesos.

      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Procesos y subprocesos

      p(data-aos="fade-left").mb-4 La gestión de procesos y subprocesos es esencial para garantizar la eficiencia y calidad en las operaciones organizacionales.
      
      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Procesos y subprocesos
              p.mb-4(data-aos="fade-right") En el PDF #[b Procesos y subprocesos], se analizan cómo estos elementos interconectados transforman recursos en resultados, destacando la importancia de los clientes internos y externos en la cadena de valor. Además, se profundiza en la diferenciación entre procesos internos y externos, así como en las dinámicas cliente-proveedor, ofreciendo estrategias para optimizar la comunicación y garantizar resultados efectivos.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Procesos y subprocesos

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/16.png', alt='')


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.redalyc.org/articulo.oa?id=409659500003" target="_blank" rel="noopener noreferrer") González González, A., Leal Rodríguez, L., Martínez Caballero, D., & Morales Fonte, D. (2019). Herramientas para la gestión por procesos. Cuadernos Latinoamericanos de Administración, 15(28). Universidad El Bosque.
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/VdmtAupDGc0?si=DKz72eJSdF7zB248" target="_blank" rel="noopener noreferrer") CEC – IAEN. (2016, 9 nov) La importancia de los procesos en las empresas.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
