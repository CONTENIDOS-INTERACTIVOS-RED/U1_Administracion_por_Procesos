<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Principios de la gestión y clasificación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La gestión por procesos es un enfoque organizacional que prioriza la eficiencia y efectividad al identificar, gestionar y mejorar los procesos que generan valor para el cliente. Para implementarla de manera adecuada, se basa en una serie de principios fundamentales que orientan su aplicación y desarrollo.



      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Definición de gestión por procesos     

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") La gestión por procesos, también conocida como Business Process Management (BPM), implica un conjunto de actividades realizadas de manera integrada por distintos departamentos o áreas, dentro de una organización. Estas actividades están diseñadas para aportar valor y brindar un servicio eficiente a los clientes. Este enfoque proporciona una visión global y herramientas que permiten mejorar y rediseñar los flujos de trabajo, haciéndolos más efectivos y adaptados tanto a las necesidades de los clientes como a las expectativas de los grupos de interés. Es crucial recordar que los procesos son llevados a cabo por personas y están dirigidos a otras personas, por lo que las relaciones interpersonales desempeñan un papel fundamental.

          .bg-color-8.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La gestión por procesos se centra en administrar la organización a través de sus procesos, entendidos como una secuencia de actividades conectadas que añaden valor al transformar entradas en salidas que satisfacen los requerimientos del cliente. En este sentido, la eficiencia de una empresa depende en gran medida de la eficiencia de sus procesos. 

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      

      p(data-aos="fade-left") Muchas organizaciones han identificado las limitaciones de estructuras organizadas exclusivamente por departamentos, caracterizadas por divisiones de poder y resistencia al cambio, optando por un enfoque basado en procesos con una orientación clara hacia las necesidades del cliente.

      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5.pt-4
          .row.justify-content-center.align-items-center.bg-h85
            .col-lg-11
              .row.justify-content-center.align-items-center

                .col-lg-5(data-aos="zoom-in")
                  img.img-fluid(src='@/assets/curso/tema3/4.svg', style="max-width:505px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

                .col-lg-7(data-aos="fade-left")
                  .pt-1.pb-4.pb-lg-0
                    p(data-aos="fade-left").mb-4 El enfoque por procesos promueve varios cambios significativos:

                    ul.lista-ul--color.color-dark
                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Se sustituye la estructura jerárquica tradicional por una más plana.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | La organización se reestructura con base en procesos orientados a los clientes.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Los empleados asumen una mayor responsabilidad en la atención y satisfacción de las necesidades de los clientes.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Los departamentos funcionales pierden protagonismo y se forman equipos multidisciplinarios enfocados en los procesos.

                      li.mb-2
                        i.fas.fa-arrow-circle-right
                        | Se utiliza tecnología para eliminar actividades que no aportan valor, optimizando así los recursos y resultados.

      p(data-aos="fade-left").mb-5 Este enfoque no solo mejora la eficiencia, sino que también fomenta una cultura organizacional más colaborativa, orientada al logro de objetivos estratégicos y a la satisfacción del cliente.


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Origen de la administración por procesos

      p(data-aos="fade-left").mb-4 La administración por procesos tiene sus raíces en la evolución de las teorías administrativas y en la búsqueda de métodos más efectivos para gestionar organizaciones y alcanzar objetivos estratégicos. Este enfoque se fundamenta en la identificación, análisis, mejora y gestión de los procesos de una organización, con el objetivo de maximizar la eficiencia, calidad y satisfacción de las partes interesadas.

      h3(data-aos="fade-left").mb-4 Evolución histórica de la administración tradicional a la administración por procesos

      .bg-color-info.mb-5
        .p-4.p-lg-5
          .row.align-items-center.justify-content-center
            .col-lg-8
              LineaTiempoD.color-primario(data-aos="fade-left")
                div(numero="Siglo XVIII" titulo="Revolución Industrial (Siglo XVIII - XIX)") 
                  .row.align-items-center
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema3/5.png", style="max-width: 190px").mx-auto
                    .col-lg
                      p(data-aos="fade-left") Durante esta época, los procesos productivos comenzaron a ser estudiados de manera sistemática. #[b Frederick W. Taylor, conocido como el padre de la administración científica], promovió la idea de dividir el trabajo en tareas específicas y medir su eficiencia. Aunque su enfoque estaba centrado en tareas individuales, sentó las bases para el análisis de procesos.

                div(numero="Siglo XX" titulo="Aportes de Henry Ford (Principios del Siglo XX)")
                  .row.align-items-center
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema3/6.png", style="max-width: 190px").mx-auto
                    .col-lg
                      p(data-aos="fade-left") La producción en línea desarrollada por Ford, con su enfoque en la especialización y estandarización, marcó un avance en la gestión de procesos. Su metodología se centraba en maximizar la producción mediante la optimización de cada etapa del proceso.


                div(numero="1940" titulo="Teoría General de Sistemas (Década de 1940)")
                  .row.align-items-center
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema3/7.png", style="max-width: 190px").mx-auto
                    .col-lg
                      p(data-aos="fade-left") #[b Ludwig von Bertalanffy] introdujo la Teoría General de Sistemas, que permitió ver las organizaciones como sistemas integrados de elementos interconectados. Este enfoque influyó en la percepción de las empresas como conjuntos de procesos interrelacionados.

                div(numero="1950" titulo="Japón y el enfoque en la calidad (Década de 1950)")
                  .row.align-items-center
                    .col-lg-auto
                      figure
                        img(src="@/assets/curso/tema3/8.png", style="max-width: 190px").mx-auto
                    .col-lg
                      p(data-aos="fade-left") El movimiento de calidad total liderado por figuras como #[b W. Edwards Deming] y #[b Joseph Juran] en Japón, tras la Segunda Guerra Mundial, marcó un hito en la gestión por procesos. Se introdujo la idea que los procesos debían ser diseñados y mejorados continuamente para garantizar productos de calidad.

      

      h3(data-aos="fade-left").mb-4 Consolidación del enfoque por procesos

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7
                h5 Década de 1980
                p En esta época, la competencia global y la necesidad de adaptarse rápidamente a los cambios del mercado llevaron a las empresas a replantear sus modelos de gestión. Surgió el concepto de "Reingeniería de Procesos" popularizado por Michael Hammer y James Champy, quienes abogaron por rediseñar radicalmente los procesos organizacionales para lograr mejoras significativas en términos de costos, calidad, servicio y rapidez.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7
                h5 Sistemas de Gestión de la Calidad (ISO 9000)
                p Con la adopción masiva de las normas ISO 9000 en la década de 1990, se enfatizó la necesidad de documentar, controlar y mejorar continuamente los procesos. Esto consolidó la idea de que la gestión por procesos es clave para garantizar la calidad y satisfacer las expectativas de los clientes.


      h3(data-aos="fade-left").mb-4 Administración por procesos en la actualidad

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p(data-aos="fade-left").mb-4 Hoy en día, la administración por procesos es un pilar fundamental de la gestión organizacional. Herramientas como el modelado de procesos (BPMN), los sistemas ERP (Enterprise Resource Planning) y las metodologías ágiles han evolucionado para respaldar este enfoque. Las organizaciones modernas ven los procesos no solo como actividades secuenciales, sino como elementos estratégicos que impulsan la innovación, la eficiencia y la creación de valor.

          h4(data-aos="fade-left").mb-4 Principales aportes y beneficios 

          p(data-aos="fade-left").mb-4 La administración por procesos permite:

        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")


      .bg-color-info.mb-5
        .p-4.p-lg-5
          .row.align-items-center.justify-content-center
            .col-lg-10
              figure
                img(src="@/assets/curso/tema3/11.png", alt="", style="max-width: 950px").mx-auto

          
      p(data-aos="fade-left").mb-4 La administración por procesos, aporta un enfoque estratégico para gestionar y optimizar las organizaciones, centrando sus esfuerzos en los flujos de actividades y su impacto en los resultados finales.

      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/12.png', alt='')
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Principales aportes y beneficios 
              p.mb-4(data-aos="fade-right") Los aportes y beneficios de la administración por procesos transforman a las organizaciones al integrarlas como sistemas interconectados, mejorando la colaboración, optimizando recursos y aumentando la satisfacción del cliente. En el PDF Principales aportes y beneficios, se analizan ejemplos prácticos que ilustran cómo este enfoque fomenta la mejora continua, impulsa la innovación y asegura resultados consistentes, fortaleciendo la competitividad en el mercado.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Principales aportes y beneficios 


      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Principios de la gestión por procesos

      p(data-aos="fade-left").mb-4 Los principios de la gestión por procesos, son:

      .bg-full-width-2.bg-fondo-2
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-8
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Enfoque en el cliente
                  p.text-center Los procesos deben diseñarse y gestionarse para satisfacer las necesidades y expectativas del cliente, ya sea interno o externo, asegurando la entrega de productos o servicios de calidad.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Gestión basada en procesos
                  p.text-center Implica visualizar la organización como un sistema compuesto por procesos interrelacionados, en lugar de enfocarse únicamente en funciones o departamentos aislados.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Responsabilidad y liderazgo
                  p.text-center Cada proceso debe contar con un responsable que garantice su correcta ejecución y mejora continua. El liderazgo es clave para alinear los objetivos del proceso con los de la organización.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Participación de las personas
                  p.text-center La gestión por procesos requiere el compromiso y la colaboración activa de todos los involucrados, asegurando una comunicación efectiva y trabajo en equipo.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Orientación a resultados
                  p.text-center Se busca que cada proceso entregue resultados claros y medibles que generen valor, maximizando la eficiencia y eliminando actividades que no aportan valor.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Mejora continua
                  p.text-center Los procesos deben ser monitoreados y optimizados constantemente para adaptarse a los cambios en el entorno y mejorar su desempeño.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Transparencia y trazabilidad
                  p.text-center Es fundamental contar con información clara y accesible sobre cada proceso, desde sus entradas hasta sus salidas, para garantizar la toma de decisiones informada.

            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/20.png', alt='')
      
      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] Clasificación de los procesos en la gestión por procesos

      p(data-aos="fade-left").mb-4 Conozcamos la clasificación de los procesos en la gestión por procesos:

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/21.png", alt="").mb-4.mb-lg-0

        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Según su propósito")
              p.mb-3 #[strong Procesos estratégicos]
              | Son aquellos relacionados con la planificación y dirección general de la organización. Están enfocados en definir la visión, misión, objetivos estratégicos y toma de decisiones a largo plazo.
              | #[strong Ejemplo.] Planificación estratégica.<br><br>
              p.mb-3 #[strong Procesos claves o misionales]
              | Directamente relacionados con la entrega de valor al cliente y el cumplimiento de la misión organizacional. Representan el "corazón" del negocio. 
              | #[strong Ejemplo.] Producción, ventas, desarrollo de productos.<br><br>
              p.mb-3 #[strong Procesos de soporte o apoyo]
              | Brindan recursos y soporte a los procesos claves, pero no generan valor directamente para el cliente.
              | #[strong Ejemplo.] Gestión de recursos humanos, mantenimiento, tecnología.

            .div(titulo="Según su alcance")
              p.mb-3 #[strong Procesos internos]
              | Se desarrollan y completan dentro de la organización y atienden necesidades internas. <br>
              | #[strong Ejemplo.] Gestión de inventarios.<br><br>
              p.mb-3 #[strong Procesos externos]
              | Vinculan a la organización con agentes externos, como clientes, proveedores o aliados estratégicos. <br>
              | #[strong Ejemplo.] Atención al cliente, gestión de proveedores.


      .row.align-items-start.mb-5

        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Según su frecuencia")
              p.mb-3 #[strong Procesos operativos]
              | Se llevan a cabo de manera regular o repetitiva en el día a día.
              | #[strong Ejemplo.] Facturación, despacho de mercancías.<br><br>
              p.mb-3 #[strong Procesos de gestión del cambio]
              | Se realizan de manera puntual para adaptarse o responder a un entorno cambiante.
              | #[strong Ejemplo.] Reestructuración organizacional, implementación de nuevos sistemas.

            .div(titulo="Según su interacción")
              p.mb-3 #[strong Procesos interfuncionales]
              | Involucran varias áreas o departamentos dentro de la organización, promoviendo la colaboración entre ellos.
              | #[strong Ejemplo.] Proceso de contratación de personal.<br><br>
              p.mb-3 #[strong Procesos interorganizacionales]
              | Implican la interacción entre diferentes organizaciones o entidades.
              | #[strong Ejemplo.] Logística con terceros, acuerdos de suministro.


        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/22.png", alt="").mb-4.mb-lg-0


      .bg-full-width.bg-color-8
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los principios de la gestión por procesos, proporcionan un marco para diseñar, gestionar y optimizar los flujos de trabajo en una organización, mientras que la clasificación permite una mejor comprensión y estructuración de los mismos, según sus características y objetivos.

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.redalyc.org/articulo.oa?id=721778112020" target="_blank" rel="noopener noreferrer") Cabeza García, P. M., Monroy Espinosa, F. J., & Solórzano Polo, P. H. (2022). Diseño de un sistema de gestión por procesos. Revista Metropolitana de Ciencias Aplicadas, 5, 167-175. Universidad Metropolitana. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/GgDxlVbOmYI?si=PugDV-2fW86tleWf" target="_blank" rel="noopener noreferrer") EOI Escuela de Organización Industrial. (2013, 30 abr). Gestión por Procesos
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Principios de la gestión y clasificación',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué herramienta utiliza representaciones visuales para mapear flujos de trabajo y detectar problemas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mapa de procesos.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Diagrama SIPOC.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Indicadores KPI.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ciclo PHVA.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Un mapa de procesos proporciona una representación visual clara del flujo de trabajo, facilitando la identificación de problemas y mejoras potenciales',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué enfoque prioriza la perspectiva del cliente para mejorar procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Enfoque Lean.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Enfoque basado en el cliente.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Enfoque basado en datos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Benchmarking.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Excelente! Un enfoque basado en el cliente asegura que los procesos satisfagan expectativas específicas, fomentando la satisfacción y la fidelidad del cliente.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál herramienta analiza las causas subyacentes de un problema en los procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Diagrama SIPOC.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Observación directa.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Indicadores KPI.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Análisis de causa-raíz.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Por supuesto! El análisis de causa-raíz ayuda a encontrar factores profundos que originan problemas, evitando soluciones temporales o superficiales.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es el objetivo principal del ciclo PHVA en los procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mejorar procesos continuamente.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Identificar cuellos de botella.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Priorizar la perspectiva del cliente.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducir tiempos y costos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Estupendo! El ciclo PHVA fomenta mejoras constantes al planificar, ejecutar, verificar y actuar sobre resultados obtenidos, garantizando calidad y eficiencia.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué herramienta utiliza el análisis FODA en los procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Analizar el flujo de actividades no valiosas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Medir la eficiencia mediante indicadores clave.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Evaluar fortalezas, oportunidades, debilidades y amenazas.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Detectar demoras con un mapa de procesos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
