import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InicioSesion from './components/InicioSesion';
import LandingPage from './components/LandingPage';
import Reglas from './components/Reglas';
import AcercaDe from './components/AcercaDe';
import Nosotros from './components/Nosotros';
import Registrarse from './components/Registrarse';
import CrearPartida from './components/CrearPartida';
import Juego from './components/Juego';
import Medallas from './components/Medallas';
import Olympics from './components/Olympics';
import MiPerfil from './components/MiPerfil';
import Preguntas from './components/Preguntas';
import Tienda from './components/Tienda';
import EditarPerfil from './components/EditarPerfil';
import React, {useState, useEffect} from 'react';
import CookieAuthProvider from './contexts/cookieAuth';
import TokenAuthProvider from './contexts/tokenAuth';
import Versus from './components/Versus';
import Competencia from './components/Competencia';

function Routing(){
    return (
        <BrowserRouter>
            <CookieAuthProvider>
                <TokenAuthProvider>
                    <Routes>
                        <Route path={"/"} element={<LandingPage/>}/>
                        <Route path={"/inicio-sesion"} element={<InicioSesion/>}/>
                        <Route path={"/reglas"} element={<Reglas/>}/>
                        <Route path={"/acerca-de"} element={<AcercaDe/>}/>
                        <Route path={"/nosotros"} element={<Nosotros/>}/>
                        <Route path={"/registrarse"} element={<Registrarse/>}/>
                        <Route path={"/crear-partida"} element={<CrearPartida/>}/>
                        <Route path={"/juego"} element={<Juego/>}/>
                        <Route path={"/medallas"} element={<Medallas/>}/>
                        <Route path={"/olympics"} element={<Olympics/>}/>
                        <Route path={"/miperfil"} element={<MiPerfil/>}/>
                        <Route path={"/preguntas"} element={<Preguntas/>}/>
                        <Route path={"/tienda"} element={<Tienda/>}/>
                        <Route path={"/editar-perfil"} element={<EditarPerfil/>}/>
                        <Route path={"/competencia"} element={<Competencia/>}/>
                        <Route path={"/versus"} element={<Versus/>}/>
                    </Routes>
                </TokenAuthProvider>
            </CookieAuthProvider>
        </BrowserRouter>
    )
}

export default Routing;