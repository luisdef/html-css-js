document.addEventListener("DOMContentLoaded", function(event) {
    let container = document.querySelector('#container');
    
    container.addEventListener("mouseenter",function(event){
        //A variável event, enviada como parâmetro, refere-se ao evento.
        //target refere-se ao elemento em que o evento ocorreu.
        event.target.innerText = "Entrou";
        event.target.style.backgroundColor = 'blueviolet';
        event.target.style.color = 'white';
    });
    
    container.addEventListener("mouseout",function(event){
        event.target.innerText = "Saiu";
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'blueviolet';
    });
});