import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useCookieAuth from '../hooks/useCookieAuth';
import jwtDecode from 'jwt-decode';
import useTokenAuth from '../hooks/useTokenAuth';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;



export default function InicioSesion(){

    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();
    

    const userValidation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}/auth/login`, {
                "nickname": nickname,
                "password": password
            });

            if (!response.data.error) {
                handleTokenChange(response.data['token'], 'login');
                handleUserLogin();
                navigate("/olympics",
                {
                    state: response.data
                });
            }
        } catch (error) {
            if (error.response?.status == 401) {
                setPassword("");
                setErrorMessage("Contraseña Incorrecta");
            }
            else if (error.response?.status == 404) {
                console.log("usuario no existe");
                setNickname("");
                setPassword("");
                setErrorMessage("Usuario Inexistente");
            }
        }
    }




    return(
        <>
            <body background = "/imagenes/fondoiniciosesion.jpg">          
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
                <br />
                <br />
                <div className="reg">
                    <p id="inses">Iniciar Sesión</p>
                    <form className='login' onSubmit={userValidation}>
                        <input
                            id="placeholder" type="text" placeholder="Nombre de Usuario" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
                        <input
                            id="placeholder" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <br />
                        <input type="submit" className="boton" value="Iniciar Sesión" />
                        <p className={errorMessage ? 'error-message': "offscreen"} aria-live="assertive">{errorMessage}</p>
                    </form>

                    <p id="sincuenta"> ¿No tienes cuenta? </p>
                    <a href="/registrarse">
                        <input
                        type="button"
                        className="boton"
                        defaultValue="Crear una cuenta"
                        />
                    </a>
                </div>
            </body>
        </>
    );
}