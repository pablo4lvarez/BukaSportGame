import { useEffect, useState } from "react";
import axios from "axios";



export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export default function CrearPartida() {
    
    // const [players, setPlayers] = useState();
    // const config = {
    //     method: "get", 
    //     url: `${SERVER_URL}/crearpartida`, 
    //     headers: {"content-type": "application/json"},
    // }

    // useEffect(() => {
    //     try {
    //         axios(config) //ACÁ PONEMOS LAS BANDERAS CORRESPONDIENTES A LAS DELEGACIONES
    //             .then((response) => {
    //                 setPlayers(response.data);
    //                 alert(response.data.match)
    //                 console.log((response.data.match[0]))
    //                 console.log((response.data.session))

    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });    
    //     } catch (error) {
    //         console.log(error)
    //         if (error.response?.status === 401) {
    //             alert("No has iniciado session");
    //         }
            
    //     }
        
    // }, []);

        
        // const revisarComienzo = async () => {
        //     const url = `${SERVER_URL}/matches/comenzarpartida`

        //     await axios.get(url).then((response) => {
        //         console.log(response.data);
                
        //     });
        // };

    return (
        <body background = "/imagenes/fondostandar.jpg">
            <div className="NavBar">
                <div className="referencia">
                <a id="registro" href="/olympics">
                    VOLVER
                </a>
                </div>
                <div className="referencia">
                <a id="reglas" href="/reglas">
                    REGLAS
                </a>
                </div>
                <div className="referencia">
                <a id="partida">¡VAMOS POR ESTAS OLIMPIADAS!</a>
                </div>
                <div className="referencia">
                <a id="acerca" href="/medallas">
                    MIS MEDALLAS
                </a>
                </div>
                <div className="referencia">
                <a id="quienes" href="/preguntas">
                    PREGUNTAS FRECUENTES
                </a>
                </div>
            </div>
            <div className="crearpartida">
                <div className="boxpartida">
                    <p id="delapartida">MIS ATRIBUTOS</p>
                    <div className="misaccesorios">
                        <div id="accesorios">
                        <img id="atriperso" src="/imagenes/rayoaccesorio.png" />
                        <img id="atriperso" src="/imagenes/fuerzaaccesorio.png" />
                        <p id="delapartida1">+2</p>
                        <p id="delapartida1">+1</p>
                        </div>
                        <div id="accesorios">
                        <img
                            id="atriperso"
                            src="/imagenes/equilibrioaccesorio.png"
                        />
                        <img
                            id="atriperso"
                            src="/imagenes/resistenciaaccesorio.png"
                        />
                        <p id="delapartida1">+1</p>
                        <p id="delapartida1">+2</p>
                        </div>
                        <div id="accesorios">
                        <img id="atriperso" src="/imagenes/cerebroaccesorio.png" />
                        <img
                            id="atriperso"
                            src="/imagenes/coordinacionaccesorio.png"
                        />
                        <p id="delapartida1">-</p>
                        <p id="delapartida1">+3</p>
                        </div>
                    </div>
                </div>
                <div className="boxpartida">
                    <p id="delapartida">PARTICIPANTES</p>
                    <input type="text" placeholder="INVITAR JUGADOR" />
                    <input type="text" placeholder="INVITAR JUGADOR" />
                    <input type="text" placeholder="TU USUARIO" />
                    <br />
                    <br />
                    <br />
                    <p id="delapartida">¿ESTAS LISTO?</p>
                    <a href="/Juego">
                        <input type="button" id="botonempezar" defaultValue="EMPEZAR PARTIDA" />
                    </a>
                </div>
                <div className="boxpartida">
                    <p id="delapartida">MIS AMIGOS</p>
                    <div id="amigos">
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                        <p id="delapartida2">TU AMIGO</p>
                    </div>
                </div>
            </div>
        </body>

    )
}