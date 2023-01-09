const nombre = document.querySelector ("#inputNombre");
apellido = document.querySelector ("#inputApellido")
email = document.querySelector ("#inputMail")
texto = document.querySelector ("#inputTexto")
enviar = document.querySelector ("#enviar")

let mensajes;

if (localStorage.getItem("mensajes")){
    mensajes= JSON.parse (localStorage.getItem("mensajes"))
}else{
    mensajes=[];
}

class Mensaje {
    constructor (nombre, apellido, email, texto){
        this.nombre= nombre;
        this.apellido= apellido;
        this.email= email;
        this.texto= texto;
    }
}

function limpiarCampos () {
    nombre.value="";
    apellido.value="";
    email.value="";
    texto.value="";
}

function guardarMensaje (mensaje){
    return mensajes.push(mensaje)
}


function guardarEnLS (elemento){
    return localStorage.setItem("mensajes", JSON.stringify(elemento))
}


enviar.addEventListener("click", (e)=>{
    e.preventDefault()

    let mensajeNuevo= new Mensaje (nombre.value, apellido.value, email.value, texto.value);
    limpiarCampos();
    document.querySelector ("#gracias").innerHTML= "Gracias por su consulta!"

    guardarMensaje (mensajeNuevo);
    guardarEnLS (mensajes);
    console.log(mensajes);
}
)