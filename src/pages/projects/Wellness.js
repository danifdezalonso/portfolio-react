import React from "react";
import "./Wellness.css";
import EncuestaImg from "../../assets/wellness/encuesta.png";
import Mindmap from "../../assets/wellness/mind-map.png";
import Empathy from "../../assets/wellness/empathy-wellness.png";
import JourneyMap from "../../assets/wellness/journey-wellness.png";
import CardSorting from "../../assets/wellness/cardsorting-wellness.png";
import Footer from "../../components/Footer";
import WellnessEvolution from "../../assets/wellness/wellnessEvolution.png";
import Sketch from "../../components/icons/Sketch";
import Invision from "../../components/icons/Invision";
import Abstract from "../../components/icons/Abstract";
import Principle from "../../components/icons/Principle";

function Wellness() {
  return (
    <>
      <div className="container">
        <div className="casestudy">
          <h2 className="casestudy__title">Safely</h2>
          <h4 className="casestudy__subtitle">App Design</h4>
          <p>
            Hace unas semanas, volviendo de fiesta con una amiga, me pidió que
            le acompañara a casa porque tenía miedo de volver sola. Días
            después, promovido por una conciencia intranquila, discutí el tema
            con unas cuantas amigas. Todas se sentían igual: atemorizadas,
            impotentes, frustradas, menospreciadas, etc.
          </p>
          <p>
            Este problema me conmovió y me propuse crear algo para mejorar sus
            vidas e intentar ofrecer una solución lo más efectiva posible al
            problema.
          </p>
        </div>
      </div>
      <div className="casestudy__highlightedsection wellness--section">
        <div className="casestudy">
          {" "}
          <div className="container">
            <p className="casestudy__section--title">El problema</p>
            <p>
              Se ha creado un clima de inseguridad en las calles donde la
              población no puede ir por la calle con seguridad y libertad,
              sobretodo en el sexo femenino.
            </p>
            <p>
              En Barcelona, las cifras de delincuencia van en aumento,
              disparándose a principios de 2018 de manera repentina, aumentado
              un 19,4%, con una media de 33 al día; aquellos en los que solo se
              emplea fuerza sobre las cosas —no las personas—, el aumento es del
              20,1, con 25 casos al día.
            </p>
            <p>Datos sobre el problema:</p>
            <ul>
              <li>
                Infracciones totales. El año pasado se cometieron 194.212
                delitos frente a los 165.640 del año anterior (17,2%).
              </li>
              <li>
                Robos con violencia. El año pasado se cometieron 12.277 robos
                violentos frente a los 10.285 del año anterior (19,4%).
              </li>
              <li>
                Robos con fuerza. El año pasado se cometieron 9.360 robos con
                fuerza a los 7.793 del año anterior (20,1%).
              </li>
              <li>
                Hurtos. El año pasado se cometieron 109.154 hurtos frente a los
                93.460 del año anterior (16,8%).
              </li>
              <li>
                Delitos sexuales. El año pasado se cometieron 764 delitos
                sexuales frente a los 645 del año anterior (18,4%)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="casestudy">
          <p>
            Tenía que empezar a construir una solución, así que empecé con un
            Lean Survey Canvas. Como el tema era muy general, focalicé la app en
            las agresiones sexuales para tener un target más específico.
          </p>
          <p>
            Antes de nada, hice un benchmarking de competidores y, obviando
            alguna app que sí que destacaba, el mercado ofrecía oportunidades,
            ya que las apps que reinaban no estaban destinadas para mi target.
          </p>
          <p>
            Ya podía empezar a plantearme las preguntas a realizar para el
            siguiente paso, las encuestas. Era un tema difícil de tratar y
            fácilmente susceptible, así que quería asegurarme bien.
          </p>
          <p>
            Realicé la encuesta a través de typeform y, rápidamente, se viralizó
            a través de mis contactos en las diferentes redes sociales llegando
            casi hasta 500 respuestas en unos días, ¡incluso había llegado a
            cruzar el charco!.
          </p>
          <p>
            La gente se sentía identificada con el problema y compartieron sus
            problemas e ideas. El resultado de la encuestas fue el siguiente:
          </p>
          <img
            className="casestudyimg casestudy__encuesta"
            src={EncuestaImg}
            alt="tabla reflejando los datos de la encuesta"
          ></img>
          <p>
            Las respuestas muestran la gran preocupación y confirma la realidad
            del problema. Gracias a la inclusión de una respuesta abierta, pude
            leer centenares de comentarios sobre como ellas intentaban resolver
            el problema. La mayoría se repetían: llamar, hablar por WhatsApp,
            etc. Esto me dio muchas pistas para empezar a imaginar la solución
          </p>
          <p>
            Después de analizar los datos cuantitativos, empecé a trabajar en la
            guía de las entrevistas que realizaría próximamente. Realicé 10
            entrevistas a gente de edades y background totalmente diferente. Mi
            objetivo era localizar los pain points en un dia de ocio normal de
            su vida cotidiana en referencia a la seguridad. Las entrevistas
            validaron mi hipótesis y revelaron que existe la necesidad de estar
            en contacto con gente en todo momento debido a la inseguridad.
          </p>
          <blockquote>
            Cuando vuelvo de fiesta estoy constantemente con el móvil en la
            mano, whatsappeando con mis amigas o llamando por miedo a lo que nos
            pueda pasar. <span> - Anónimo, una de las entrevistadas.</span>
          </blockquote>
          <h4 className="casestudy__section--title">Mind Map</h4>
          <p>
            Con todos los datos recopilados, relicé un mind map para conectar
            toda la información y empezar a estudiar la información al detalle.
          </p>
        </div>
      </div>
      <div className="container__60">
        <img
          className="casestudyimg casestudy__mindmap"
          src={Mindmap}
          alt="gráfico del mind map"
        ></img>
      </div>
      <div className="container">
        <div className="casestudy">
          <h4 className="casestudy__section--title">Empathy map</h4>
          <p>
            La empatía es una pieza esencial de un proceso de diseño centrado en
            las personas. El modo empático es necesario para entender los
            usuarios de un producto o servicio y también su contexto.
          </p>
          <p>
            Para poder plasmar y visualizar los datos obtenidos hasta la fecha,
            me ayudé del Emapthy Map.
          </p>
          <img
            className="casestudyimg casestudy__empathy"
            src={Empathy}
            alt="gráfico del empathy map"
          ></img>
          <h4 className="casestudy__section--title">Journey</h4>
          <p>
            Una vez recopilada, organizada y analizada toda la información,
            llegaba la hora de analizar el camino del usuario. En este método
            describo los pasos que el usuario sigue para cumplir un objetivo.
          </p>
          <img
            className="casestudyimg casestudy__journey"
            src={JourneyMap}
            alt="gráfico del journey map"
          ></img>
        </div>
      </div>
      <div className="casestudy__highlightedsection wellness--section">
        <div className="casestudy">
          <p className="casestudy__section--title">Problem stament</p>
          <p>
            Hemos observado que la seguridad de las poblaciones actuales no es
            suficiente porque no se está reduciendo el número de víctimas y esto
            tiene como consecuencia que una parte de la población tenga miedo a
            la hora de volver tarde a casa. Esto lo podemos mejorar compartiendo
            la ubicación con allegados y vamos a validar el éxito contabilizando
            los kms que se han compartido.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="casestudy">
          <p className="casestudy__section--title">Card Sorting</p>
          <p>
            Llegaba la hora de volver a hablar con los usuarios y conocer sus
            marcos mentales y como organizan la información. El card sorting es
            la mejor técnica para esto, es una técnica que nos permite explorar
            cómo las personas agrupan información en categorías y cómo se
            relacionan conceptos entre sí.
          </p>
          <p>
            Con esta técnica ya podría empezar a estructurar la información:
            menús, taxonomías, entender a qué lugar irían a buscar los usuarios
            la información, etc.
          </p>
          <p>
            <a href="https://www.optimalworkshop.com/optimalsort/6vmgse5y/stop-feminicidis/shared-results/27hfy3p7cn8xn340q6y174248v31jxj3">
              Ver todos los resultados →
            </a>
          </p>
          <img
            className="casestudyimg casestudyimg80"
            src={CardSorting}
            alt="gráfico del card sorting"
          ></img>

          <p className="casestudy__section--title">MVP</p>
          <p>
            El próximo paso era definir el core del producto, con las features
            necesarias para establecer el Producto Mínimo Viable.
          </p>
          <p>
            No me costó mucho gracias a toda la investigación realizada. Para
            que el producto se pudiese testear y evolucionar, necesitaba
            únicamente la pantalla principal con el mapa (podía ser estático) y
            dos puntos clave desarrollados:
          </p>
          <ul>
            <li>
              Los cuatro elementos de interacción principales de la app, aúnque
              aún no fucionasen, sólo pretendía investigar sobre como el usuario
              inteactuaba con ellos.
            </li>
            <li>
              Empezar y parar de compartir ubicación de manera accesible y
              rápida.
            </li>
          </ul>
          <p>
            El primer prototipo a papel contenía estos elementos (aunque
            necesitaba 4 manos para desplegar a la velocidad del usuario), así
            que estaba listo para testear con usuarios potenciales, iterar y
            avanzar.
          </p>
          <p className="casestudy__section--title">Evolución del diseño</p>
          <p>
            Una vez que definido el MVP y el flujo de usuarios, estaba listo
            para comenzar a generar ideas e iteraciones. Comencé a crear un
            prototipo de papel de baja fidelidad para probar rápidamente algunas
            ideas con los usuarios, que luego iteré en prototipos fidelidad
            media.
          </p>

          <p>
            A través de User-testing, obtuve los datos necesarios para descubrir
            qué diseño era más intuitivo y funcionaba mejor para mi objetivo.
            Continué generando iteraciones basadas en los resultados de las
            pruebas de usuario. Los wireframes de mediana fidelidad continuaron
            explorando varias opciones y diseños mientras las pruebas
            continuaban. Uno de los objetivos era validar la interacción "swipe
            up" para desplegar una de las opciones principales de la app. Al
            principio costó, hasta que en{" "}
            <a
              href="https://principleformac.com/"
              target="_blank"
              rel="noreferrer"
            >
              Principle
            </a>{" "}
            animé una pequeño movimiento para mostrar que era una card que
            subía.
          </p>
          <img
            style={{ width: "100%" }}
            className="casestudy__designevolution"
            src={WellnessEvolution}
            alt="tabla reflejando los datos de la encuesta"
          ></img>
          <p className="casestudy__section--title">
            Prototipo interactivo y video promocional
          </p>
          <p>
            Clica en la pantalla para interactuar con toda la app. Tendrás que
            realizar todo el proceso de registro y recuerda que InVision no
            permite animaciones, así que para desplegar el "swipe up" deberás
            hacer clic en la barrita de la card.
          </p>
          <div className="aboutme__links">
            <a
              href="https://invis.io/Y4QX3GQDW92"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div className="btn" style={{ textAlign: "center" }}>
                Ver prototipo
              </div>
            </a>

            <a
              href="https://youtu.be/Bu2DZQDXFUw"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div className="btn" style={{ textAlign: "center" }}>
                Ver video promocional
              </div>
            </a>
          </div>
          <p className="casestudy__section--title">
            Tools used in the whole process
          </p>
          <div className="casestudy__icons">
            <Sketch />
            <Invision />
            <Abstract />
            <Principle />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wellness;
