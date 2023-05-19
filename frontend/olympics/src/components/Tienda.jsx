export default function Tienda() {
    const background = {
        backgroundImage: "url(/imagenes/fondostandar.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    
    return (
        
        <body background = "/imagenes/fondoolimpic.jpg">
            <div className = "NavLand">
                <div className= "referencia">
                    <a id="registro" href="/miperfil">MI PERFIL</a>
                </div>
                <div className="referencia">
                    <a id="reglas" href="/reglas">REGLAS</a>
                </div>
                <a id="partida" href="/crear-partida">CREA TU PARTIDA</a>
                <div className="referencia">
                    <a id="acerca" href="/medallas">MIS MEDALLAS </a>
                </div>
                <div className="referencia">
                    <a id="quienes" href="/tienda">MI TIENDA</a>
                </div>
            </div>

            <div className="TiendaHeader">
                <h1>Tienda</h1>
            </div>

            <br />

            <div className="TiendaMoneyFilter">
                <h2>Saldo: 5 puntos</h2>
                <div className="tienda-category-select">
                    <select>
                        <option value="0">Todos</option>
                        <option value="1">Fuerza</option>
                        <option value="2">Velocidad</option>
                        <option value="3">Equilibrio</option>
                        <option value="4">Resistencia</option>
                        <option value="5">Coordinación</option>
                        <option value="6">Inteligencia</option>
                    </select>
                </div>
            </div>
            
            <div className="TiendaGrid">

                <div className="tienda-item">
                    <img src="/imagenes/tienda/gym.png" />
                    <div className="tienda-item-data">
                        <label>Gym</label>
                        <label>Fuerza +1 </label>
                        <label>$: 7 puntos</label>
                        <button>Comprar</button>
                    </div>
                        
                </div>

                <div className="tienda-item">
                    <img src="/imagenes/tienda/libros.png" />
                    <div className="tienda-item-data">
                        <label>Libros</label>
                        <label>Inteligencia +1 </label>
                        <label>$: 6 puntos</label>
                        <button>Comprar</button>
                    </div>
                </div>

                <div className="tienda-item">
                    <img src="/imagenes/tienda/redbull.png" />
                    <div className="tienda-item-data">
                        <label>Redbull</label>
                        <label>Resistencia +1 </label>
                        <label>$: 7 puntos</label>
                        <button>Comprar</button>
                    </div>
                </div>

                <div className="tienda-item">
                    <img src="/imagenes/tienda/ropas.png" />
                    <div className="tienda-item-data">
                        <label>Ropas</label>
                        <label>Coordinación +1 </label>
                        <label>$: 6 puntos</label>
                        <button>Comprar</button>
                    </div>
                </div>

                <div className="tienda-item">
                    <img src="/imagenes/tienda/valla.png" />
                    <div className="tienda-item-data">
                        <label>Valla</label>
                        <label>Coordinación +2 </label>
                        <label>$: 13 puntos</label>
                        <button>Comprar</button>
                    </div>
                </div>

                <div className="tienda-item">
                    <img src="/imagenes/tienda/tacos.png" />
                    <div className="tienda-item-data">
                        <label>Tacos</label>
                        <label>Velocidad +1 </label>
                        <label>$: 7 puntos</label>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>

        </body>
    )
}