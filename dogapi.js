'use strict'

//função pura
async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()
    
    return data.message
}


function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link

    galeria.appendChild(novaImg)

}

async function preencherFotos (){
    const raca = document.getElementById('raca').value  
    const fotos = await pesquisarFotos(raca)
    const galeria = document.getElementById('galeria')
    

    //como fazert as imagens carregar sem ficar uma embaixo da outra



    galeria.replaceChildren('')
    fotos.forEach(criarImagem)
    console.log(fotos)
}

document.getElementById('pesquisar')
        .addEventListener('click', preencherFotos)