let productos = JSON.parse(localStorage.getItem("productos")) || ["Harina", "Queso", "Papa", "Carne"];
let listaCompleta = "";
let modo = "listar";
const resultadoListarProductos = document.getElementById('resultadoListarProductos');
const botonListar = document.getElementById("listarProductos");
const botonAgregar = document.getElementById("agregarProductos");
const botonEliminar = document.getElementById("eliminarProductos");

function IniciarApp(){
    
    //LISTA DE PRODUCTOS

    botonListar.addEventListener("click",  () => {
        modo = "listar";
        mostrarLista();
    })

    //AGREGAR A PRODUCTOS

    botonAgregar.addEventListener("click", ()=> {
        const titulo = document.createElement("h3");
        titulo.classList.add("titulo-prodNuevo");
        titulo.textContent = "Producto a Agregar";

        const inputProducto = document.createElement('INPUT');

        resultadoListarProductos.textContent = ""; 
        resultadoListarProductos.appendChild(titulo);
        resultadoListarProductos.appendChild(inputProducto);

        const btnAgregar = document.createElement('BUTTON');
        btnAgregar.classList.add("btnAgregar");
        btnAgregar.textContent = 'Agregar'

        resultadoListarProductos.appendChild(btnAgregar);

        btnAgregar.onclick = function () {
        const valor = inputProducto.value.trim();
        const productoMsg = document.createElement("p");

        if (valor === "") {
            productoMsg.classList.add("titulo-productoVacio");
            productoMsg.textContent = "No se agregó producto a la lista.";
        }
        else if (productos.includes(valor)) {
            productoMsg.classList.add("titulo-productoVacio");
            productoMsg.textContent = "El producto que quiere agregar ya existe.";
        }
        else {
            productos.push(valor);
            guardarProductos();

            productoMsg.classList.add("titulo-productoAgregado");
            productoMsg.textContent = "Se agregó correctamente.";
        }

        resultadoListarProductos.appendChild(productoMsg);

        setTimeout(() => {
            productoMsg.remove();
        }, 3000);
    };
    })

    //ELIMINAR PRODUCTOS
    
    botonEliminar.addEventListener("click", ()=> {
        const titulo = document.createElement("h3");
        titulo.classList.add("titulo-prodEliminado");
        titulo.textContent = "Producto a Eliminar:";
        resultadoListarProductos.innerHTML = "";
        resultadoListarProductos.appendChild(titulo);

        modo = "eliminar"
        mostrarLista();
    })
}

function mostrarLista() {
    resultadoListarProductos.innerHTML = "";

    resultadoListarProductos.innerHTML += modo === "eliminar"
        ? `<h3 class="titulo-lista">Productos a Eliminar:</h3>`
        : `<h3>Lista de Productos:</h3>`;

    const ul = document.createElement("ul");

    for (let i = 0; i < productos.length; i++) {
        const li = document.createElement("li");
        li.textContent = productos[i];

        if (modo === "eliminar") {
            li.style.cursor = "pointer";

            li.onclick = () => {
                productos.splice(i, 1);
                guardarProductos(); 
                mostrarLista();
            };
        }

        ul.appendChild(li);
    }

    resultadoListarProductos.appendChild(ul);
}

function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

IniciarApp();