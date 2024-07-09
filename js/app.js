const contenedorAlojamientos = document.getElementById("contenedorAlojamientos")
const checkout = document.getElementById("contenedorCheckout")
const contenedorBeneficios = document.getElementById("contenedorBeneficios")
const buscador = document.getElementById("buscador")
const carrito = []



function retornarAlojamientos(obj) {
    return `  <div class="card text-center original-box-shadow col">
    <div class="card-header">
    <h4 class="pt-2">${obj.tipo}</h4>    
    </div>
    <div class="card-body">
    <h5 class="card-title">${obj.nombre}</h5>
    <p class="card-text">${obj.descripcion}</p>
    <div class="mt-2">
    <button id="${obj.id}" type="button" class="btn btn-success btnReservar original-box-shadow">Reservar</button>
    </div>
    </div>
    <div class="card-footer text-body-secondary">
    <p>${obj.huespedes} huespedes capacidad maxima</p>
    <p>${obj.telefono} </p>
    <p>U$${obj.precio} por noche</p>
    </div>
    </div>`
}

function retornarBeneficios(obj) {
    return `<div class="card text-bg-light mb-3"">
                        <div class="card-header">${obj.nombre}</div>
                        <div class="card-body">
                        <h5 class="card-title">${obj.rubro}</h5>
                        <p class="card-text">${obj.descuento}</p>
                        <p class="card-text">${obj.telefono}</p>
                        <p class="card-text">${obj.direccion}</p>
                        <button type="button" class="btn btn-success">Contactar</button>
                        </div>
                        </div>`

}



function retornarCardError() {
    return `<div class="card">
            <div class="card-body">
            <h3 class=" text-center">😢 Hay un error, no se puede cargar el contenido, intentalo más tarde.</h3>
            </div>
            </div>`
}

function cargarAlojamiento(array) {
    if (array.length > 0) {
        contenedorAlojamientos.innerHTML = ""
        array.forEach((elm) => {
            contenedorAlojamientos.innerHTML += retornarAlojamientos(elm)
        })
        cargarCarrito()
        // activarEventosClick()
        // carrito.length > 0 && actualizarTotalCarrito()
    } else {
        contenedorAlojamientos.innerHTML = retornarCardError()
    }

}

function cargarBeneficios(array) {
    if (array.length > 0) {
        contenedorBeneficios.innerHTML = ""
        array.forEach((elm) => {
            contenedorBeneficios.innerHTML += retornarBeneficios(elm)
        })
        // activarEventosClick()
        // carrito.length > 0 && actualizarTotalCarrito()
    } else {
        contenedorBeneficios.innerHTML = retornarCardError()
    }
}

function mostrarAlerta(texto, direccion) {
    Toastify({
        text: texto,
        duration: 3000,
        destination: direccion,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(90deg, rgba(0,36,24,0.9473039215686274) 0%, rgba(33,204,67,1) 44%)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

function cargarCarrito() {

    const reservar = document.querySelectorAll("button.btnReservar")

    if (reservar.length > 0) {
        reservar.forEach((elm) => {
            elm.addEventListener("click", () => {
                const reservaElegida = alojamientos.find((elemento) => elemento.id == elm.id)
                carrito.push(reservaElegida)
                mostrarAlerta("Alojamiento cargado al carrito", "./checkout.html")
                localStorage.setItem("carritoCompras", JSON.stringify(carrito))
            })
        })
    }
    reservar.length === 0 && retornarCardError()

}

buscador.addEventListener("keyup", (event) => {

    if (event.key === "Enter") {
        let buscar = alojamientos.filter((elm) => elm.nombre.toLocaleLowerCase().includes(buscador.value.toLocaleLowerCase()))
        cargarAlojamiento(buscar)
        console.table(buscar)
        buscador.value = ""

    }

})


cargarAlojamiento(alojamientos)
cargarBeneficios(locales)
