import React from "react";
import { Link } from "react-router-dom";
import wf from "../assets/Wf.png";
import js from "../assets/JS.png";
import logoweb from "../assets/logoweb.png";

const About = () => {
  return (
    <div>
      <h1 className="page-title">Dario Javier Ponce</h1>

      <div className="content">
        <div className="container">
          <img src={wf} alt="fotoPerfil" />
          <div className="about">
            <h2>
              Juventud y Primeros Pasos:<br/> Enfrentando Desafíos y Superando
              Obstáculos
            </h2>
            <p>
              Soy de Buenos Aires, Argentina, nací el 21 de febrero de 1990, en
              una familia de clase social media baja. Desde joven, tuve la
              suerte de contar con una PC, un portal que se abriría hacia un
              fascinante universo tecnológico que cambiaría mi vida para
              siempre. Aprendí a formatear mi propia computadora y a resolver
              problemas que solían requerir la ayuda de un técnico. Desde ese
              momento, supe que mi destino estaba ligado al mundo de la
              tecnología.
              <br />
              <br />
              Mi primera incursión formal en la programación ocurrió durante el
              secundario, a mis 16 años en 2006, cuando tuve mi primera clase de
              Windows Form. Aquí, los cimientos de mi pasión por la programación
              se establecieron. Aunque las clases eran desafiantes y no siempre
              bien explicadas, no perdí la fascinación por descubrir cómo
              funcionaba el mundo de la programación.
              <br />
              <br />
              Tras completar mis estudios secundarios, mi camino hacia la
              universidad se vio obstaculizado por limitaciones económicas. La
              necesidad de trabajar para apoyar a mi familia me alejó
              temporalmente de mi sueño, pero nunca lo olvidé. Antes de terminar
              la secundaria, ya estaba trabajando en el negocio familiar y, más
              tarde, en Garbarino S.A., donde demostré mis habilidades como Jefe
              de depósito durante casi 11 años. A pesar de la crisis que cerró
              esa etapa en mi vida en noviembre de 2021, mi retorno al mundo de
              la programación estaba a la vuelta de la esquina.
            </p>
            <p className="email">
              Primario: Escuela N4° Dto 12 "Provincia de La Pampa"
            </p>
            <p className="email">
              Secundario: Instituto Profesional San Jose, Perito Mercantil con
              Orientacion en Programación
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="content">
        <div className="container">
          <img src={js} alt="fotoPerfil" />
          <div className="about">
            <h2>
              Experiencia y Esfuerzo:<br/>De la Crisis al Renacimiento en el Mundo
              de la Programación
            </h2>
            <p>
              En marzo de 2019, con la economía familiar estabilizada, decidí
              perseguir mi sueño. Inicié una Tecnicatura en Analista de
              Sistemas. El primer año fue prometedor, pero el segundo año trajo
              consigo complicaciones debido al caos provocado por la pandemia. A
              pesar de los desafíos, logré aprobar materias clave, pero el
              tercer año se volvió imposible de continuar debido a la suspensión
              de actividades y la falta de ingresos.
              <br />
              <br />
              En el año 2022, sin trabajo y con pocos ahorros, decidí que era el
              momento de hacer realidad mi sueño de ser programador. Me miré en
              el espejo y dije: "Quiero ser programador. Voy a ser programador".
              La oportunidad llegó con el bootcamp Henry, un camino hacia el
              desarrollo web Full Stack. Más de 800 horas de arduo trabajo y
              aprendizaje me llevaron a desarrollar dos aplicaciones
              significativas. Ahora, ansío aprender más y estoy listo para
              materializar mi sueño de trabajar en el mundo de la programación,
              creando soluciones tecnológicas que impacten positivamente la vida
              de las personas.
            </p>
            <p className="email">
              Primer Trabajo: "Compostura de Calzado Boyaca" 2016 - 2011 (4
            </p>
            <p className="email">
              Segundo Trabajo: "Garbarino S.A." 2011 - 2021 (10 años)
            </p>
            <p className="email">
              Tercer Trabajo: "Sanatorio General Sarmiento" 2023 - Actual...
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="content">
        <div className="container">
          <img src={logoweb} alt="fotoPerfil" />
          <div className="about">
            <h2>
              Gracias Totales
            </h2>
            <p>
            Gracias por llegar hasta aquí. Esta es una parte emocionante de mi vida, una historia de resiliencia, determinación y superación en el mundo de la programación. Ojalá puedas ser parte de este viaje haciendo clic en cualquiera de los medios de contacto que estan al pie de pagina. <br/><br/>  Nuevamente, muchas gracias por ser parte de mi historia y por creer en este sueño.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;

/*

 <h1 class="page-title">About</h1>

    <div class="content">
        <div class="container">
            <img src="assets/profile-2.png">
            <div class="about">
                <h2>I'm Reza Mehdikhanlou</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus inventore cum quam harum
                    velit fugiat, aperiam doloribus quos officia ipsa nihil quibusdam at enim ipsum voluptas dignissimos
                    et minus!</p>
                <p class="email">Contact Me : RezaMehdikhanlou@gmail.com</p>
            </div>
        </div>
    </div>
    
    */

/*
        <div className="content">
    <div className="containerabout">
        <h1>Dario Ponce</h1>
        <h2>Programador Web Full Stack</h2>
      

   
        <h4>
          Soy de Buenos Aires, Argentina, nací el 21 de febrero de 1990 y si bien mi familia era de clase social media baja tuve la suerte de tener una PC desde joven. Lo que me empezó a acercar al mundo de la tecnología y a entusiasmarme por ella. Desde pequeño aprendí a formatear mi propia computadora y a investigar algunos problemas comunes a los que mi padre solía recurrir a un técnico. Ya desde pequeño sabía que este mundo me atraparía para siempre.
        </h4>


      <h3 className="movie-title">El Despertar del Codigo</h3>
        <p>
          Cuando estaba en el secundario, por mis jóvenes 16 años, 2006, tuve mi primera clase de Windows Form. Mis primeros pasos fueron geniales, me encantaba probar cosas y ver qué más se podía hacer. Las clases, en cierto modo, estaban bien, íbamos descubriendo cómo funcionaba la programación en C#, pero no eran del todo bien explicadas. Esa materia solo duró un año, desafortunadamente. Cuando terminé mis estudios secundarios, mis posibilidades de acudir a una universidad para seguir el camino del programador se vieron imposibilitadas por los recursos económicos de los que disponía. Debía trabajar para ayudar a mi familia en casa, pero sabía que algún día volvería a la acción.
        </p>

        <h3 className="movie-title">El Retorno del Programador</h3>
        <p>
          Incluso antes de terminar mis estudios secundarios ya estaba trabajando, dedicaba las tardes al negocio de mis abuelos, donde podía ayudarlos con la atención al público y aprender el oficio de la compostura de calzado. Con ese dinero, podía permitirme comprar algunas cosas sin tener que pedir demasiado a mis padres. Para los 21 años, allá por febrero de 2011, pude conseguir mi primer trabajo en blanco en la firma Garbarino S.A., una empresa dedicada al comercio de electrodomésticos. Destaqué muchísimo como Jefe de depósito llegando a ser requerido en muchas sucursales por sus gerentes, con el tiempo pasé al sector de polivalentes donde mi función era atender todos los sectores, e incluso fui capacitado para el puesto de sub-encargado, aunque la crisis se llevó a la empresa en noviembre de 2021, finalizando así mi tiempo con ellos, después de casi 11 años. Pero mi retorno a la programación empieza un poco antes. En marzo de 2019 decidí iniciar una Tecnicatura en Analista de Sistemas. Ya había logrado estabilizar la economía de la familia y era el momento de atacar mis sueños de tirar líneas de código. El primer año tuvo como materias C#, Hardware y Software, Teoría de Sistemas, Gestión Inglés técnico, Álgebra. Todas fueron aprobadas y estábamos próximos a iniciar ese 2020 con el segundo año de los 3 que componían la carrera. Aunque había un virus por el oriente que amenazaba problemas, yo seguía entusiasmado. El segundo año llegó con complicaciones. La cursada se volvió difícil ya que las jornadas laborales eran raras debido al Covid-19, los sueldos estaban completamente descontrolados y nadie sabía muy bien qué tenía que hacer al otro día. Aun así, logré aprobar Java, HTML, Redes, Bases de Datos SQL y NoSQL. Al llegar al tercer año se hizo imposible, el Covid había suspendido todo y no se pagaban los sueldos, por lo que era imposible continuar la carrera. Una vez más, el sueño amenazaba con terminar.
        </p>

        <h3 className="movie-title">Un sueño Posible</h3>
        <p>
          Año 2022, sin trabajo, solo con unos pocos ahorros pero decidido a cumplir mi sueño. Quiero ser programador, me dije mientras me miraba en el espejo una mañana al levantarme. Quiero, no, ¡voy!, ¡voy a ser programador! Quizás no sea hoy, quizás tenga que tomar otros trabajos antes, pero sé que llegaré. Fue así que el bootcamp Henry llegó a mi vida. El mismo enseñaba el camino del programador Web Full Stack, con tecnologías HTML, CSS, JavaScript, React, Node y bases de datos. La cursada fue avanzando y fui desarrollando nuevos conocimientos y habilidades que me permitieron introducirme en el mundo de la programación web. Fueron más de 800 horas de conocimiento teórico-práctico, donde desarrollé 2 aplicaciones grandes que puedes encontrar en <Link to='/works'>"Trabajos y proyectos"</Link>. Ahora sigo deseoso de aprender más y pronto poder cumplir mi sueño de trabajar de esto, de crear soluciones tecnológicas que ayuden a la vida de la gente. Donde pueda usar mis conocimientos en el ámbito comercial y calidad de atención, para que la gente reciba un producto que sea justo lo que necesita.
        </p>

        <h3 className="movie-title">Continuara...</h3>
        <p>
          Gracias por llegar hasta acá. Esta es una parte de la historia de mi vida, la que corresponde a la programación, tanto en lo estudiantil como próximamente en lo laboral. Ojalá pueda incluir tu nombre y tu empresa en esta bitácora de mi sueño web. Si así lo deseas, haz click en la sección "contáctame". Nuevamente muchas gracias.
        </p>
      </div>
    </div>
    */
