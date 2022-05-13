document.addEventListener("DOMContentLoaded", function(event) {
    var adiciona = document.querySelector('.add')
    
    adiciona.addEventListener('click',function(e){
        
        conteudo = document.querySelector('input');
        
        lista = document.querySelector('ul');
        
        // Aqui criamos um novo elemento, de tag LI
        item = document.createElement('li');
        
        // Criamos então um texto, com o que foi digitado pelo usuário  
        texto = document.createTextNode(conteudo.value)
        
        // Inserimos o texto dentro do li criado
        item.appendChild(texto);
        
        // Adicionamos o LI dentro da lista
        lista.appendChild(item);
        
        conteudo.value='';
    });
});
