const productosConteiner = document.getElementById  ('contenedor-productos')
const carritoContenedor = document.getElementById ('carrito-contenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById ('precioTotal')
const carritoVacio = document.getElementById ('vaciarCarrito')
let carrito
const carritoEnLS = JSON.parse( localStorage.getItem('carrito'))

productos.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('prenda')
    div.innerHTML =   `
    <img src=${item.img}> 
    <h3>${item.nombre}</h3>
    <p>Talle: ${item.talle}</p>
    <p class="precioProducto">Precio $${item.precio} </p>
    <button onclick="agregarAlCarrito(${item.id})" class="boton-agregar"> Comprar </i></button>
    `
    productosConteiner.appendChild(div)
})


const agregarAlCarrito = (id) => {
    const item = productos.find ( (prod) => prod.id === id)
    carrito.push(item)
    
    localStorage.setItem ('carrito', JSON.stringify (carrito))
    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const borrarDelCarrito = (id)=> {
const item = carrito.find ((producto)=> producto.id ===id)
const indice = carrito.indexOf (item)
carrito.splice (indice, 1)
console.log (carrito)
renderCarrito()
renderCantidad()
renderTotal()
}

const vaciarCarrito = () => {
    
    carrito = []
    localStorage.setItem ('carrito', JSON.stringify(carrito))
    renderCarrito()
renderCantidad()
renderTotal()
}
carritoVacio.addEventListener ('click',vaciarCarrito)
const renderCarrito = () => { 
    carritoContenedor.innerHTML = ''
    carrito.forEach ((item)=> {
    const div =document.createElement ('div')
    div.classList.add ('productoEnCarrito')
    div.innerHTML = `		  
    <p>${item.nombre}</p>
    <p>Precio $ ${item.precio}</p>
    <button onclick= "borrarDelCarrito(${item.id})" class = "boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `

carritoContenedor.append(div)
})
}
 const renderCantidad =()=> {
    contadorCarrito.innerText = carrito.length
 }
 const renderTotal =() => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })
    precioTotal.innerText = total
 }
 
 if (carritoEnLS) {
    carrito = carritoEnLS

    renderCarrito()
    renderCantidad()
    renderTotal()
} else {
    carrito = []
}