const productos = ["Harina", "Queso", "Papa", "Carne"];
let listaCompleta = "";

console.log("Al iniciar el programa usted ya tiene cargados estos productos en su lista: " + productos);

function IniciarApp(){
    const opcion = prompt("Lista de Compras:\n 1. Listar Productos\n 2. Agregar Producto\n 3. Eliminar Producto\n4. Terminar\nElija una opción: ");

    MostrarOpciones(opcion);
}

function MostrarOpciones(opcion){
    switch(opcion){
        case "1": 
            let lista = "Lista de Compras:\n";
            for (let i = 0; i < productos.length; i++) {
                lista += productos[i] + "\n";
            }
            alert(lista);

            break;
        case "2": 
            let nombreProducto = prompt("Indique el nombre del producto a agregar: ");
            

            while(nombreProducto){

                productos.push(nombreProducto);

                const continuar = confirm("Desea agregar otro producto? (Aceptar/Cancelar):  ");
                if(!continuar){
                    for(let i = 0; i < productos.length; i++){
                        listaCompleta+= productos[i] + "\n";
                    }

                    alert("Lista de productor Agregados:\n" + listaCompleta);

                    break;
                }

                nombreProducto = prompt("Indique el nombre del producto a agregar: ");
            }

            IniciarApp();
            break;
        case "3":
            let productoAEliminar = prompt("Indique el nombre del producto a eliminar: ");

        while(productoAEliminar){
                productos.pop(productoAEliminar);

                const continuar = confirm("Desea Eliminar otro producto? (Aceptar/Cancelar):  ");
                if(!continuar){
                    for(let i = 0; i < productos.length; i++){
                        listaCompleta+= productos[i] + "\n";
                    }

                    alert("Lista de productor Eliminados:\n" + listaCompleta);

                    break;
                }

                nombreProducto = prompt("Indique el nombre del producto a Eliminar: ");
            }

            IniciarApp();
            break;
        default:
            break;
    }
}

IniciarApp();