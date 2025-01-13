var elementosDuvida = document.querySelectorAll('.duvida') // VARIAVEL PARA USAR TODOS OS ELEMENTOS DA CLASSE = .DUVIDA 

elementosDuvida.forEach(function (duvida) { //EXECUTAR UMA FUNÇÃO PARA CADA ELEMENTO DUVIDA
    duvida.addEventListener('click', function (){ //PARA CADA ELEMENTO DUVIDA UM EVENTO DE CLICK
        duvida.classList.toggle('ativa') // RESULTADO DO EVENTO CLICK / TOGGLE = LIGA/DESLIGA TROCAR
    })
})
