const contenedor = document.querySelector('#morty')
const btnAnterior = document.querySelector('#anterior')
const btnSiguiente = document.querySelector('#siguiente')

let id = 1

const llamarPokemon = ()=>{
fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(response => response.json ())
.then(data => {
    const {name, sprites: {front_default: img} } = data
    morty.innerHTML = `

    
    <p>${name}</p>
    <img src= ${img} alt=${name}/>
 
    `;
})

}
btnSiguiente.addEventListener ('click', ()=> {
    id++ 
    llamarPokemon ()
})
btnAnterior.addEventListener ('click', ()=> {
    id--
    llamarPokemon ()
})
llamarPokemon ()

let usuario
const usuarioLS = sessionStorage.getItem ('user')
if  (usuarioLS){
    usuario = usuarioLS
}else{
    usuario = prompt ("Ingrese su nombre ")
    sessionStorage.setItem ('user', usuario)
}
const saludo = document.getElementById ("saludoUsuario")
saludo.innerText = `¡Hola ${usuario}!`


