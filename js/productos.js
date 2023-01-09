const contenedor = document.querySelector("#productos");
const btnFiltro = document.querySelectorAll("input[type=checkbox]");
const btnFiltrar = document.querySelector ("#btnfiltrar");
const search = document.querySelector ("#search");
const filtroTop= document.querySelector ("#inlineCheckbox1")

const productos = [
    { id: 1, nombre: "top MEXICO", precio: 5800, img: "top1.png", valor: "top"},
    { id: 2, nombre: "top FRANCIA", precio: 5800, img: "top2.png" },
    { id: 3, nombre: "top JAPON", precio: 5800, img: "top3.png" },
    { id: 4, nombre: "top CONGO", precio: 5800, img: "top4.png" },
    { id: 5, nombre: "top AUSTRALIA", precio: 5800, img: "top5.png" },
    { id: 6, nombre: "top PERU", precio: 5800, img: "top6.png" },
    { id: 7, nombre: "canillita CANADA", precio: 3500, img: "canillita1.png.jpeg" },
    { id: 8, nombre: "canillita ESPAÑA", precio: 3500, img: "canillita2.png.jpeg" },
    { id: 9, nombre: "canillita FILIPINAS", precio: 3500, img: "canillita3.png.png" },
    { id: 10, nombre: "canillita TONGA", precio: 3500, img: "canillita4.png" },
    { id: 11, nombre: "canillita NIGERIA", precio: 3500, img: "canillita5.png" },
    { id: 12, nombre: "canillita BRASIL", precio: 3500, img: "canillita6.png.jpeg" },
    { id: 13, nombre: "calza GUATEMALA", precio: 7200, img: "calza1.png" },
    { id: 14, nombre: "calza ITALIA", precio: 7200, img: "calza2.png" },
    { id: 15, nombre: "calza CHINA", precio: 7200, img: "calza3.png" },
    { id: 16, nombre: "calza ARGENTINA", precio: 7200, img: "calza4.png" },
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
                    <a href="">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">$ ${precio}</p>
                        <p class="btn" id="${id}">Comprar <i class="fa-solid fa-bag-shopping"></i></p>
                    </a>
                </div>
            </div>`
        contenedor.innerHTML += html;
    }
}

crearHtml(productos);

//Funciones de filtrado

function filtrarProductos(filtro) {
    let filtrado = productos.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
}

btnFiltrar.onclick = (e)=>{
    e.preventDefault();
    let filtro= filtrarProductos (search.value)
    crearHtml(filtro)
}

//Carrito

/* const carrito= [];

function cargarProductos(arr, producto){
    carrito.push(prompt("ingresa tu compra"));
}

cargarProductos()

console.log(carrito); */

/* function filtrarProductos(top) {
    let filtrado = productos.filter((el) => {
        return el.valor.includes(top);
    });
    return filtrado;
} */

/* let filtradoTop = productos.filter((el) => {
    return el.value.includes(top);
});
console.log(filtradoTop);
 */

/* function filtrarProductos(top) {
if (filtroTop.checked) {
    let filtrado = productos.filter((el) => {
        return el.nombre.includes(top);
    });
    return filtrado;
}}

btnFiltrar.onclick = (e)=>{
    e.preventDefault();
    let filtro= filtrarProductos (top)
    crearHtml(filtro)
}

console.log(filtrarProductos(top));

let checked;
function filtrarProcutos (){
if (filtroTop===checked) {
        return filtro
    }
} */
