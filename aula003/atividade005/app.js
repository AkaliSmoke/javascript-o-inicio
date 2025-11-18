// criar 2 arrays, um com as fotos e outro com o nome
// relacionar a foto com o nome e com o número
let nomes = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran', 'Nidorina', 'Nidoqueen']
let fotos = [
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png'
]

let indice = 0
document.getElementById("pokemon_foto").src = fotos[indice]
document.getElementById("pokemon_nome").innerText = nomes[indice]
document.getElementById("pokemon_numero").innerText = indice+1

function fnPesquisarNumero(){
    let pokemon_procurado = document.getElementById("pokemon_procurado").value
    document.getElementById("pokemon_foto").src = fotos[pokemon_procurado - 1]
    document.getElementById("pokemon_nome").innerText = nomes[pokemon_procurado - 1]
    document.getElementById("pokemon_numero").innerText = pokemon_procurado
}

function fnProximo(){
    if(indice < nomes.length - 1){
    indice = indice + 1
    document.getElementById("pokemon_foto").src = fotos[indice]
    document.getElementById("pokemon_nome").innerText = nomes[indice]
    document.getElementById("pokemon_numero").innerText = indice + 1
    }
}

function fnAnterior(){
    if(indice > nomes.length - 1){
    indice = indice - 1
    document.getElementById("pokemon_foto").src = fotos[indice]
    document.getElementById("pokemon_nome").innerText = nomes[indice]
    document.getElementById("pokemon_numero").innerText = indice + 1
    }
}