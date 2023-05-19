import { useEffect, useState } from "react";
import axios from "axios";




export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Preguntas(){

    const [players, setPlayers] = useState();

    const config = {
        method: "get", 
        url: `${SERVER_URL}/matches`, 
        headers: {"content-type": "application/json"},
    }

    const sacarCarta = async () => {
        const url = `${SERVER_URL}/matches/sacarcarta`
        await axios.post(url).then((response) => {
            console.log(response.data);
            const carta = response.data.carta;
            alert(`Sacasteee la carta ${carta} `)
            if (carta === 1) {
                alert(`Has incrito mal a un atleta, retrocedes dos posiciones como sanción`)
            }
            else if (carta === 2) {
                alert(`Se premia a tu federacion por su buena conducta en años anteriores, avanzas una posición`)
            }
            else if (carta === 3) {
                alert(`Tus atletas estan en su mejor momento en el gimnasio, ganas 3 puntos de Fuerza`)
            }
            else if (carta === 4) {
                alert(`Tus atletas se fueron de fiesta y se encuentran cansados, pierdes 2 puntos de Resistencia`)
            }
            
        });
        const url2 = `${SERVER_URL}/matches/terminarturno`
        await axios.post(url2).then((response) => {
            const turno = response.data.match.turnos;
            alert(`Turno ${turno-1} finalizado es el turno de tu compañero`)
        });
        setTimeout( function() { window.location.href = "/olympics"; }, 2000 );
    };

    return(
        <body background = "/imagenes/fondostandar.jpg">
            <div className = "NavLand">
                <div className= "referencia">
                    <a id="registro" href="/crear-partida">VOLVER AL MENU DE PARTIDA</a>
                </div>
                <div className="referencia">
                    <a id="reglas" href="/">TERMINAR PARTIDA</a>
                </div>
            </div> 
        
            <div className="vs_medio">
                    <p id="vs_titulo"> CARTAS DE PREGUNTA </p>
                <div className="vs_rivales">
                    <div className="vs_rivalesyvs">
                        <div className="vs_logoatributos">
                            <div id="vs_imagenes">
                                <div className="grid_vs"> 
                                    <img id="preguntas_atriperso" src="/imagenes/signopregunta.png"></img>
                                </div>   
                            </div>
                        </div>
                    </div>
                    
                </div>
                    
                <div className="vs_mensaje">
                        <p>Selecciona una carta de Pregunta para ver lo que te ha salido</p>
                </div>
                <div className="preguntas_botones">
                    <button className="buttonjugar" onClick={() => { sacarCarta() }} >SACAR CARTA</button>
                    <button className="buttonjugar">VOLVER</button>
                </div>
            </div>

        </body>
    );
}