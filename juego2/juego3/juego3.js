//creamos el evento de pasar el mouse
document.getElementById("player").addEventListener("mouseover", sumarPuntos);

var puntos = 0;
var tiempo = 20;
var necesarios = 30;
function sumarPuntos() {
  puntos++;
  document.getElementById("puntos").innerHTML =
    "Puntos: <b> " + puntos + "/" + necesarios + "</b>";
  //declaracion de variables para movimientos
  let randNum = Math.round(Math.random() * 400);
  let randNum2 = Math.round(Math.random() * 400);
  //movimientos de la pelota
  document.getElementById("player").style.margin = randNum + "px";
  document.getElementById("player").style.marginLeft = randNum2 + "px";
  //condicion de puntos
  if (puntos == 30) {
    alert("ganaste Goleador");
    tiempo = 10;
    puntos = 0;
  }
}

function restarTiempo() {
  tiempo--;
  document.getElementById("tiempo").innerHTML =
    "&nbsp;&nbsp;&nbsp" + "tiempo: " + tiempo + " ";
  if (tiempo == 0) {
    alert("perdiste capo");

    tiempo = 30;
    puntos = 0;
  }
}
// setInterval(restarTiempo, 1000);
const interval = setInterval(function () {
  restarTiempo();
}, 1000);

// fondo animado
const animator = document.querySelector(".animator");
const colors = ["#04FF00 ", "#F0FF00 ", "#0018B2 ", "#FF01F3", "#FF0101 "];

const figures = () => {
  for (let i = 0; i <= 25; i++) {
    let figure = document.createElement("span");
    let select = Math.round(colors.length * Math.random());

    figure.style.top = innerHeight * Math.random() + "px";
    figure.style.left = innerWidth * Math.random() + "px";
    figure.style.background =
      colors[select >= colors.length ? colors - 1 : select];
    animator.appendChild(figure);
    setInterval(() => {
      figure.style.top = innerHeight * Math.random() + "px";
      figure.style.left = innerWidth * Math.random() + "px";
    }, 5000);
  }
};
figures();
