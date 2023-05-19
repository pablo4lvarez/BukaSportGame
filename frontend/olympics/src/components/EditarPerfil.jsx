import { Router } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import { useState } from "react";

export default function EditarPerfil(){

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [flag, setFlag] = useState("");
    const [nickname, setNickname] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    
    const [form_nickname, setFormNickname] = useState("");
    const [form_nombre, setFormNombre] = useState("");
    const [form_apellido, setFormApellido] = useState("");
    const [form_password, setFormPassword] = useState("");


    const editUser = async(e) => {
        e.preventDefault();
        console.log(form_nombre, form_apellido ,form_nickname, form_password);
        try {
            const response = await axios.patch(`${SERVER_URL}/players/profile/edit`, {
                'nombre': form_nombre,
                'apellido': form_apellido,
                'nickname': form_nickname,
                'password': form_password
            });
            if (response.status === 201) {
                alert("Usuario actualizado con éxito");
                navigate("/miperfil");
            }
            
        } catch (error) {
            if (error.response?.status === 401) {
                setFormNickname("");
                setErrorMessage("Ya existe un Jugador con ese Nickname");
            }
            else if (error.response?.status === 402) {
                setFormPassword("");
                setErrorMessage("La contraseña no cumple con el formato");
            }
        }

    }


    const getProfile = async() => {
        const response = await axios.get(`${SERVER_URL}/players/profile`).then((response) => {
            console.log(response.data);
            setNickname(response.data.nickname);
            setNombre(response.data.nombre);
            setApellido(response.data.apellido);
            const flag = response.data.delegacion;
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





    return (
        <>
            <body background = "/imagenes/fondoreglas.jpg">

                <div class = "NavLand">
                    <div class= "referencia">
                        <a id="registro" href="/miperfil">MI PERFIL</a>
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

                <div className="edit-perfil">
                    <h2>Editar Perfil</h2>
                    <div>
                        <img  id="flagperfil-edit"  src={flag} onChange={(e) => setFlag(e.target.value)} ></img>
                    </div>

                    <p>Rellenar los campos que desea editar</p>

                    <p className={errorMessage ? 'error-message': "offscreen"} aria-live="assertive">{errorMessage}</p>

                    <form onSubmit={editUser}>
                        <div className="edit-div">
                            <p>Nombre Actual: {nombre}</p>
                            <div className="input-div">
                                <p>Nuevo Nombre:</p>
                                <input value={form_nombre} onChange={(e) => setFormNombre(e.target.value)} type="text"/>
                            </div>
                        </div>

                        <div className="edit-div">
                            <p>Apellido Actual: {apellido}</p>
                            <div className="input-div">
                                <p>Nuevo Apellido:</p>
                                <input value={form_apellido} onChange={(e) => setFormApellido(e.target.value)} type="text" />
                            </div>
                        </div>

                        <div className="edit-div">
                            <p>Nickname Actual: {nickname}</p>
                            <div className="input-div">
                                <p>Nuevo Nickname:</p>
                                <input value={form_nickname} onChange={(e) => setFormNickname(e.target.value)} type="text"/>
                            </div>
                        </div>

                        <div className="edit-div">
                            <p>Contraseña Actual: ******* </p>
                            <div className="input-div">
                                <p>Nueva Contraseña:</p>
                                <input value={form_password} onChange={(e) => setFormPassword(e.target.value)} type="text"/>
                            </div>
                        </div>
                        <br/>
                        <button id="boton-edit-perfil" type="submit">Editar</button>
                    </form>

                </div>


            </body>
        </>
    );
}