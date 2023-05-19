export default function AcercaDe() {
    const background = {
        backgroundImage: "url(/imagenes/fondostandar.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div style={background}>
            <div className="NavBar">
                <div className="referencia">
                <a id="registro" href="/inicio-sesion">
                    REGISTRARSE / INICIAR SESIÓN
                </a>
                </div>
                <div className="referencia">
                <a id="reglas" href="/reglas">
                    REGLAS
                </a>
                </div>
                <a id="partida" href="/crear-partida">
                CREA TU PARTIDA
                </a>
                <div className="referencia">
                <a id="acerca" href="/acerca-de">
                    ACERCA DE
                </a>
                </div>
                <div className="referencia">
                <a id="quienes" href="/preguntas">
                    PREGUNTAS FRECUENTES
                </a>
                </div>
            </div>
            <div className="AboutHeader">
                <h1>Acerca de</h1>
            </div>
            <br />
            <div className="AboutFlex">
                <div className="resume">
                <h2>El origen de The Olympics Game </h2>
                <img src="/imagenes/logoolimpiadas.png" alt="" />
                <h4>
                    {" "}
                    Siempre fue nuestra idea desarrollar un juego distinto a lo
                    convencional, nos gustan mucho los desafíos y la originalidad. Decidimos
                    usar el deporte ya que somos un grupo de amigos apasionados por éste. En
                    particular, la temática de los Juegos Olímpicos se debe a que para
                    nosotros es el evento más icónico culturalmente, por todas las
                    disciplinas que posee y la producción que conlleva su realización. Por
                    lo tanto, estamos sumamente motivados y orgullosos de poder llevar a
                    cabo un proyecto con este mundo que tanto nos gusta.
                </h4>
                </div>
                <div className="motivation">
                <h2>Motivación</h2>
                <img src="/imagenes/motivation.png" alt="" />
                <h4>
                    {" "}
                    Buscamos como equipo de trabajo aprender de la mejor manera posible los
                    contenidos del proyecto del ramo IIC2513: Tecnologías y Aplicaciones
                    Web, para poder hacer uso de aquellos conocimientos en nuestro futuro
                    profesional. Además, buscamos ser sumamente organizados y metódicos,
                    teniendo una buena dinámica de trabajo en equipo, lo cual también es
                    sumamente necesario para poder adaptarse nuestros próximos equipos de
                    trabajo...
                </h4>
                </div>
                <div className="aboutgame">
                <h2>¿Estás listo para vencer?</h2>
                <img src="/imagenes/victoria.png" alt="" />
                <h4>
                    {" "}
                    En The Olympics Game competirás en distintos deportes contra otros
                    jugadores usando a tus delegaciones favoritas.
                </h4>{" "}
                <br />
                <h4>
                    {" "}
                    Es un juego de azar y estrategia con un tablero de casillas hexagonales.
                </h4>
                <br />
                <h4>¿Crees que tienes lo necesario?</h4>
                </div>
            </div>
        </div>
    )
}