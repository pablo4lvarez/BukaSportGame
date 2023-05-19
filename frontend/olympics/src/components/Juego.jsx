import { useEffect, useState } from "react";
import axios from "axios";




export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Juego(){
    const [players, setPlayers] = useState();

    const config = {
        method: "get", 
        url: `${SERVER_URL}/matches`, 
        headers: {"content-type": "application/json"},
    }

    useEffect(() => {
        axios(config) //ACÁ PONEMOS LAS BANDERAS CORRESPONDIENTES A LAS DELEGACIONES
            .then((response) => {
                setPlayers(response.data);
                const playerStats = response.data.playerStats;
                const p1_delegacion = response.data.player1.delegacion;
                const p2_delegacion = response.data.player2.delegacion;
                const p3_delegacion = response.data.player3.delegacion;
                
                document.getElementById("juegoatributo1").innerHTML = (playerStats.velocidad);
                document.getElementById("juegoatributo2").innerHTML = (playerStats.fuerza);
                document.getElementById("juegoatributo3").innerHTML = (playerStats.equilibrio);
                document.getElementById("juegoatributo4").innerHTML = (playerStats.resistencia);
                document.getElementById("juegoatributo5").innerHTML = (playerStats.inteligencia);
                document.getElementById("juegoatributo6").innerHTML = (playerStats.coordinacion);


                if (p1_delegacion === "Brasil") {
                    document.getElementById("player1_bandera").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                }
                if (p1_delegacion === "EEUU") {
                    document.getElementById("player1_bandera").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                }
                if (p1_delegacion === "Corea") {
                    document.getElementById("player1_bandera").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                }
                if (p1_delegacion === "Jamaica") {
                    document.getElementById("player1_bandera").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                }
                if (p1_delegacion === "Rusia") {
                    document.getElementById("player1_bandera").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                }
                if (p1_delegacion === "China") {
                    document.getElementById("player1_bandera").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                }
                if (p2_delegacion === "Brasil") {
                    document.getElementById("player2_bandera").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                }
                if (p2_delegacion === "EEUU") {
                    document.getElementById("player2_bandera").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                }
                if (p2_delegacion === "Corea") {
                    document.getElementById("player2_bandera").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                }
                if (p2_delegacion === "Jamaica") {
                    document.getElementById("player2_bandera").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                }
                if (p2_delegacion === "Rusia") {
                    document.getElementById("player2_bandera").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                }
                if (p2_delegacion === "China") {
                    document.getElementById("player2_bandera").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                }
                if (p3_delegacion === "Brasil") {
                    document.getElementById("player3_bandera").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                }
                if (p3_delegacion === "EEUU") {
                    document.getElementById("player3_bandera").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                }
                if (p3_delegacion === "Corea") {
                    document.getElementById("player3_bandera").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                }
                if (p3_delegacion === "Jamaica") {
                    document.getElementById("player3_bandera").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                }
                if (p3_delegacion === "Rusia") {
                    document.getElementById("player3_bandera").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                }
                if (p3_delegacion === "China") {
                    document.getElementById("player3_bandera").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                }

                document.getElementById("player1_nickname").innerHTML = (response.data.player1.nickname);
                document.getElementById("player2_nickname").innerHTML = (response.data.player2.nickname);
                document.getElementById("player3_nickname").innerHTML = (response.data.player3.nickname);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const getMatch = async () => {
        const url = `${SERVER_URL}/matches`
        await axios.get(url).then((response) => {
            console.log(response.data);
            
            const pos1 = response.data.match.position_1;
            const pos2 = response.data.match.position_2;
            const pos3 = response.data.match.position_3;
            const current_player = response.data.currentPlayer;
            const player1 =  response.data.player1;
            const player2 =  response.data.player2;
            const player3 =  response.data.player3;
            alert(`Las posiciones actuales son P1: ${pos1} , P2: ${pos2},  P3: ${pos3}`)

            document.getElementById(`h${pos1}`).innerHTML = `<img src="./imagenes/fichas/ficha_roja.png" />`;
            document.getElementById(`h${pos2}`).innerHTML = `<img src="./imagenes/fichas/ficha_azul.png" />`;
            document.getElementById(`h${pos3}`).innerHTML = `<img src="./imagenes/fichas/ficha_verde.png" />`;
            

            if (pos1 === pos2 && pos1 === pos3) {
                document.getElementById(`h${pos1}`).innerHTML = `<img src="./imagenes/fichas/roja_verde_azul.png" />`; //ACÁ ES UNA IMAGEN Q SEAN LAS TRES FICHAS EN UNA IMG
            }
            else if (pos1 === pos2) {
                document.getElementById(`h${pos1}`).innerHTML = `<img src="./imagenes/fichas/azul_roja.png" />`; //ACÁ ES UNA IMAGEN Q SEAN LAS DOS FICHAS EN UNA IMG
            }
            else if (pos1 === pos3) {
                document.getElementById(`h${pos1}`).innerHTML = `<img src="./imagenes/fichas/roja_verde.png" />`; //ACÁ ES UNA IMAGEN Q SEAN LAS DOS FICHAS EN UNA IMG
            }
            else if (pos2 === pos3) {
                document.getElementById(`h${pos2}`).innerHTML = `<img src="./imagenes/fichas/azul_verde.png" />`; //ACÁ ES UNA IMAGEN Q SEAN LAS DOS FICHAS EN UNA IMG
            }

            if (current_player.id === player1.id) {
                if (pos1 === response.data.match.pos1_anterior) {
                    alert("Recuerda, lanza el dado")
                }
                else if (pos1 === 5 || pos1 === 9 || pos1 === 14 ||pos1 === 20 || pos1 === 25 || pos1 === 33) {

                    alert(`${player1.nickname} has caído a en una casilla VS`)
                    setTimeout( function() { window.location.href = "/versus"; }, 2000 );

                    
                }
                else if (pos1 === 3 || pos1 === 7 || pos1 === 11 ||pos1 === 16 || pos1 === 21 || pos1 === 27 || pos1 === 35 ) {
                    alert(`${player1.nickname} has caído a en una casilla ?`)
                    setTimeout( function() { window.location.href = "/preguntas"; }, 2000 )
                }
                else if (pos1 === 6 || pos1 === 12 || pos1 === 18 ||pos1 === 24 || pos1 === 30 || pos1 === 36)  {
                    alert(`${player1.nickname} has caído a en una competencia`)
                    setTimeout( function() { window.location.href = "/competencia"; }, 2000 );
                }
                else{
                    terminarTurno()
                }


            }

            else if (current_player.id === player2.id){
                if (pos2 === response.data.match.pos2_anterior) {
                    alert("Recuerda, lanza el dado")
                }
                else if (pos2 === 5 || pos2 === 9 || pos2 === 14 ||pos2 === 20 || pos2 === 25 || pos2 === 33) {

                    alert(`${player2.nickname} has caído a en una casilla VS`)
                    setTimeout( function() { window.location.href = "/versus"; }, 2000 ); 

                }
                else if (pos2 === 6 || pos2 === 12 || pos2 === 18 ||pos2 === 24 || pos2 === 30 || pos2 === 36) {
                    alert(`${player2.nickname} has caído a en una competencia`)
                    setTimeout( function() { window.location.href = "/competencia"; }, 2000 );  
                }
                else if (pos2 === 3 || pos2 === 7 || pos2 === 11 ||pos2 === 16 || pos2 === 21 || pos2 === 27 || pos2 === 35 ){
                    alert(`${player2.nickname} has caído a en una casilla ?`)
                    setTimeout( function() { window.location.href = "/preguntas"; }, 2000 )
                }
                else{
                    terminarTurno()
                }
            }

            else if (current_player.id === player3.id) {
                if (pos3 === response.data.match.pos3_anterior) {
                    alert("Recuerda, lanza el dado")
                }
                else if (pos3 === 5 || pos3 === 9 || pos3 === 14 ||pos3 === 20 || pos3 === 25 || pos3 === 33) {

                    alert(`${player3.nickname} has caído a en una casilla VS`)
                    setTimeout( function() { window.location.href = "/versus"; }, 2000 );


                }
                else if (pos3 === 3 || pos3 === 7 || pos3 === 11 ||pos3 === 16 || pos3 === 21 || pos3 === 27 || pos3 === 35 )  {
                    alert(`${player3.nickname} has caído a en una casilla ?`)
                    setTimeout( function() { window.location.href = "/preguntas"; }, 2000 )
                }
                else if (pos3 === 6 || pos3 === 12 || pos3 === 18 ||pos3 === 24 || pos3 === 30 || pos3 === 36)  {
                    alert(`${player3.nickname} has caído a en una competencia`)
                    setTimeout( function() { window.location.href = "/competencia"; }, 2000 );
                }
                else{
                    terminarTurno()
                }
            }
        });
    };

    const lanzarDado = async () => {
        const url = `${SERVER_URL}/matches/lanzardado`

        for (let int = 0; int < 37; int++) {
            document.getElementById(`h${int}`).innerHTML = "";;
            
        }


        await axios.post(url).then((response) => {
            console.log(response.data);
            const pos1 = response.data.match.position_1;
            const pos2 = response.data.match.position_2;
            const pos3 = response.data.match.position_3;
            alert(`La posicion cambió, posiciones actuales: P1: ${pos1} | P2: ${pos2} | P3: ${pos3}`)
        });
    };


    const terminarTurno = async () => {
        const url = `${SERVER_URL}/matches/terminarturno`
        await axios.post(url).then((response) => {
            const turno = response.data.match.turnos;
            alert(`Turno ${turno-1} finalizado vamos a turno ${turno}`)
        });
        setTimeout( function() { window.location.href = "/olympics"; }, 2000 );  
    };

    
    return(
            <body background = "/imagenes/fondolanding.jpg">

            <div className = "NavLand">
                <div className= "referencia">
                    <a id="registro" href="/crear-partida">VOLVER AL MENU DE PARTIDA</a>
                </div>
                <div className="referencia">
                    <a id="reglas" href="/">TERMINAR PARTIDA</a>
                </div>
            </div> 

            <section className="juego">
                <div className="izq">
                    <div className="gridtablero">
                        <div id="columna1">
                            <div className="hexagono" id="h21">
                                
                            </div>
                            <div className="hexagono" id="h22">

                            </div>
                            <div className="hexagono" id="h23">

                            </div>
                            <div className="hexagono" id="h24">

                            </div>
                            
                        </div>
                        <div id="columna2">
                            <div className="hexagono" id="h20">
                                
                            </div>
                            <div className="hexagono" id="h8">

                            </div>
                            <div className="hexagono" id="h9">

                            </div>
                            <div className="hexagono" id="h10">

                            </div>
                            <div className="hexagono" id="h25">
                            </div>

                        </div>
                        <div id="columna3">
                            <div className="hexagono" id="h19">

                            </div>
                            <div className="hexagono" id="h7">

                            </div>
                            <div className="hexagono" id="h1">

                            </div>
                            <div className="hexagono" id="h2">

                            </div>
                            <div className="hexagono" id="h11">

                            </div>
                            <div className="hexagono" id="h26">

                            </div>
                            
                        </div>
                        <div id="columna4">
                            <div className="hexagono" id="h36">
                                
                            </div>
                            <div className="hexagono" id="h18">

                            </div>
                            <div className="hexagono" id="h6">

                            </div>
                            <div className="hexagono" id="h0">

                            </div>
                            <div className="hexagono" id="h3">

                            </div>
                            <div className="hexagono" id="h12">

                            </div>
                            <div className="hexagono" id="h27">

                            </div>
                        </div>
                        <div id="columna5">
                            <div className="hexagono" id="h35">

                            </div>
                            <div className="hexagono" id="h17">

                            </div>
                            <div className="hexagono" id="h5">

                            </div>
                            <div className="hexagono" id="h4">

                            </div>
                            <div className="hexagono" id="h13">

                            </div>
                            <div className="hexagono" id="h28">

                            </div>
                            
                        </div>
                        <div id="columna6">
                            <div className="hexagono" id="h34">
                                
                            </div>
                            <div className="hexagono" id="h16">

                            </div>
                            <div className="hexagono" id="h15">

                            </div>
                            <div className="hexagono" id="h14">

                            </div>
                            <div className="hexagono" id="h29">

                            </div>
                        </div>
                        <div id="columna7">
                            <div className="hexagono" id="h33">
                                
                            </div>
                            <div className="hexagono" id="h32">

                            </div>
                            <div className="hexagono" id="h31">

                            </div>
                            <div className="hexagono" id="h30">

                            </div>
                        </div>
                    </div>
                </div>
                <div id="derecha">
                    <div id="atributos">
                    <div className="boxatributos">
                        <p id="misatributos">MIS ATRIBUTOS</p>
                        <div className="logoatributos">
                            <div id="logoatributos">
                                <img id="atriperso" src="/imagenes/rayoaccesorio.png"></img>
                                <img id="atriperso" src="/imagenes/fuerzaaccesorio.png"></img>
                                <img id="atriperso" src="/imagenes/equilibrioaccesorio.png"></img>
                                <img id="atriperso" src="imagenes/resistenciaaccesorio.png"></img>
                                <img id="atriperso" src="/imagenes/cerebroaccesorio.png"></img>
                                <img id="atriperso" src="/imagenes/coordinacionaccesorio.png"></img>
                            </div>
                            <div id="numatributos">
                                <p id="juegoatributo1">1</p>
                                <p id="juegoatributo2">0</p>
                                <p id="juegoatributo3">1</p>
                                <p id="juegoatributo4">2</p>
                                <p id="juegoatributo5">3</p>
                                <p id="juegoatributo6">0</p>    
                            </div>
                        </div>
                    </div>

                    </div>

                    
                    <div id="turnos">
                        <button className="buttonjugar" onClick={() => { getMatch() }}>ACTUALIZAR TABLERO</button>
                        <button className="buttonjugar" onClick={() => { lanzarDado() }}>LANZAR DADO</button>
                        <button className="buttonjugar" onClick={() => { terminarTurno() }}>TERMINAR TURNO</button>
                        {/* <button className="buttonjugar">ENTRENAR</button> */}
                        <div className="BanderaFederacion" id="player1_bandera"></div>
                        <div className="BanderaFederacion" id="player2_bandera"></div>
                        <div className="BanderaFederacion" id="player3_bandera"></div>
                    </div>
                </div>
            </section>

            </body>
    );
}