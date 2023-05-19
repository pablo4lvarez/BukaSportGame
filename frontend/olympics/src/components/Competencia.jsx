import { useEffect, useState } from "react";

import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Competencia(){

    const [players, setPlayers] = useState();

    const config = {
        method: "get", 
        url: `${SERVER_URL}/matches/infocompetencia`, 
        headers: {"content-type": "application/json"},
    }

    useEffect(() => {
        axios(config) 
            .then((response) => {
                setPlayers(response.data);
                const deporte = response.data.deporte;
                const puntos = response.data.deporte.total;
                const stats = response.data.playerStats;
                console.log(stats)

            if (deporte.deporte === "atletismo") {
                document.getElementById("titulocomp").innerHTML = "Competencia de Atletismo";
                document.getElementById("atributo1_img").innerHTML = `<img src="./imagenes/rayoaccesorio.png" />`;
                document.getElementById("atributo2_img").innerHTML = `<img src="./imagenes/resistenciaaccesorio.png" />`;
                document.getElementById("atributo3_img").innerHTML = `<img src="./imagenes/coordinacionaccesorio.png" />`;
                document.getElementById("atributo1_img1").innerHTML = `<img src="./imagenes/rayoaccesorio.png" />`;
                document.getElementById("atributo2_img1").innerHTML = `<img src="./imagenes/resistenciaaccesorio.png" />`;
                document.getElementById("atributo3_img1").innerHTML = `<img src="./imagenes/coordinacionaccesorio.png" />`;
                document.getElementById("juegoatributo_comp1").innerHTML = (stats.velocidad);
                document.getElementById("juegoatributo_comp2").innerHTML = `${stats.resistencia}`;
                document.getElementById("juegoatributo_comp3").innerHTML = `${stats.coordinacion}`;

                document.getElementById("puntos_necesarios").innerHTML = `Puntos necesarios: ${puntos}`;

            }
            else if (deporte.deporte === "natacion") {
                document.getElementById("titulocomp").innerHTML = "Competencia de Natación";
                document.getElementById("atributo1_img").innerHTML = `<img src="./imagenes/fuerzaaccesorio.png" />`;
                document.getElementById("atributo2_img").innerHTML = `<img src="./imagenes/resistenciaaccesorio.png" />`;
                document.getElementById("atributo3_img").innerHTML = `<img src="./imagenes/coordinacionaccesorio.png" />`;
                document.getElementById("atributo1_img1").innerHTML = `<img src="./imagenes/fuerzaaccesorio.png" />`;
                document.getElementById("atributo2_img1").innerHTML = `<img src="./imagenes/resistenciaaccesorio.png" />`;
                document.getElementById("atributo3_img1").innerHTML = `<img src="./imagenes/coordinacionaccesorio.png" />`;
                document.getElementById("juegoatributo_comp1").innerHTML = (stats.fuerza);
                document.getElementById("juegoatributo_comp2").innerHTML = `${stats.resistencia}`;
                document.getElementById("juegoatributo_comp3").innerHTML = `${stats.coordinacion}`;
                document.getElementById("puntos_necesarios").innerHTML = `Puntos necesarios: ${puntos}`;

            }
            else if (deporte.deporte === "futbol") {
                document.getElementById("titulocomp").innerHTML = "Competencia de Futbol";
                document.getElementById("atributo1_img").innerHTML = `<img src="./imagenes/rayoaccesorio.png" />`;
                document.getElementById("atributo2_img").innerHTML = `<img src="./imagenes/resistenciaaccesorio.png" />`;
                document.getElementById("atributo3_img").innerHTML = `<img src="./imagenes/cerebroaccesorio.png" />`;
                document.getElementById("atributo1_img1").innerHTML = `<img src="./imagenes/rayoaccesorio.png" />`;
                document.getElementById("atributo2_img1").innerHTML = `<img src="./imagenes/resistenciaaccesorio.png" />`;
                document.getElementById("atributo3_img1").innerHTML = `<img src="./imagenes/cerebroaccesorio.png" />`;
                document.getElementById("juegoatributo_comp1").innerHTML = (stats.velocidad);
                document.getElementById("juegoatributo_comp2").innerHTML = `${stats.resistencia}`;
                document.getElementById("juegoatributo_comp3").innerHTML = `${stats.inteligencia}`;
                document.getElementById("puntos_necesarios").innerHTML = `Puntos necesarios: ${puntos}`;

            }
            else if (deporte.deporte === "gimnasia") {
                document.getElementById("titulocomp").innerHTML = "Competencia de Gimnasia";
                document.getElementById("atributo1_img").innerHTML = `<img src="./imagenes/fuerzaaccesorio.png" />`;
                document.getElementById("atributo2_img").innerHTML = `<img src="./imagenes/coordinacionciaaccesorio.png" />`;
                document.getElementById("atributo3_img").innerHTML = `<img src="./imagenes/equilibrioaccesorio.png" />`;
                document.getElementById("atributo1_img1").innerHTML = `<img src="./imagenes/fuerzaaccesorio.png" />`;
                document.getElementById("atributo2_img1").innerHTML = `<img src="./imagenes/coordinacionaccesorio.png" />`;
                document.getElementById("atributo3_img1").innerHTML = `<img src="./imagenes/equilibrioaccesorio.png" />`;
                document.getElementById("juegoatributo_comp1").innerHTML = (stats.fuerza);
                document.getElementById("juegoatributo_comp2").innerHTML = `${stats.coordinacion}`;
                document.getElementById("juegoatributo_comp3").innerHTML = `${stats.equilibrio}`;
                document.getElementById("puntos_necesarios").innerHTML = `Puntos necesarios: ${puntos}`;

            }
            else if (deporte.deporte === "tiro con arco") {
                document.getElementById("titulocomp").innerHTML = "Competencia de Tiro con Arco";
                document.getElementById("atributo1_img").innerHTML = `<img src="./imagenes/fuerzaaccesorio.png" />`;
                document.getElementById("atributo2_img").innerHTML = `<img src="./imagenes/cerebroaccesorio.png" />`;
                document.getElementById("atributo3_img").innerHTML = `<img src="./imagenes/equilibrioaccesorio.png" />`;
                document.getElementById("atributo1_img1").innerHTML = `<img src="./imagenes/fuerzaaccesorio.png" />`;
                document.getElementById("atributo2_img1").innerHTML = `<img src="./imagenes/cerebroaccesorio.png" />`;
                document.getElementById("atributo3_img1").innerHTML = `<img src="./imagenes/equilibrioaccesorio.png" />`;
                document.getElementById("juegoatributo_comp1").innerHTML = (stats.fuerza);
                document.getElementById("juegoatributo_comp2").innerHTML = `${stats.inteligencia}`;
                document.getElementById("juegoatributo_comp3").innerHTML = `${stats.equilibrio}`;
                document.getElementById("puntos_necesarios").innerHTML = `Puntos necesarios: ${puntos}`;

            }
            else if (deporte.deporte === "tenis de mesa") {
                document.getElementById("titulocomp").innerHTML = "Competencia de Tenis de Mesa";
                document.getElementById("atributo1_img").innerHTML = `<img src="./imagenes/rayoaccesorio.png" />`;
                document.getElementById("atributo2_img").innerHTML = `<img src="./imagenes/cerebroaccesorio.png" />`;
                document.getElementById("atributo3_img").innerHTML = `<img src="./imagenes/equilibrioaccesorio.png" />`;
                document.getElementById("atributo1_img1").innerHTML = `<img src="./imagenes/rayoaccesorio.png" />`;
                document.getElementById("atributo2_img1").innerHTML = `<img src="./imagenes/cerebroaccesorio.png" />`;
                document.getElementById("atributo3_img1").innerHTML = `<img src="./imagenes/equilibrioaccesorio.png" />`;
                document.getElementById("juegoatributo_comp1").innerHTML = (stats.velocidad);
                document.getElementById("juegoatributo_comp2").innerHTML = `${stats.inteligencia}`;
                document.getElementById("juegoatributo_comp3").innerHTML = `${stats.equilibrio}`;
                document.getElementById("puntos_necesarios").innerHTML = `Puntos necesarios: ${puntos}`;

            }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const lanzarDadoCompetencia = async () => {
        const url = `${SERVER_URL}/matches/lanzardadocompetencia`
        const url3 = `${SERVER_URL}/matches/retroceder`
        await axios.post(url).then(async (response) => {
            console.log(response.data);
            const puntos = response.data.playerStats.puntos_competencia;
            const necesarios = response.data.deporte.total;
            const dado = response.data.dado;
            if (puntos >= necesarios) {
                alert(`Obtuviste un ${dado} en el dado, y ponderaste ${puntos} puntos! Superaste la barrera`)
            }
            else
            await axios.post(url3).then((response) => {
                alert(`Obtuviste un ${dado} en el dado, y ponderaste ${puntos} puntos! No superaste la barrera. Retrocede una casilla`)
        });
        });

        const url2 = `${SERVER_URL}/matches/terminarturno`
        await axios.post(url2).then((response) => {
            const turno = response.data.match.turnos;
            const current_player = response.data.currentPlayer;
            const player1 = response.data.player1;
            const player2 = response.data.player2;
            const player3 = response.data.player3;
            if (current_player.id === player1.id){
                if (response.data.match.position_1 === 36) {
                    alert(`Felicitaciones has ganado la partida ${player1.nickname}`)
                    
                } else{
                    alert(`Turno ${turno-1} finalizado es el turno de tu compañero`)
                }

            } else if (current_player.id === player2.id){
                if (response.data.match.position_2 === 36) {
                    alert(`Felicitaciones has ganado la partida ${player2.nickname}`)
                    
                } else{
                    alert(`Turno ${turno-1} finalizado es el turno de tu compañero`)
                }

            } else if (current_player.id === player3.id){
                if (response.data.match.position_3 === 36) {
                    alert(`Felicitaciones has ganado la partida ${player3.nickname}`)
                    
                } else{
                    alert(`Turno ${turno-1} finalizado es el turno de tu compañero`)
                }

            }
        });
        setTimeout( function() { window.location.href = "/olympics"; }, 2000 );
    };


    return(
        <body background = "/imagenes/running_track.jpg">
            <div className = "NavLand">
                <div className= "referencia">
                    <a id="registro" href="/crear-partida">VOLVER AL MENU DE PARTIDA</a>
                </div>
                <div className="referencia">
                    <a id="reglas" href="/">TERMINAR PARTIDA</a>
                </div>
            </div> 
            
            <div className="medio">
                    <p id="titulocomp"></p>
                <div className="atributos_necesarios">
                    <div className="misaccesorios2">
                        <p>Atributos a utilizar para esta competencia:</p>
                        <div className="logoatributos">
                            <div id="logoatributos_comp">
                                <div className="grid_comp" id="atributo1_img1"> 
                                </div>
                                <div className="grid_comp" id="atributo2_img1"> 
                                </div>
                                <div className="grid_comp" id="atributo3_img1"> 
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="misaccesorios2">
                    <p>Mis atributos actuales:</p>
                    <div className="misaccesorios2">
                        <div className="logoatributos">
                            <div id="logoatributos_comp">
                                <div className="grid_comp" id="atributo1_img"></div>
                                <div className="grid_comp" id="atributo2_img"> 
                                </div>
                                <div className="grid_comp" id="atributo3_img"> 
                                </div>
                            </div>
                            <div id="numatributos_comp">
                                <div className="grid_comp">
                                    <p id="juegoatributo_comp1"></p>
                                </div>
                                <div className="grid_comp">
                                    <p id="juegoatributo_comp2"></p>
                                </div>
                                <div className="grid_comp">
                                    <p id="juegoatributo_comp3"></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                    
                </div>
                <div className="total_necesarios">
                        <p id="puntos_necesarios"></p>
                </div>
                <div className="botones_competencia">
                    <img id="gifdado" src="/imagenes/dado/dice.gif"></img>
                    <button className="buttonjugar" onClick={() => { lanzarDadoCompetencia() }}>LANZAR DADO</button>
                    <button className="buttonjugar">NO COMPETIR</button>
                </div>
            </div>

        </body>
            
    );
}