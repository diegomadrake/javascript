//getAttribute - Obter o valor do atributo (valor da linha)

//setAttribute - definir ou modificar o valor 

function changeImage() {
    const img = document.getElementById('myImage'); //aqui conseguimos armazenar o conteudo da imagem

    const currentSrc = img.getAttribute ("src"); // aqui pegamos o atributo src da imagem para trabalhar a troca da mesma.
    
if (currentSrc === 'lobão.webp') {
    //se a origem atual da imagem for igual a 'xamp.png' execute algo.
    img.setAttribute( "src", "lobão1.jpg") // usando a SetAttributes vamos modificar o valor dela,através do src e especificando a outra img.
    
    img.setAttribute("alt", "Imagem Github");

} else { // caso contrário faça o processo inverso 
    img.setAttribute("src", "lobão.webp");
    
    img.setAttribute("alt", "Imagem Xampp");

}


}

