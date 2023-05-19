import { Router } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import { useState } from "react";

export default function MiPerfil(){

    const navigate = useNavigate();
    const [flag, setFlag] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [puntos, setPuntos] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fuerza, setFuerza] = useState("");
    const [velocidad, setVelocidad] = useState("");
    const [equilibrio, setEquilibrio] = useState("");
    const [resistencia, setResistencia] = useState("");
    const [coordinacion, setCoordinacion] = useState("");
    const [inteligencia, setInteligencia] = useState("");
    
    
    const getProfile = async() => {
        const response = await axios.get(`${SERVER_URL}/players/profile`).then((response) => {
            console.log(response.data);
            setNickname(response.data.player.nickname);
            setEmail(response.data.player.email);
            setPuntos(response.data.player.puntos);
            setNombre(response.data.player.nombre);
            setApellido(response.data.player.apellido);
            setFuerza(response.data.player_stats.fuerza);
            setVelocidad(response.data.player_stats.velocidad);
            setEquilibrio(response.data.player_stats.equilibrio);
            setResistencia(response.data.player_stats.resistencia);
            setCoordinacion(response.data.player_stats.coordinacion);
            setInteligencia(response.data.player_stats.inteligencia);

            const flag = response.data.player.delegacion;
            if (flag === 'EEUU') {
                const url = "/imagenes/brectangulares/eeuu.jpg";
                setFlag(url);
            }
            else if (flag === 'Brasil') {
                const url = "/imagenes/brectangulares/brasil.jpg";
                setFlag(url);
            }
            else if (flag === 'China') {
                const url = "/imagenes/brectangulares/china.jpg";
                setFlag(url);
            }
            else if (flag === 'Jamaica') {
                const url = "/imagenes/brectangulares/jamaica.jpg";
                setFlag(url);
            }
            else if (flag === 'Corea') {
                const url = "/imagenes/brectangulares/corea.jpg";
                setFlag(url);
            }
            else if (flag === 'Rusia') {
                const url = "/imagenes/brectangulares/rusia.jpg";
                setFlag(url);
            }
        });
    }

    getProfile();

    


    return(
        <>
        <body background = "/imagenes/fondoreglas.jpg">
        <div class = "NavLand">
            <div class= "referencia">
                <a id="registro" href="/olympics">VOLVER</a>
            </div>
            <div class="referencia">
                <a id="reglas" href="/reglas">REGLAS</a>
            </div>
            <a id="partida" href="/crear-partida">CREA TU PARTIDA</a>
            <div class="referencia">
                <a id="acerca" href="/medallas">MIS MEDALLAS</a>
            </div>
            <div class="referencia">
                <a id="quienes" href="/preguntas">PREGUNTAS FRECUENTES</a>
            </div>
        </div>

        <div class="perfil">
            <div class="boxperfil">
                <div class="miperfil">
                    <div>
                        <img  id="flagperfil" class="imgperfil" src={flag} onChange={(e) => setFlag(e.target.value)} ></img>
                    </div>
                    <div id="accesorios">
                        <p id="perfil-nickname" class="infoperfil"> Nickname: {nickname} </p>
                        <p id="perfil-victorias" class="infoperfil"> Email: {email} </p>
                        <p id="perfil-partidas" class="infoperfil"> Nombre: {nombre} {apellido} </p>
                        <p id="perfil-medallas" class="infoperfil"> {puntos} Puntos disponibles</p>
                    </div>
                    <label id="tusatributos">ATRIBUTOS</label>
                    <div class="atributoperfil">
                        <div class="atributos-perfil">
                            <p id="letraatr">FUERZA</p>
                            <div id="barra">
                                <meter value={fuerza} min="0" max="10"></meter>
                            </div>
                            <p id="letraatr">VELOCIDAD</p>
                            <div id="barra">
                                <meter value={velocidad} min="0" max="10"></meter>
                            </div>
                        </div>
                        <div class="atributos-perfil">
                            <p id="letraatr">EQUILIBRIO</p>
                            <div id="barra">
                                <meter value={equilibrio} min="0" max="10"></meter>
                            </div>
                            <p id="letraatr">RESISTENCIA</p>
                            <div id="barra">
                                <meter value={resistencia} min="0" max="10"></meter>
                            </div>
                        </div>
                        <div class="atributos-perfil">
                            <p id="letraatr">COORDINACIÓN</p>
                            <div id="barra">
                                <meter value={coordinacion} min="0" max="10"></meter>
                            </div>
                            <p id="letraatr">INTELIGENCIA</p>
                            <div id="barra">
                                <meter value={inteligencia} min="0" max="10"></meter>
                            </div>
                        </div>
                    </div>
                
                <button onClick={() => navigate("/editar-perfil")} > Editar Perfil</button>

                </div>
            </div>
        </div>
        </body>
        </>
    );
}