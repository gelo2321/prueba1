function id(str) {
  return document.getElementById(str)
}

function mostrarAhorcado(intentos) {
  var estados = [
    `
       --------
       |      |
       |      O
       |     \\|/
       |      |
       |     / \\
       -
    `,
    `
       --------
       |      |
       |      O
       |     \\|/
       |      |
       |     /
       -
    `,
    `
       --------
       |      |
       |      O
       |     \\|/
       |      |
       |
       -
    `,
    `
       --------
       |      |
       |      O
       |     \\|
       |      |
       |
       -
    `,
    `
       --------
       |      |
       |      O
       |      |
       |      |
       |
       -
    `,
    `
       --------
       |      |
       |      O
       |
       |
       |
       -
    `,
    `
       --------
       |      |
       |
       |
       |
       |
       -
    `
  ];

  return estados[intentos];
}

var intentos = 4;

//divAhorcado.innerHTML = mostrarAhorcado(intentos);
