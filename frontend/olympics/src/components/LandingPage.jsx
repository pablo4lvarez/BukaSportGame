export default function LandingPage() {
    return (

        <body background = "/imagenes/fondolanding.jpg">

            <br />
            <br />
            <br />
            <p id="LandingText">
                ¿PODRÁS LLEVARTE EL ORO EN <br /> ESTOS JUEGOS OLÍMPICOS?{" "}
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="NavLand">
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
            <br />
            <div>
                <img id="logoolimpiadas" src="/imagenes/logoolimpiadas.png" />
            </div>
        </body>
    );
}