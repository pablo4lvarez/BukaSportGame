export default function Reglas() {
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
                <a id="quienes" href="/nosotros">
                    QUIÉNES SOMOS
                </a>
                </div>
            </div>
            <div className="ReglasHeader">
                <h1>Reglas</h1>
            </div>
            <br />
            <div className="ReglasFlex">
                <div>
                <details>
                    <summary>Lo básico</summary>
                    <li>
                    The Olympics game es un juego de azar y estrategia que permitirá que 3
                    jugadores se enfrenten entre sí en una carrera por un recorrido con
                    muchos obstáculos, competencias, versus, cartas sorpresa y más. El
                    primero en llegar a la meta será el ganador!
                    </li>
                </details>
                </div>
                <div>
                <details>
                    <summary>Los Atributos</summary>
                    <li>
                    Al registrarte en The Olympics game debes elegir una de las 6
                    delegaciones posibles. Cada una de estas cuenta con valores diferentes
                    en sus atributos iniciales. Los atributos son: Fuerza, Velocidad,
                    Inteligencia, Equilibrio, Resistencia y Coordinación. Intenta mejorar
                    estos atributos en la partida para superar las competencias sin
                    problemas y vencer a tus rivales!
                    </li>
                </details>
                </div>
                <div>
                <details>
                    <summary>Las competencias</summary>
                    <li>
                    Las competencias comienzan cuando caes en una casilla de competencia.
                    Estas piden un mínimo de puntaje para poder pasar sobre ellas. Cada
                    competencia representa un deporte distinto, donde cada deporte posee
                    distinas combinaciones de atributos necesarios para competir en él.
                    Los valores de los atributos son ponderados con un dado regular del 1
                    al 6, con lo cual se obtiene el puntaje para poder (o no) avanzar.
                    </li>
                    <li>
                    Se puede competir contra otro jugador si es que se cae en la casilla
                    Versus. Aquí, puedes desafíar a un rival a una competencia específica,
                    donde el perdedor retrocederá ni más ni menos que ¡3 casillas!
                    </li>
                </details>
                </div>
                <div>
                <details>
                    <summary>Cartas sorpresa</summary>
                    <li>
                    Si llegas a caer en una casilla sorpresa, preparate para cualquier
                    cosa. Pueden ocurrirte eventos positivos como entrenamiento gratis o
                    un objeto útil para tu velocidad, como también lesiones o pérdidas de
                    turnos que afectaran tu rendimiento en la partida.
                    </li>
                    <img
                    className="reglaespecifico"
                    src="/imagenes/pregunta.png"
                    />
                </details>
                </div>
                <div>
                <details>
                    <summary>Tu turno</summary>
                    <li>
                    En el momento de tu turno, tienes 2 opciones: Lanzar el dado ó
                    entrenar:
                    </li>
                    <li>
                    Si escoges Lanzar el dado, te pueden salir los valores del 1 al 3 para
                    así avanzar dicha cantidad de espacios.
                    </li>
                    <li>
                    Si escoges entrenar, perderás la oportunidad de avanzar, pero podás
                    aumentar en 1 punto 1 atributo a elección tuya.
                    </li>
                </details>
                </div>
                <div>
                <details>
                    <summary>Medallas</summary>
                    <li>
                    Una vez terminada la partida, independiente de si ganes o no, la
                    cantidad de medallas obtenidas de las competencias se valoraran en
                    puntos para que puedas usar en la tienda. En dicha tienda tendrás la
                    posibilidad de comprar objetos para aumentar tus atributos iniciales
                    de las partidas!
                    </li>
                </details>
                </div>
                <br />
                <div className="ReglasFooter">
                <p>¡Estás listo para jugar!</p>
                <img src="/imagenes/logoolimpiadas.png" alt="" />
                </div>
            </div>
        </div>

    )

}