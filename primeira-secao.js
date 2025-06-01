const btnEfeito = document.querySelector('a[class]')

function inserirEfeito() {
    btnEfeito.classList.toggle('sombra-butao')
}

btnEfeito.addEventListener("click", inserirEfeito)



