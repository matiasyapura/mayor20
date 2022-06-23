let btnEnv = document.getElementById("btnEnviar");

let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");

rotulo.innerHTML =
  "Escriba el número que desea verificar si es mayor o no a 20: ";

btnEnv.addEventListener("click", () => {
  let nroDeseado: number = Number(dato.value);

  if (nroDeseado > 20) {
    console.log("El número: " + nroDeseado + " es mayor a 20");
  } else {
    console.log("El número: " + nroDeseado + " es menor o igual a 20");
  }
});
