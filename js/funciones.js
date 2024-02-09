//funciones matematicas
// script.js

function sumar() {
    getResult((a, b) => a + b);
  }
  
  function restar() {
    getResult((a, b) => a - b);
  }
  
  function multiplicar() {
    getResult((a, b) => a * b);
  }
  
  function dividir() {
    getResult((a, b) => a / b);
  }
  
  function potencia() {
    getResult((a, b) => Math.pow(a, b));
  }
  
  function raizCuadrada() {
    getResult((a, b) => Math.sqrt(a));
  }
  
  function seno() {
    getResult((a, b) => Math.sin(a));
  }
  
  function coseno() {
    getResult((a, b) => Math.cos(a));
  }
  
  function tangente() {
    getResult((a, b) => Math.tan(a));
  }
  
  function logaritmo() {
    getResult((a, b) => Math.log(a));
  }
  
  function getResult(operation) {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var result = operation(num1, num2);
    alert("El resultado es: " + result);
  }
  