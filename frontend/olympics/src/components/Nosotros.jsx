export default function Nosotros() {
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
            <div className="NosotrosHeader">
                <h1>Quiénes Somos</h1>
            </div>
            <br />
            <div className="NosotrosFlex">
                <div className="us">
                <h2> Nosotros </h2>
                <h4>
                    {" "}
                    Somos 3 estudiantes de 4to año de Ingeniería, que estamos este semestre
                    (2022-2) realizando el curso Tecnologías y Aplicaciones Web (IIC2513).
                    Este proyecto semestral tiene como objetivo que los alumnos aprendan a
                    construir e implementar una completa aplicación web.
                </h4>
                </div>
                <div className="flex-group">
                <div className="student-box">
                    <img src="/imagenes/alumnos/nico.jpg" />
                    <h3>Nicolás Villarroel M.</h3>
                    <h4>Major Computación en Tecnologias de la Información</h4>
                    <h4>Minor industrial</h4>
                </div>
                <div className="student-box">
                    <img src="/imagenes/alumnos/pablo.jpg" />
                    <h3>Pablo Álvarez S.</h3>
                    <h4>Major Ingeniería de Software</h4>
                    <h4>Minor industrial</h4>
                </div>
                <div className="student-box">
                    <img src="/imagenes/alumnos/fercho.jpeg" />
                    <h3>Fernando López W.</h3>
                    <h4>Major Computación en Tecnologias de la Información</h4>
                    <h4>Minor industrial</h4>
                </div>
                </div>
            </div>
        </div>
    )
}