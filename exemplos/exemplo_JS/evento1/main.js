//Adicionamos o evento DOMContentLoaded para que nosso código seja executado apenas após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function(event) {
    //A variável botão irá receber o elemento button
    const botao = document.querySelector('button');
    //Adicionamos um evento de click no button
    botao.addEventListener("click",function(){
        //Quando clicamos no botão, o código abaixo será executado
        alert("Você clicou no botão!!");
        console.log("Você clicou no botão!!")
    });
});

/**
 *  Podemos utilizar:
 *  querySelector = para pegar o primeiro elemento que atenda ao parâmetro (recomendado)
 *  querySelectorAll = para retornar uma lista com todos elementos que atendam ao parâmetro (recomendado)
 *  getElementsByClassName = para retornar uma lista com elementos com determinada class
 *  getElementsByTagName = para retornar uma lista com elementos de determinada tag
 *  getElementById = para retornar elemento com detemrinado id
 */