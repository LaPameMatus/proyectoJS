const mensaje = document.getElementById("p-1");

function enviar() {
  let nombre = document.getElementById("nombre").value;
  let mail = document.getElementById("mail").value;
  let cel = document.getElementById("cel").value;
  console.log(nombre);
  console.log(mail);
  console.log(cel);
  let cartel = "Enviamos su Información, Muchas Gracias";

  alert(cartel);
}
