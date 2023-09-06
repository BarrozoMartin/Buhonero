//  array de todos los Productos
const productos = [
    // electronica
    {
        id: "disco Solido",
        titulo: "Disco Solido",
        imagen: "./img/productos/electronica/disco-solido.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 48400
    },
    {
        id: "monitor",
        titulo: "Monitor",
        imagen: "./img/productos/electronica/Monitor.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 81400
    },
    {
        id: "notebook",
        titulo: "Notebook",
        imagen: "./img/productos/electronica/notebook.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 1300500
    },    
    {
        id: "pasta-termica",
        titulo: "Pasta Termica",
        imagen: "./img/productos/electronica/pasta-termica.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 5300
    },   
    {
        id: "placa-madre",
        titulo: "Placa Madre",
        imagen: "./img/productos/electronica/placa-madre.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 316800
    },   
    {
        id: "vga-nvidia",
        titulo: "Vga Nvidia",
        imagen: "./img/productos/electronica/tarjeta-grafica.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 255200
    },

    // Farmacia
    {
        id: "sedal",
        titulo: "Acondicionador Sedal",
        imagen: "./img/productos/farmacia/sedal.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 1050
    },
    {
        id: "caute-reparadora",
        titulo: "Cauterizacion Reparadora",
        imagen: "./img/productos/farmacia/cauterizacion-reparadora.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 1930
    },
    {
        id: "chester-ice",
        titulo: "Chester ICE",
        imagen: "./img/productos/farmacia/chester-ICE.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 2950
    },
    {
        id: "crema-afeitar",
        titulo: "Crema para despues de afeitar",
        imagen: "./img/productos/farmacia/dermaglos-after-shave.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 3060
    },
    {
        id: "jabon-rexona",
        titulo: "Jabon Rexona",
        imagen: "./img/productos/farmacia/jabon-rexona.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 300
    },
    {
        id: "colbert",
        titulo: "Colbert",
        imagen: "./img/productos/farmacia/colbert.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 3490
    },

    // Ferreteria
    {
        id: "hidro",
        titulo: "Hidrolavadora",
        imagen: "./img/productos/ferreteria/Hidrolavadora.png",
        categoria: {
            nombre: "Ferreteria",
            id: "ferreteria"
        },
        precio: 230000
    },
    {
        id: "taladro",
        titulo: "Taladro",
        imagen: "./img/productos/ferreteria/taladro.png",
        categoria: {
            nombre: "Ferreteria",
            id: "ferreteria"
        },
        precio: 60000
    },
    {
        id: "morsa",
        titulo: "Morsa de Banco",
        imagen: "./img/productos/ferreteria/morsa-banco.png",
        categoria: {
            nombre: "Ferreteria",
            id: "ferreteria"
        },
        precio: 100000
    },
    {
        id: "sierra",
        titulo: "Sierra Sensitiva",
        imagen: "./img/productos/ferreteria/sierra-sensitiva.png",
        categoria: {
            nombre: "Ferreteria",
            id: "ferreteria"
        },
        precio: 190000
    },
            //Indumentaria
    // Camperas
    {
        id: "campera-01",
        titulo: "Campera 01",
        imagen: "./img/productos/indumentaria/campera01.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1000
    },
    {
        id: "campera-02",
        titulo: "Campera 02",
        imagen: "./img/productos/indumentaria/campera02.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1200
    },
    {
        id: "campera-03",
        titulo: "Campera 03",
        imagen: "./img/productos/indumentaria/campera03.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1500
    },
    {
        id: "campera-04",
        titulo: "Campera 04",
        imagen: "./img/productos/indumentaria/campera04.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1300
    },
    {
        id: "campera-05",
        titulo: "Campera 05",
        imagen: "./img/productos/indumentaria/campera05.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1600
    },
    // Remeras
    {
        id: "remera-01",
        titulo: "Remeras de Slipknot 01",
        imagen: "./img/productos/indumentaria/remera01.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 900
    },
    {
        id: "remera-02",
        titulo: "Remeras de Slipknot 02",
        imagen: "./img/productos/indumentaria/remera02.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 800
    },
    {
        id: "remera-03",
        titulo: "Remeras de Slipknot 03",
        imagen: "./img/productos/indumentaria/remera03.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 700
    },
    {
        id: "remera-04",
        titulo: "Remeras de Slipknot 04",
        imagen: "./img/productos/indumentaria/remera04.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 700
    },
    {
        id: "remera-05",
        titulo: "Remeras de Slipknot 05",
        imagen: "./img/productos/indumentaria/remera05.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 850
    },
    {
        id: "remera-06",
        titulo: "Remeras de Slipknot 06",
        imagen: "./img/productos/indumentaria/remera06.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 950
    },
    {
        id: "remera-07",
        titulo: "Remeras de Slipknot 07",
        imagen: "./img/productos/indumentaria/remera07.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 750
    },
    {
        id: "remera-08",
        titulo: "Remeras de Slipknot 08",
        imagen: "./img/productos/indumentaria/remera08.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 750
    },
     // Pantalones
     {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/productos/indumentaria/pantalon01.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 3000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/productos/indumentaria/pantalon02.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 2500
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/productos/indumentaria/pantalon03.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 3500
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/productos/indumentaria/pantalon04.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 4500
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/productos/indumentaria/pantalon05.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 5500
    }
]

// seleccionar los elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")


// función para cargar productos en el contenedor
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `

        contenedorProductos.append(div)
    })

    actualizarBotonesAgregar()
}

cargarProductos(productos) // al iniciar la pagina se carguen todos los productos 

// asociando las categorias con evento click
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        // el filtrado de categorias y se cambia el titulo segun el filtro elegido
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }

    })
})
// funcion para actualizar los botones (si vas cambiando entre los filtros) y no generar probelmas
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}
// array para almacenar los productos en el carrito
const productosEnCarrito = []

// función para agregar un producto al carrito
function agregarAlCarrito(e) {
    
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }
    
    actualizarNumerito()
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}


// Función para actualizar el numerito del carrito a medidas que se van sumandos productos al carrito
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}
