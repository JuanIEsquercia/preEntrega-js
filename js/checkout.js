const cuerpoCarrito=document.getElementById("cuerpoCarrito")
const compra=JSON.parse(localStorage.getItem("carritoCompras")) || []
const totalCarrito=document.getElementById("totalCarrito") 

function carritoCompra(array){
    return `<tr class="text-center">
                <th scope="row" title="Nombre del alojamiento">${array.nombre}</th>
                <td title="Capacidad de huespedes">${array.huespedes}</td>
                <td title="Precio estimado por noche">$${array.precio}</td>
                <td title="Eliminar alojamiento">❌</td>
            </tr>`
}

function totalCompra(array){

    if(array.length > 0) {
    let precioFinal= array.reduce((acc, elm)=> acc + elm.precio, 0)
    totalCarrito.textContent= `${precioFinal}`
}
    else if(array.length <=0){
        totalCarrito.textContent= ` 0`
    }
}

function cargarCompra(array) {
    if (array.length > 0) {
        cuerpoCarrito.innerHTML= ""
        array.forEach((elm) => {
            cuerpoCarrito.innerHTML += carritoCompra(elm)
        }
    )
    }
}



cargarCompra(compra)
totalCompra(compra)

