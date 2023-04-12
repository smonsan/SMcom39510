const valorComboBaseHamburguesa = 1800;
const valorRegular = 0;
const valorUpgradeMediano = 200;
const valorUpgradeGrande = 400;
let cantidadcombosHamburguesa = 0;
let agrandarCombo = " ";
let tamanoCombo = " ";
let costoTotalPedido = 0;
const tiempoPreparacion = 4;
let tiempoPreparacionTotal = 0;

function calcularCostoPedido() {

    //pedimo info al usuario
    cantidadcombosHamburguesa = parseInt(prompt("Por favor indique la cantidad de Combo Hamburguesas a agregar a su pedido: "));

    agrandarCombo = prompt("Desea Agrandar su Combo? indique SI o NO");
    while (agrandarCombo !== "SI" && agrandarCombo !== "NO") {
        agrandarCombo = prompt("Desea Agrandar su Combo? indique SI o NO");
    }
    if (agrandarCombo === "SI") {
        tamanoCombo = prompt("a que tamaño desea agrandar su combo:(elija Mediano o Grande)");
        while (tamanoCombo !== "Mediano" && tamanoCombo !== "Grande") {
            tamanoCombo = prompt("a que tamaño desea agrandar su combo:(elija Mediano o Grande)");
        }
        switch (tamanoCombo) {
            case "Mediano":
                tamanoCombo = valorUpgradeMediano;
                break;
            case "Grande":
                tamanoCombo = valorUpgradeGrande;
                break;
            default:
                alert("por favor ingrese un tamaño valido");
        }
    } else if (agrandarCombo === "NO") {
        tamanoCombo = valorRegular;
    }

    costoTotalPedido = valorComboBaseHamburguesa * cantidadcombosHamburguesa + tamanoCombo;
    tiempoPreparacionTotal = cantidadcombosHamburguesa * tiempoPreparacion;

    alert("el costo total de su pedido es de $ " + costoTotalPedido + " y tiempo de preparado de pedido es " + tiempoPreparacionTotal + " min");
}

calcularCostoPedido();

