const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
console.log(productosEnCarrito);
const carritoVacio = document.querySelector ("#carrito-vacio");
const contenedorCompra = document.querySelector ("#comprado");
const carritoProductos = document.querySelector ("#carrito-productos");
const carritoAcciones = document.querySelector ("#carrito-acciones");
const carritoVaciar = document.querySelector (".carrito-vaciar")
const botonComprar = document.querySelector ("#carrito-acciones-comprar");
let botonesEliminar = document.querySelectorAll (".carrito-eliminar-producto")
const total = document.querySelector (".total");



function cargarProductosCarrito (){

    if (productosEnCarrito && productosEnCarrito.length > 0 ){
        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoVaciar.classList.remove("disabled");
        contenedorCompra.classList.add("disabled");
    
        carritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
    
            <img class="carrito-imagen-producto" src="../assets/imagenes/${producto.img}" alt="">
            <div class="carrito-titulo-producto">
                <small>Producto</small>
                <h3>${producto.nombre}</h3>
            </div>
            <div class="carrito-cantidad-producto">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-precio-producto">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-subtotal-producto">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-eliminar-producto" id=${producto.id}><i class="fa-solid fa-trash"></i></button>
    
            `
    
        carritoProductos.append(div);
        })
            
    }else {
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoVaciar.classList.add("disabled")
        contenedorCompra.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito ();


function actualizarBotonesEliminar (){
    botonesEliminar = document.querySelectorAll (".carrito-eliminar-producto");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex (producto => producto.id === idBoton )
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

}

carritoVaciar.addEventListener ("click", vaciarCarrito)

function vaciarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal (){
    total.innerHTML = "$" + productosEnCarrito.reduce ((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        carritoVacio.classList.add("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoVaciar.classList.add("disabled");
        contenedorCompra.classList.remove("disabled");
}