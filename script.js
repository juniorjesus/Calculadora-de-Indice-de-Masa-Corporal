const indice = document.getElementById("Calcular");
 indice.addEventListener("click", function() {
  calculateIMC();
});
let pesoInput = document.getElementById("peso");
let alturaInput = document.getElementById("altura");
peso.setAttribute("placeholder", "Su peso en Kilogramos");
altura.setAttribute("placeholder", "Su altura en Metros");
function calculateIMC() {
  let peso = pesoInput.value;
  let altura = alturaInput.value;
  let imc = Math.round(peso / (altura * altura));
  let mensaje = "";
  let desc = document.getElementById("desc");

  if (imc < 18.5) {
    mensaje = "Peso Insuficiente";
    document.getElementById("image").src = "img/insuficiente.jpg";
    desc.style.backgroundColor = "#19c9e0";
    desc.innerHTML = imc + " " + mensaje;
  } else if (imc >= 18.5 && imc < 25) {
    mensaje = "Peso Normal";
    document.getElementById("image").src = "img/normal.jpg";
    desc.style.backgroundColor = "#20c926";
    desc.innerHTML = imc + " " + mensaje;
  } else if (imc >= 25 && imc < 30) {
    mensaje = "Sobrepeso";
    document.getElementById("image").src = "img/sobrepeso.jpg";
    desc.style.backgroundColor = "#face0a";
    desc.innerHTML = imc + " " + mensaje;
  } else if (imc >= 30 && imc < 40 ) {
    mensaje = "Obeso";
    document.getElementById("image").src = "img/obeso.jpg";
    desc.style.backgroundColor = "#f51448";
    desc.innerHTML = imc + " " + mensaje;
  } else if (imc >= 40) {
    mensaje = "Obesidad de Alto Riesgo";
    document.getElementById("image").src = "img/obesidad.jpg";
    desc.style.backgroundColor = "#f50509";
    desc.innerHTML = imc + " " + mensaje;
  } 
}
let titleOne = document.getElementById("h1");
titleOne.style.color = "#1FE5D3";
titleOne.style.textAlign = "center";
titleOne.style.marginTop = "2%";

const titles = document.querySelectorAll("li");
console.log(titles);
/*manipulamos nuestra lista de datos*/
titles.forEach((title, i) => {
  title.style.fontSize = "32px";
  title.style.listStyleType = "none";
  if (i === 0) {
    title.style.color = "#19c9e0";
  } else if (i === 1) {
    title.style.color = "#20c926";
  } else if (i === 2) {
    title.style.color = "#face0a";
  } else if (i === 3) {
    title.style.color = "#f51448";
  } else if (i === 4) {
    title.style.color = "#f50509";
  }
});
