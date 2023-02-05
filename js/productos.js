const contenedor = document.querySelector("#productos");
const botonesCategorias = document.querySelectorAll(".form-check-label");
const btnFiltrar = document.querySelector ("#btnfiltrar");
let botonesAgregar = document.querySelectorAll (".btn");
const numero = document.querySelector (".carrito-numero")


const productos = [
    { id: "1", nombre: "top MEXICO", precio: 5800, img: "top1.png", valor: "top", categoria:{nombre: "tops", id: "top"}},
    { id: "2", nombre: "top FRANCIA", precio: 5800, img: "top2.png", categoria:{nombre: "tops", id: "top"} },
    { id: "3", nombre: "top JAPON", precio: 5800, img: "top3.png", categoria:{nombre: "tops", id: "top"} },
    { id: "4", nombre: "top CONGO", precio: 5800, img: "top4.png", categoria:{nombre: "tops", id: "top"} },
    { id: "5", nombre: "top AUSTRALIA", precio: 5800, img: "top5.png", categoria:{nombre: "tops", id: "top"} },
    { id: "6", nombre: "top PERU", precio: 5800, img: "top6.png", categoria:{nombre: "tops", id: "top"} },
    { id: "7", nombre: "canillita CANADA", precio: 3500, img: "canillita1.png.jpeg", categoria:{nombre: "canillitas", id: "canillita"} },
    { id: "8", nombre: "canillita ESPAÑA", precio: 3500, img: "canillita2.png.jpeg", categoria:{nombre: "canillitas", id: "canillita"} },
    { id: "9", nombre: "canillita FILIPINAS", precio: 3500, img: "canillita3.png.png", categoria:{nombre: "canillitas", id: "canillita"} },
    { id: "10", nombre: "canillita TONGA", precio: 3500, img: "canillita4.png", categoria:{nombre: "canillitas", id: "canillita"} },
    { id: "11", nombre: "canillita NIGERIA", precio: 3500, img: "canillita5.png", categoria:{nombre: "canillitas", id: "canillita"} },
    { id: "12", nombre: "canillita BRASIL", precio: 3500, img: "canillita6.png.jpeg", categoria:{nombre: "canillitas", id: "canillita"} },
    { id: "13", nombre: "calza GUATEMALA", precio: 7200, img: "calza1.png", categoria:{nombre: "calzas", id: "calza"} },
    { id: "14", nombre: "calza ITALIA", precio: 7200, img: "calza2.png", categoria:{nombre: "calzas", id: "calza"} },
    { id: "15", nombre: "calza CHINA", precio: 7200, img: "calza3.png", categoria:{nombre: "calzas", id: "calza"} },
    { id: "16", nombre: "calza ARGENTINA", precio: 7200, img: "calza4.png", categoria:{nombre: "calzas", id: "calza"} },
]

//Crear HTML
function crearHtml(array) {
    let html;
    contenedor.innerHTML= "";

    for (const producto of array) {
        const {img, nombre, precio, id}=producto; 
        html =
            `<div class="card galeria wow animate__animated animate__fadeInUp" style="width: 15rem; height: 23rem;">
                <a href="" hover class="fotoprod"><img src="../assets/imagenes/${img}" class="card-img-top" alt="Top rosa con flores"/></a>
                <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">$ ${precio}</p>
                        <button class="btn" id="${id}">Agregar <i class="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>`
        contenedor.innerHTML += html;
    }
    actualizarBotones()
}

crearHtml(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id != "todo") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            crearHtml(productosBoton);
        } else {
            crearHtml(productos);
        }
    })
});



function actualizarBotones (){
    botonesAgregar = document.querySelectorAll (".btn");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumero();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado)
    }
    console.log(productosEnCarrito);

    actualizarNumero()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}


function actualizarNumero (){
    let nuevoNumero = productosEnCarrito.reduce ((acc, producto) => acc + producto.cantidad, 0);
    numero.innerHTML = nuevoNumero
}
