/* let PIN = "1234";
let USUARIO = "JavaScript";
//El usuario se registra 
function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let ingresoUsuario = prompt("Ingresa tu Usuario.");
        let ingresoPin = prompt("Ingresa tu PIN.");

        if (ingresoUsuario ===  USUARIO && ingresoPin=== PIN) {
            alert("Ingreso exitoso");
            ingresar = true;
            break;
        } else {
            alert("El usuario y/o la contraseña que ingresaste no son correctos. Por favor intenta de nuevo.");
        }
    }
    return ingresar;
}


//una vez adentro, el usuario puede realizar compras mayoristas
let exito = login();
if (exito) {

let stockTop= 32
let stockCanillita= 25
let stockCalza= 47
let precioUnidad= 3500;

let opcion = prompt("COMPRAS MAYORISTAS \n¿Qué te gustaría comprar? Elegí la opción: \n1- Tops. \n2 - Canillitas. \n3 - Calzas. \nPresioná X para finalizar.");

while (opcion != "X" && opcion != "x") {
    switch (opcion) {
        case "1":
            let tops = prompt("Ingresá cuántos tops querés comprar");

            if (tops <= stockTop && tops >= 5) {
                let pedidoTops = tops * precioUnidad;
                alert("Tu pedido de " + tops + " tops hace un total de $" + pedidoTops);
            } else if (tops < 5){
                alert ("Tu pedido es muy chico. Recuerda que la compra mínima mayorista es de 5 unidades!")
            } else {
                alert("Lo lamentamos, no tenemos stock suficiente para la cantidad que solicitaste.");
            }
            break;
        case "2":
            let canillitas = prompt("Ingresá cuántas canillitas querés comprar");

            if (canillitas <= stockCanillita && canillitas > 5) {
                let pedidoCanillita = canillitas * precioUnidad;
                alert("Tu pedido de " + canillitas + " canillitas hace un total de $" + pedidoCanillita);
            } else if (canillitas < 5){
                alert ("Tu pedido es muy chico. Recuerda que la compra mínima mayorista es de 5 unidades!")
            } else {
                alert("Lo lamentamos, no tenemos stock suficiente para la cantidad que solicitaste.");
            }
            break;
        case "3":
            let calzas = prompt("Ingresá cuántas calzas querés comprar");

            if (calzas <= stockCalza) {
                let pedidoCalza = calzas * precioUnidad;
                alert("Tu pedido de " + calzas + " calzas hace un total de $" + pedidoCalza);
            } else if (calzas < 5){
                alert ("Tu pedido es muy chico. Recuerda que la compra mínima mayorista es de 5 unidades!")
            }else {
                alert("Lo lamentamos, no tenemos stock suficiente para la cantidad que solicitaste.");
            }
            break;
    }
    //condicion de salida del while
    opcion = prompt("COMPRAS MAYORISTAS \n¿Qué te gustaría comprar?: \n1- Tops. \n2 - Canillitas. \n3 - Calzas. \nPresioná X para finalizar.");
} 
} 
    alert("Gracias por su compra!"); 
 */