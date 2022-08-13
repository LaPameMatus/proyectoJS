correctas = [3, 1, 2, 2, 3];

//arreglo donde se guardan las repuestas del usuario}
opcion_elegida = [];
cantidad_correctas = 0;
//funcion que toma el num de preg y el imput elegido de esa pregunta
function repuesta(num_pregunta, seleccionada) {
  //guardo la rep elegida
  opcion_elegida[num_pregunta] = seleccionada.value;
  // el siguiente codigo es para poner el color en blanco
  //el fondo de los inputs para cuando elige otra ocpcion
  //armo el id para seleccionar el section correspondiente
  id = "p" + num_pregunta;
  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";
  //doy el color a label seleccionado
  seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

// funcion que compara los arreglos para saber cuantas estuvieran correctas
function corregir() {
  cantidad_correctas = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
    }
  }

  document.getElementById("resultado").innerHTML = cantidad_correctas;
}

// fondo
const animator = document.querySelector(".animator");
const colors=['#604d8a ', '#025573 ','#7a5587 ',];

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
    }, 2500);
  }
};
figures();
