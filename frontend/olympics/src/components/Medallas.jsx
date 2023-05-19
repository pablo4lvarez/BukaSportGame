export default function Medallas(){
    return(
        <>
        <body background = "/imagenes/fondostandar.jpg">
            <div class = "NavBar">
                <div class= "referencia">
                    <a id="registro" href="/miperfil">MI PERFIL</a>
                </div>
                <div class="referencia">
                    <a id="reglas" href="/reglas">REGLAS</a>
                </div>
                <a id="partida" href="/crear-partida">CREA TU PARTIDA</a>
                <div class="referencia">
                    <a id="acerca" href="/tienda">MIS MEDALLAS</a>
                </div>
                <div class="referencia">
                    <a id="quienes" href="/tienda">TIENDA</a>
                </div>
            </div>
            <div class="MedallasHeader">
                <h1>Mis medallas</h1>
            </div>
            <br></br>

            <div class="MedallasFlex">
            <div class="MedallasFlexHeader">  
                <h3>#Partida ID</h3>
                <img src="/imagenes/medallas/goldmedal.png" alt=""></img>
                <img src="/imagenes/medallas/silvermedal.png" alt=""></img>
                <img src="/imagenes/medallas/bronzemedal.png" alt=""></img>
            </div>
            <div>
                <h3># 21</h3> 
                <h3> 2</h3>
                <h3> 5</h3>
                <h3> 2</h3>

            </div>

            <div>
                <h3># 7</h3>
                <h3> 3</h3>
                <h3> 1</h3>
                <h3> 4</h3>

            </div>

            <div>
                <h3>Totales</h3>
                <h3>5</h3>
                <h3>6</h3>
                <h3>6</h3>
            </div>
            </div>
        </body>
        </>
    );
}