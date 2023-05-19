import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export default function Registrarse() {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [hash_contrasena, setHashContrasena] = useState("");
    const [password_repeat, setPasswordRepeat] = useState("");
    const [delegacion, setDelegacion] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit  = async (e) => {
        e.preventDefault();
        console.log(nombre, apellido, nickname, email, hash_contrasena, delegacion, password_repeat);
        if (hash_contrasena === password_repeat) {
            try {
                const response = await axios.post(`${SERVER_URL}/auth/signup`, {
                    "nombre": nombre,
                    "apellido": apellido,
                    "nickname": nickname,
                    "email": email,
                    "hash_contrasena": hash_contrasena,
                    "delegacion": delegacion
                });
                if (!response.data.error) {
                    alert("Usuario credo con éxito");
                    navigate("/");
                }
            } catch (error) {
                if (error.response?.status === 401) {
                    setHashContrasena("");
                    setErrorMessage("Formato incorrecto de Contraseña");
                }
                else if (error.response?.status === 400) {
                    setNickname("");
                    setErrorMessage("Ya existe un usuario con ese Nickname");
                }
                else if (error.response?.status === 403) {
                    setEmail("");
                    setErrorMessage("Ya existe un usuario con ese Email");
                }
            }

        }
        else {
            setHashContrasena("");
            setPasswordRepeat("");
            setErrorMessage("Las contraseñas ingresadas deben coincidir");
        }
    };





    return (
        <body background = "/imagenes/fondocrear.jpg">
            <div className="NavBar">
                <div className="referencia">
                <a id="registro" href="/">
                    VOLVER
                </a>
                </div>
                <div className="referencia">
                <a id="reglas" href="/reglas">
                    REGLAS
                </a>
                </div>
                <div className="referencia">
                <a id="navbarnegro" href="/preguntas">
                    PREGUNTAS FRECUENTES
                </a>
                </div>
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
            <div className="reg1">
                <h2>Registrate</h2>

                <form onSubmit={handleSubmit}  >
                    <input type="text" placeholder="Nombre" id="nombre_registrar" value={nombre} onChange = {(e) => setNombre(e.target.value)} required/>
                    <input type="text" placeholder="Apellido" id="apellido_registrar" value={apellido} onChange = {(e) => setApellido(e.target.value)} required/>
                    <input type="text" placeholder="Nombre de Usuario" id="nickname_registrar" value={nickname} onChange = {(e) => setNickname(e.target.value)} required/>
                    <input type="email" placeholder="@email" id="email_registrar" value={email} onChange = {(e) => setEmail(e.target.value)} required />
                    <p id="contraseña">
                        *La contraseña debe constar de al menos 8 caracteres
                        <br /> y que incluya mayúsculas y minúsculas. Puede ser alfanumérico*
                    </p>
                    <input type="password" placeholder="Contraseña" id="contraseña_registrar" value={hash_contrasena} onChange = {(e) => setHashContrasena(e.target.value)} required/>
                    <input type="password" placeholder="Repetir Contraseña" value={password_repeat} onChange = {(e) => setPasswordRepeat(e.target.value)} required />
                    <label>Delegación Favorita</label>
                    <br />
                    <div className="delegaciones-select">
                        <select id="delegacion_registrar" value={delegacion} onChange = {(e) => setDelegacion(e.target.value)}>
                            <option value="Brasil">Brasil</option>
                            <option value="EEUU">EEUU</option>
                            <option value="Rusia">Rusia</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Corea">Corea</option>
                            <option value="China">China</option>
                        </select>
                    </div>
                    <br/>
                    <button className="boton" type="submit" id="boton_registrar">
                        Registrarse
                    </button>
                    <br />
                    <p className={errorMessage ? 'error-message': "offscreen"} aria-live="assertive">{errorMessage}</p>
                </form>
            </div>
        </body>
    );
}