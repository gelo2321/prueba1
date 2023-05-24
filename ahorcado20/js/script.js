let acirto = 0;
let errores = 0;
let palabrita = "";
const bmt = document.getElementById('iniciar');
let imag = document.getElementById('imagen');
const btn_letras = document.querySelectorAll('#letras button');
const resultado = document.getElementById('resultado');
const parrafo = document.getElementById("palabra_a_adivinar");
var divAhorcado = document.getElementById("ahorcado");

bmt.addEventListener('click', iniciar);

function iniciar(event) {
  bmt.disabled = true;
  acirto = 0;
  errores = 0;
  parrafo.innerHTML = "";
  const x = palabras.length;
  const y = x;
  const azar = Math.floor(Math.random() * y);
  palabrita = palabras[azar];
  const cant_letras = palabrita.length;
  resultado.innerHTML = "";
  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }

  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = false;
  }
}

for (let i = 0; i < btn_letras.length; i++) {
  btn_letras[i].addEventListener("click", click_letras);
}

function click_letras(event) {
  const span = document.querySelectorAll("#palabra_a_adivinar span");
  const button = event.target;
  button.disabled = true;
  const letra = button.innerHTML.toLowerCase();
  const palabra = palabrita.toLowerCase();

  let acierto = false;

  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      acierto = true;
      span[i].innerHTML = letra;
      acirto++;
    }
  }

  if (acierto == false) {
    errores++;
    const source = `i${errores}.png`;
    imag.src = source;
  }
  

  if (errores == 7) {
    resultado.innerHTML = "Perdiste. La palabra era " + palabrita;
    game_over();
  } else if (acirto == palabrita.length) {
    resultado.innerHTML = "¡Ganaste!";
    game_over();
  }

  console.log(acierto);
}

function game_over() {
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
  }
  bmt.disabled = false;
}
