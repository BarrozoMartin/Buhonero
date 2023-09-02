// PRODUCTOS
const productos = [
    // electronica
    {
        id: "Electronica",
        titulo: "Disco Solido",
        imagen: "./img/productos/electronica/disco-solido.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 48400
    },
    {
        id: "Electronica",
        titulo: "Monitor",
        imagen: "./img/productos/electronica/Monitor.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 81400
    },
    {
        id: "Electronica",
        titulo: "Notebook",
        imagen: "./img/productos/electronica/notebook.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 1300500
    },    
    {
        id: "Electronica",
        titulo: "Pasta Termica",
        imagen: "./img/productos/electronica/pasta-termica.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 5300
    },   
    {
        id: "Electronica",
        titulo: "Placa Madre",
        imagen: "./img/productos/electronica/placa-madre.png",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 316800
    },   
    {
        id: "Electronica",
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
        id: "Farmacia",
        titulo: "Acondicionador Sedal",
        imagen: "./img/productos/farmacia/sedal.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 1050
    },
    {
        id: "Farmacia",
        titulo: "Cauterizacion Reparadora",
        imagen: "./img/productos/farmacia/cauterizacion-reparadora.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 1930
    },
    {
        id: "Farmacia",
        titulo: "Chester ICE",
        imagen: "./img/productos/farmacia/chester-ICE.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 2950
    },
    {
        id: "Farmacia",
        titulo: "Crema para despues de afeitar",
        imagen: "./img/productos/farmacia/dermaglos-after-shave.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 3060
    },
    {
        id: "Farmacia",
        titulo: "Jabon Rexona",
        imagen: "./img/productos/farmacia/jabon-rexona.png",
        categoria: {
            nombre: "Farmacia",
            id: "farmacia"
        },
        precio: 300
    },
    {
        id: "Farmacia",
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
        id: "Ferreteria",
        titulo: "Hidrolavadora",
        imagen: "./img/productos/ferreteria/Hidrolavadora.png",
        categoria: {
            nombre: "Ferreteria",
            id: "ferreteria"
        },
        precio: 230000
    },
    {
        id: "Ferreteria",
        titulo: "Taladro",
        imagen: "./img/productos/ferreteria/taladro.png",
        categoria: {
            nombre: "Ferreteria",
            id: "ferreteria"
        },
        precio: 60000
    },
    {
        id: "Ferreteria",
        titulo: "Morsa de Banco",
        imagen: "./img/productos/ferreteria/morsa-banco.png",
        categoria: {
            nombre: "Ferreteria",
            id: "ferreteria"
        },
        precio: 100000
    },
    {
        id: "Ferreteria",
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
        id: "Indumentaria",
        titulo: "Campera 01",
        imagen: "./img/productos/indumentaria/campera01.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1000
    },
    {
        id: "Indumentaria",
        titulo: "Campera 02",
        imagen: "./img/productos/indumentaria/campera02.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1200
    },
    {
        id: "Indumentaria",
        titulo: "Campera 03",
        imagen: "./img/productos/indumentaria/campera03.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1500
    },
    {
        id: "Indumentaria",
        titulo: "Campera 04",
        imagen: "./img/productos/indumentaria/campera04.jpg",
        categoria: {
            nombre: "Indumentaria",
            id: "indumentaria"
        },
        precio: 1300
    },
    {
        id: "Indumentaria",
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
        id: "Indumentaria",
        titulo: "Slipknot 01",
        imagen: "./img/productos/indumentaria/remera01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 900
    },
    {
        id: "Indumentaria",
        titulo: "Slipknot 02",
        imagen: "./img/productos/indumentaria/remera02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 800
    },
    {
        id: "Indumentaria",
        titulo: "Slipknot 03",
        imagen: "./img/productos/indumentaria/remera03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 700
    },
    {
        id: "Indumentaria",
        titulo: "Slipknot 04",
        imagen: "./img/productos/indumentaria/remera04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 700
    },
    {
        id: "Indumentaria",
        titulo: "Slipknot 05",
        imagen: "./img/productos/indumentaria/remera05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 850
    },
    {
        id: "Indumentaria",
        titulo: "Slipknot 06",
        imagen: "./img/productos/indumentaria/remera06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 950
    },
    {
        id: "Indumentaria",
        titulo: "Slipknot 07",
        imagen: "./img/productos/indumentaria/remera07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 750
    },
    {
        id: "Indumentaria",
        titulo: "Slipknot 08",
        imagen: "./img/productos/indumentaria/remera08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "indumentaria"
        },
        precio: 750
    },
     // Pantalones
     {
        id: "Indumentaria",
        titulo: "Pantalón 01",
        imagen: "./img/productos/indumentaria/pantalon01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "indumentaria"
        },
        precio: 3000
    },
    {
        id: "Indumentaria",
        titulo: "Pantalón 02",
        imagen: "./img/productos/indumentaria/pantalon02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "indumentaria"
        },
        precio: 2500
    },
    {
        id: "Indumentaria",
        titulo: "Pantalón 03",
        imagen: "./img/productos/indumentaria/pantalon03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "indumentaria"
        },
        precio: 3500
    },
    {
        id: "Indumentaria",
        titulo: "Pantalón 04",
        imagen: "./img/productos/indumentaria/pantalon04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "indumentaria"
        },
        precio: 4500
    },
    {
        id: "Indumentaria",
        titulo: "Pantalón 05",
        imagen: "./img/productos/indumentaria/pantalon05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "indumentaria"
        },
        precio: 5500
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelectorAll("#titulo-principal")

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
}

cargarProductos(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

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