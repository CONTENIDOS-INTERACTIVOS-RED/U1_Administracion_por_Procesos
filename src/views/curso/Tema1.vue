<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Metodología del diagnóstico de la situación actual'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El diagnóstico de la situación actual en el marco de la administración por procesos, es una metodología que permite analizar, comprender y evaluar el estado actual de los procesos de una organización, con el fin de identificar sus fortalezas, debilidades, oportunidades de mejora y posibles ineficiencias. 


    p(data-aos="fade-up").mb-4 Este análisis permite optimizar los procesos existentes y alinearlos con los objetivos estratégicos de la empresa.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] ¿En qué consiste el diagnóstico de la situación actual?

    p(data-aos="fade-up") La metodología del diagnóstico de la situación actual se basa en:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/2.png', alt='')
          .col-lg-8
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Identificación de procesos
                p.text-center Se deben mapear todos los procesos relevantes que intervienen en la generación de valor para el cliente, diferenciándolos en procesos estratégicos, operativos y de soporte.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Análisis de la estructura y documentación
                p.text-center Se evalúa la claridad con la que los procesos están definidos y documentados, incluyendo flujos de trabajo, responsables, recursos empleados y resultados obtenidos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Medición del desempeño
                p.text-center Se recopilan datos claves sobre tiempos, costos, calidad y niveles de satisfacción, utilizando indicadores de desempeño previamente definidos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Identificación de cuellos de botella e ineficiencias
                p.text-center Se busca determinar actividades que no agregan valor, duplicidades, retrasos, errores frecuentes y demoras que impactan negativamente en el flujo de los procesos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evaluación de la alineación con los objetivos estratégicos
                p.text-center Se analiza si los procesos actuales están orientados a cumplir con los objetivos de la organización y satisfacer las necesidades de los clientes.


    h2(data-aos="fade-up") Acciones diferenciadoras bajo la administración por procesos

    p(data-aos="fade-up") En contraste con enfoques tradicionales, el diagnóstico de la situación actual en la administración por procesos, enfatiza:

    .row.align-items-start.mb-5

      .col-lg-8
        p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

        AcordionA(tipo="b")
          .div(titulo="Visión transversal")
            p En lugar de analizar los departamentos de manera aislada, se evalúa cómo interactúan entre sí, para completar un proceso de principio a fin. Por ejemplo, en una empresa de manufactura, el proceso de "producción y entrega de productos" implica la coordinación entre las áreas de compras, almacén, producción, logística y ventas. Analizar este flujo permite identificar retrasos en la entrega de materiales o problemas de comunicación entre las áreas, mejorando la eficiencia global del proceso.

          .div(titulo="Foco en el cliente")
            p Se prioriza la perspectiva del cliente interno o externo al analizar si el proceso cumple con las expectativas de calidad, tiempo y costo. Por ejemplo, en una tienda en línea, el proceso de "gestión de pedidos" debe garantizar que los productos lleguen a tiempo y en perfectas condiciones. Si el cliente percibe retrasos o errores frecuentes, el diagnóstico identificará las causas, como problemas en la logística o en la gestión del inventario, para corregirlas.

          .div(titulo="Responsabilidad compartida")
            p Se promueve que los equipos trabajen en colaboración, eliminando barreras jerárquicas o funcionales que puedan obstaculizar el flujo de los procesos. Por ejemplo, en una empresa de servicios financieros, el proceso de "aprobación de créditos" podría involucrar al equipo de ventas, analistas de riesgo y gerentes. Al fomentar la comunicación y la colaboración entre ellos, se evita la duplicidad de tareas y se reduce el tiempo total de aprobación.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", alt="").mb-4.mb-lg-0


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Herramientas utilizadas en el diagnóstico de la situación actual

    p(data-aos="fade-up") Para llevar a cabo un diagnóstico efectivo, se emplean diversas herramientas que permiten recopilar, analizar y visualizar información sobre los procesos. Algunas de las herramientas más comunes son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              h5 Mapa de procesos
              p Representaciones visuales que muestran el flujo de trabajo, los pasos involucrados y las interacciones entre las distintas áreas. 

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Por ejemplo], en una clínica, un mapa de procesos podría detallar cómo el paciente pasa desde la recepción, consulta médica, laboratorio y farmacia, identificando posibles demoras en cada etapa.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              h5 Diagrama SIPOC
              p (Suppliers, Inputs, Process, Outputs, Customers). Ayuda a identificar los elementos del proceso, como proveedores, entradas, actividades principales, salidas y clientes. 

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Por ejemplo], en una empresa de logística, un diagrama SIPOC puede mostrar cómo las entradas (pedidos) de los clientes se transforman en entregas finales, resaltando posibles ineficiencias.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7
              h5 Análisis FODA de procesos
              p Permite identificar fortalezas, oportunidades, debilidades y amenazas específicas, para cada proceso.

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Por ejemplo], en un banco, un análisis FODA puede mostrar cómo una plataforma digital es una fortaleza, pero su limitada capacidad para manejar altos volúmenes de transacciones puede ser una debilidad.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7
              h5 Indicadores claves de desempeño (KPIs)
              p Métricas utilizadas para medir la eficacia y eficiencia de los procesos.

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Por ejemplo], el tiempo promedio de resolución de consultas al cliente o el porcentaje de pedidos entregados a tiempo, son indicadores críticos para evaluar el desempeño.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-5.png")
            .col-lg-7
              h5 Análisis de causa-raíz (Diagrama de Ishikawa)
              p Identifica las causas subyacentes de problemas recurrentes en los procesos.

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Por ejemplo], en una fábrica que enfrenta altos niveles de productos defectuosos, un diagrama de Ishikawa podría revelar que la causa principal, es una maquinaria obsoleta.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-6.png")
            .col-lg-7
              h5 Observación directa y entrevistas
              p Recopilación de información cualitativa mediante la interacción con los responsables y participantes de los procesos.

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Por ejemplo], en un restaurante, entrevistar a los camareros y observar el flujo de los pedidos puede revelar cuellos de botella en la comunicación entre la cocina y el personal de servicio.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-7.png")
            .col-lg-7
              h5 Análisis de flujo de valor (VSM - Value Stream Mapping)
              p Herramienta Lean que visualiza todas las etapas de un proceso desde el inicio hasta la entrega, identificando actividades que no agregan valor.

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Por ejemplo], en una empresa manufacturera, el VSM puede mostrar tiempos muertos entre etapas de producción.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Enfoques para identificar áreas de mejora en los procesos existentes

    p(data-aos="fade-up") Los enfoques para identificar las áreas de mejora en los procesos existentes, son:

    .row.align-items-start.mb-5

      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Enfoque basado en el cliente")
            p Analizar los procesos desde la perspectiva del cliente, evaluando si estos cumplen con sus expectativas y necesidades. Por ejemplo, en una aerolínea, un enfoque centrado en el cliente podría revelar que el tiempo de espera en el check-in es demasiado alto, afectando la experiencia del pasajero.

          .div(titulo="Enfoque basado en datos")
            p Utilizar herramientas como el análisis estadístico y los dashboards para tomar decisiones informadas sobre qué procesos requieren mejoras. Por ejemplo, un análisis de datos puede mostrar que un proceso de fabricación tiene una alta variabilidad en los tiempos de producción, lo que sugiere la necesidad de estandarización.

          .div(titulo="Enfoque Lean")
            p Identificar y eliminar actividades que no aportan valor, reduciendo desperdicios y optimizando recursos. Por ejemplo, en una empresa de distribución, se podría reducir el tiempo de manejo de inventarios, eliminando pasos innecesarios en el almacenamiento.

          .div(titulo="Ciclo PHVA (Planear, Hacer, Verificar, Actuar)")
            p Implementar un enfoque de mejora continua mediante iteraciones controladas y evaluación constante de resultados. Por ejemplo, en un hospital, el ciclo PHVA podría aplicarse para mejorar el proceso de admisión de los pacientes.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0



    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0

      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="<em>Benchmarking</em>")
            p Comparar los procesos internos con los de empresas líderes en la industria, para identificar oportunidades de mejora y adoptar mejores prácticas. Por ejemplo, una universidad podría analizar cómo otras instituciones gestionan sus procesos de inscripción para mejorar la experiencia del estudiante.

          .div(titulo="Enfoque basado en tecnología")
            p Implementar soluciones tecnológicas como sistemas ERP o software de automatización de procesos, para optimizar actividades y mejorar la trazabilidad. Por ejemplo, una empresa minorista podría implementar un sistema de gestión de inventarios en tiempo real, para reducir los costos.

          .div(titulo="Enfoque Kaizen")
            p Promover una cultura de mejora continua a través de pequeñas acciones diarias que, acumulativamente, generan grandes beneficios. Por ejemplo, en una línea de ensamblaje, los trabajadores podrían sugerir pequeñas mejoras en sus estaciones para aumentar la eficiencia.


    .bg-full-width.bg-color-6
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El diagnóstico de la situación actual en la administración por procesos, es un paso importante para comprender el estado de los desarrollos organizacionales y construir un camino hacia la mejora continua. Al integrar herramientas técnicas, enfoques centrados en el cliente y una visión transversal, este enfoque permite identificar las áreas de mejora con precisión, optimizar recursos y garantizar que los procesos contribuyan directamente al logro de los objetivos estratégicos.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=360433598002" target="_blank" rel="noopener noreferrer") Llanes-Font, M., Isaac-Godínez, C. L., Moreno-Pino, M., & García-Vidal, G. (2014). De la gestión por procesos a la gestión integrada por procesos. Ingeniería Industrial, 35(3), 255-264. Instituto Superior Politécnico José Antonio Echeverría. La Habana, Cuba.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/6WO-i3ZXwEE?si=9tHuEc_tZICorj9W" target="_blank" rel="noopener noreferrer") Sergio Cagua.(2020, 13 jun) Gestión por procesos | Sergio Cagua

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
