import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import useTokenAuth from "../hooks/useTokenAuth";
import jwtDecode from "jwt-decode";


export default function Olympics(){

    const navigate = useNavigate();
    const { currentUser, handleUserLogout, userStatus, handleUserLogin } = useCookieAuth(); 
    const { handleTokenChange } = useTokenAuth();
    const { state } = useLocation();
    
    console.log(state);


    const logout = async () => {
        const response = await axios.post(`${SERVER_URL}/auth/logout`)
                .then(() => console.log('cerramos sesión'))
                .catch(err => console.log(err));
        handleUserLogout();
        handleTokenChange('', 'logout');
        navigate("/");
    }

    return(
        <>
        <body background = "/imagenes/fondoolimpic.jpg">
        <div class = "NavLand">
            <div class= "referencia">
                <a id="registro" href="/miperfil">MI PERFIL</a>
            </div>
            <div class="referencia">
                <a id="reglas" href="/reglas">REGLAS</a>
            </div>
            <a id="partida" href="/crear-partida">CREA TU PARTIDA</a>
            <div class="referencia">
                <a id="acerca" href="/medallas">MIS MEDALLAS </a>
            </div>
            <div class="referencia">
                <a id="quienes" href="/tienda">MI TIENDA</a>
            </div>
        </div>
        <br />
        <div id="LogOut">
            <button onClick={logout}> Cerrar Sesión</button>
        </div>
        <p id="LandingText">¿LISTO PARA COMPETIR? </p>

            <br></br>
            <br></br>
            <div>
            <img id="logoolimpiadas" src="/imagenes/logoolimpiadas.png"></img>
            </div>
        </body>
        </>
    );
}