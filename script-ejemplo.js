const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "Patito <br> feo";
h1.innerText = "Patito <br> feo";
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");
// h1.classList.toggle("verde");
// h1.classList.contains("verde");

input.value = "456";

const img = document.createElement("img"); // creamos una constante para una imagen
img.setAttribute("src", "https://images.pexels.com/photos/8230825/pexels-photo-8230825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); // le asignamos un atributo src

pid.append(img); // lo agregamos a la id pid
