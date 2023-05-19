import { useEffect, useState } from "react";

import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Versus(){

    const [players, setPlayers] = useState();

    const config = {
        method: "get", 
        url: `${SERVER_URL}/matches/infoversus`, 
        headers: {"content-type": "application/json"},
    }

    useEffect(() => {
        axios(config) 
            .then((response) => {
                setPlayers(response.data);
                const p1_delegacion = response.data.player1.delegacion;
                const p2_delegacion = response.data.player2.delegacion;
                const p3_delegacion = response.data.player3.delegacion;
                const currentPlayer = response.data.currentPlayer;
                const player1 =  response.data.player1;
                const player2 =  response.data.player2;
                const player3 =  response.data.player3;

                if (currentPlayer.id === player1.id){
                    if (p1_delegacion === "Brasil") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                    }
                    if (p1_delegacion === "EEUU") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                    }
                    if (p1_delegacion === "Corea") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                    }
                    if (p1_delegacion === "Jamaica") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                    }
                    if (p1_delegacion === "Rusia") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                    }
                    if (p1_delegacion === "China") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                    }
                    if (p2_delegacion === "Brasil") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                    }
                    if (p2_delegacion === "EEUU") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                    }
                    if (p2_delegacion === "Corea") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                    }
                    if (p2_delegacion === "Jamaica") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                    }
                    if (p2_delegacion === "Rusia") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                    }
                    if (p2_delegacion === "China") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                    }
                }
                else if (currentPlayer.id === player2.id){
                    if (p2_delegacion === "Brasil") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                    }
                    if (p2_delegacion === "EEUU") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                    }
                    if (p2_delegacion === "Corea") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                    }
                    if (p2_delegacion === "Jamaica") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                    }
                    if (p2_delegacion === "Rusia") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                    }
                    if (p2_delegacion === "China") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                    }
                    if (p3_delegacion === "Brasil") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                    }
                    if (p3_delegacion === "EEUU") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                    }
                    if (p3_delegacion === "Corea") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                    }
                    if (p3_delegacion === "Jamaica") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                    }
                    if (p3_delegacion === "Rusia") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                    }
                    if (p3_delegacion === "China") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                    }    
                }   
                else if (currentPlayer.id === player3.id){
                    if (p3_delegacion === "Brasil") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                    }
                    if (p3_delegacion === "EEUU") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                    }
                    if (p3_delegacion === "Corea") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                    }
                    if (p3_delegacion === "Jamaica") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                    }
                    if (p3_delegacion === "Rusia") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                    }
                    if (p3_delegacion === "China") {
                        document.getElementById("vs_bandera1").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                    }
                    if (p1_delegacion === "Brasil") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/brasil.jpg" />`;
                    }
                    if (p1_delegacion === "EEUU") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/eeuu.jpg" />`;
                    }
                    if (p1_delegacion === "Corea") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/corea.jpg" />`;
                    }
                    if (p1_delegacion === "Jamaica") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/jamaica.jpg" />`;
                    }
                    if (p1_delegacion === "Rusia") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/rusia.jpg" />`;
                    }
                    if (p1_delegacion === "China") {
                        document.getElementById("vs_bandera2").innerHTML = `<img src="./imagenes/brectangulares/china.jpg" />`;
                    }
                } 

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const lanzarDadoVersus = async () => {
        const url = `${SERVER_URL}/matches/lanzardadoversus`
        await axios.get(url).then(async (response) => {
            console.log(response.data);
            const resultado = response.data.resultado;
            const puntosp1 = response.data.sumap1;
            const puntosp2 = response.data.sumap2;
            const puntosp3 = response.data.sumap3;
            const currentPlayer = response.data.currentPlayer;
            const player1 =  response.data.player1;
            const player2 =  response.data.player2;
            const player3 =  response.data.player3;
            
            if (currentPlayer.id === player1.id){
                if (resultado === `local`){
                    alert(`Local saco ${puntosp1}, Visita saco ${puntosp2} // Has ganado, avanzas una posicion`)
                }
                else if (resultado === `visita`){
                    alert(`Local saco ${puntosp1}, Visita saco ${puntosp2} // Has perdido, retrocedes una posicion`)
                }
                else {
                    alert(`Local saco ${puntosp1}, Visita saco ${puntosp2} // Es un empate`)
                }
            }
            else if (currentPlayer.id === player2.id){
                if (resultado === `local`){
                    alert(`Local saco ${puntosp2}, Visita saco ${puntosp3} // Has ganado, avanzas una posicion`)
                }
                else if (resultado === `visita`){
                    alert(`Local saco ${puntosp2}, Visita saco ${puntosp3} // Has perdido, retrocedes una posicion`)
                }
                else {
                    alert(`Local saco ${puntosp2}, Visita saco ${puntosp3} // Es un empate`)
                }
                
            }
            else if (currentPlayer.id === player3.id){
                if (resultado === `local`){
                    alert(`Local saco ${puntosp3}, Visita saco ${puntosp1} // Has ganado, avanzas una posicion`)
                }
                else if (resultado === `visita`){
                    alert(`Local saco ${puntosp3}, Visita saco ${puntosp1} // Has perdido, retrocedes una posicion`)
                }
                else {
                    alert(`Local saco ${puntosp3}, Visita saco ${puntosp1} // Es un empate`)
                }
                
            }


        });

        const url2 = `${SERVER_URL}/matches/terminarturno`
        await axios.get(url2).then((response) => {
            const turno = response.data.match.turnos;
            alert(`Turno ${turno-1} finalizado es el turno de tu compañero`)
        });
        setTimeout( function() { window.location.href = "/olympics"; }, 2000 );
    };

    return(
        <body background = "/imagenes/stadium_background.jpeg">
            <div className = "NavLand">
                <div className= "referencia">
                    <a id="registro" href="/crear-partida">VOLVER AL MENU DE PARTIDA</a>
                </div>
                <div className="referencia">
                    <a id="reglas" href="/">TERMINAR PARTIDA</a>
                </div>
            </div> 
        
            <div className="vs_medio">
                    <p id="vs_titulo"> VERSUS </p>
                <div className="vs_rivales">
                    <div className="vs_rivalesyvs">
                        <div className="vs_logoatributos">
                            <div id="vs_imagenes">
                                <div className="grid_vs" id="vs_bandera1"> </div>

                                <div className="grid_vs"> 
                                    <img id="vs_atriperso" src="/imagenes/vs.png"></img>
                                </div>

                                <div className="grid_vs" id="vs_bandera2"> </div> 
                                      
                            </div>
                        </div>
                    </div>
                    
                </div>
                    
                <div className="vs_mensaje">
                        <p>A LANZAR EL DADO Y COMPETIR</p>
                </div>
                <div className="vs_botones_competencia">
                    <img id="vs_gifdado" src="/imagenes/dado/dice.gif"></img>
                    <button className="buttonjugar" onClick={() => { lanzarDadoVersus() }} >LANZAR DADO</button>
                </div>
            </div>

        </body>
    );
}