(function(){
    'use strict'

    var $bemvindoinit = document.querySelector('.bem-vindo');
    var $rememberinit = document.querySelector('.titulo');
    var $paragradoinit = document.querySelector('.lead');

    $rememberinit.innerHTML = ''
    $paragradoinit.innerHTML = ''


    function typeWriter(word){
        const textoArray = word.innerHTML.split('');
        word.innerHTML = '';
        textoArray.forEach((item, index) => {
            setTimeout(() => {
                word.innerHTML += item;
            }, 100 * index)
        });
    }

    typeWriter($bemvindoinit)

    setTimeout(function(){
       $rememberinit.innerHTML = 'REMENBER'
       typeWriter($rememberinit)
    }, 2000)

    setTimeout(function(){
    $paragradoinit.innerHTML = 'Espero que goste e possa ter a melhor esperiência possivel'
        typeWriter($paragradoinit)
    }, 4000)

})()