function mostrarResultado(resultado){
    document.querySelector("#resultado").value = resultado;
}

function suma() {
    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;
    mostrarResultado(num1 + num2);
}

function resta() {
  let num1 = +document.querySelector("#num1").value;
  let num2 = +document.querySelector("#num2").value;
  mostrarResultado(num1 - num2);
}

function multiplicar() {
  let num1 = +document.querySelector("#num1").value;
  let num2 = +document.querySelector("#num2").value;
  mostrarResultado(num1 * num2);
}

function dividir() {
  let num1 = +document.querySelector("#num1").value;
  let num2 = +document.querySelector("#num2").value;
  mostrarResultado(num1 / num2);
}

function raiz() {
  let num = +document.querySelector("#num2").value;
  mostrarResultado(Math.sqrt(num));
}

function potencia() {
  let num1 = +document.querySelector("#num1").value;
  let num2 = +document.querySelector("#num2").value;
  mostrarResultado(Math.pow(num1, num2));
}

function absoluto() {
  let num = +document.querySelector("#num2").value;
  mostrarResultado(Math.abs(num));
}

function aleatorio() {
  let min = +document.querySelector("#num1").value;
  let max = +document.querySelector("#num2").value;
  max = max + 1;
  mostrarResultado(Math.floor(Math.random() * (max - min) + min));
}

function redondeo() {
  let resultado = +document.querySelector("#resultado").value;
  mostrarResultado(Math.round(resultado));
}

function techo() {
  let resultado = +document.querySelector("#resultado").value;
  mostrarResultado(Math.ceil(resultado));
}

function piso() {
  let resultado = +document.querySelector("#resultado").value;
  mostrarResultado(Math.floor(resultado));
}