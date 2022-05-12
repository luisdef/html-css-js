document.addEventListener("DOMContentLoaded", function(event) {
    let container = document.querySelector('#container');
    let body = document.querySelector('body');
    
    container.addEventListener("mouseenter",function(event){
        //A variável event, enviada como parâmetro, refere-se ao evento.
        //target refere-se ao elemento em que o evento ocorreu.
        event.target.innerText = "Entrou";
        event.target.style.backgroundColor = 'blueviolet';
        body.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
    });
    
    container.addEventListener("mouseout",function(event){
        event.target.innerText = "Saiu";
        event.target.style.backgroundColor = 'white';
        body.style.backgroundColor = 'red';
        event.target.style.color = 'blueviolet';
    });
});