const identificador = document.getElementById("game");
const lienzo = identificador.getContext("2d");

var teclas = {
  Arriba: 38,
  Abajo: 40,
  Derecha: 39,
  Izquierda: 37,
};
document.addEventListener("keyup", mueveMonito);

var monoGame = {
  cargarOK: false,
};

var mono1Game = {
  cargarOK: false,
};

var fondoGame = {
  cargarOK: false,
};

//Fondo game
fondoGame.imagen = new Image();
fondoGame.imagen.src = "./images/galxy.jpg";
fondoGame.imagen.addEventListener("load", cargarFondo);

//mono game
monoGame.imagen = new Image();
monoGame.imagen.src = "./images/monoNew.png";
monoGame.imagen.addEventListener("load", cargarMonito);

mono1Game.imagen = new Image();
mono1Game.imagen.src = "./images/nonoNew2.png";
mono1Game.imagen.addEventListener("load", cargarMonito1);

function cargarFondo() {
  fondoGame.cargarOk = true;

  dibujar();
}

function cargarMonito() {
  monoGame.cargarOk = true;

  dibujar();
}
function cargarMonito1() {
  mono1Game.cargarOk = true;

  dibujar();
}

//Posicionamiento inicial del monito
var monitox = 10;
var monitoy = 400;
var movimiento = 20;

const dibujar = (e) => {
  // if (fondoGame.cargarOK === true && monoGame.cargarOK === true) {
  // }
  lienzo.drawImage(fondoGame.imagen, 0, 0);
  lienzo.drawImage(monoGame.imagen, monitox, monitoy);
};

//Mover monito
function mueveMonito(evento) {
  if (evento.keyCode === teclas.Arriba) {
    console.log("arriba");
    monitoy = monitoy - movimiento;
    lienzo.drawImage(fondoGame.imagen, 0, 0);
  }

  if (monitoy >= 0) {
    lienzo.drawImage(monoGame.imagen, monitox, monitoy);
  } else {
    monitoy = monitoy + movimiento;
    lienzo.drawImage(monoGame.imagen, monitox, monitoy);
  }

  if (evento.keyCode == teclas.Abajo) {
    console.log("ABAJO");
    monitoy = monitoy + movimiento;
    lienzo.drawImage(fondoGame.imagen, 0, 0);

    if (monitoy <= 400) {
      lienzo.drawImage(monoGame.imagen, monitox, monitoy);
    } else {
      monitoy = monitoy - movimiento;
      lienzo.drawImage(monoGame.imagen, monitox, monitoy);
    }
  }

  if (evento.keyCode == teclas.Derecha) {
    console.log("DERECHA");
    monitox = monitox + movimiento;
    lienzo.drawImage(fondoGame.imagen, 0, 0);

    if (monitox <= 400) {
      lienzo.drawImage(monoGame.imagen, monitox, monitoy);
    } else {
      monitox = monitox - movimiento;
      lienzo.drawImage(monoGame.imagen, monitox, monitoy);
    }
  }

  if (evento.keyCode == teclas.Izquierda) {
    console.log("IZQUIERDA");
    monitox = monitox - movimiento;
    lienzo.drawImage(fondoGame.imagen, 0, 0);

    if (monitox >= 0) {
      lienzo.drawImage(mono1Game.imagen, monitox, monitoy);
    } else {
      monitox = monitox + movimiento;
      lienzo.drawImage(mono1Game.imagen, monitox, monitoy);
    }
  }
}
