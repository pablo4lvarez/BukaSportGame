function contenido(cual) {
    var capas = new Array("Uno", "Dos", "Tres", "Cuatro", "Cinco");
    var i;
    for (i in capas) {
        if (capas[i] == cual) {
            document.getElementById(capas[i]).style.display = 'block';
        } else {
            document.getElementById(capas[i]).style.display = 'none';
        }
    }
}

function Alert() {
    window.alert("Felicidades! Bienvenido a 'The Olympics'! A disfrutar el juego")
}
