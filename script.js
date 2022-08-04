const h1 = document.querySelector("h1");
const form =document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues); // al estar dentro de un formulario, usamos el form, y el evento no es click, es submit, porque el formulario interpreta el último botón como un submit siempre.

function sumarInputValues(event) { // debemos darle el parámetro event
    event.preventDefault(); // esto nos evita que se recarge la página de forma instantánea
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}