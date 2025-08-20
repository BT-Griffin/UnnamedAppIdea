
var numero1 = 1;

function cambiartexto() {

    if (numero1 != 1) {
        const elemento = document.getElementById("texto") as HTMLElement;
        elemento.innerHTML = "Últimas unidades!";
        ++numero1;
    } else {
        const elemento = document.getElementById("texto") as HTMLElement;
        elemento.innerHTML = "Últimas unidades!";
        numero1 = 1;
    }

 }