// /* MENU PRINCIPAL MOBILE */
// $(document).ready(function(){
//     $('.button-collapse').sideNav();
// });

// MENU MOBILE



//MODAL
function iniciaModal(modalID){
    const modal = document.getElementById(modalID)
    if(modal){
    modal.classList.add('mostrar')
    modal.addEventListener('click', (event) =>{
        if(event.target.id == modalID || event.target.className == 'fechar') {
            modal.classList.remove('mostrar')
        }
    })
    }
}

const treinamento = document.getElementById('treinamento--selecao__modal')
treinamento.addEventListener('click', () => {
    iniciaModal('modal-treinamento')
})

const analise = document.getElementById('analise__modal')
analise.addEventListener('click', () =>{
    iniciaModal('modal-analise')
})

const headHunter = document.getElementById('head__modal')
headHunter.addEventListener('click', () =>{
    iniciaModal('modal-head__hunter')
})

const palestras = document.getElementById('palestra__modal')
palestras.addEventListener('click', () =>{
    iniciaModal('modal-palestra')
})

const testeVocacional = document.getElementById('teste__modal')
testeVocacional.addEventListener('click', () =>{
    iniciaModal('modal-teste')
})

const entrevista = document.getElementById('simulador__modal')
entrevista.addEventListener('click', () =>{
    iniciaModal('modal-entrevista')
})













// Efeito Scroll de Rolagem
let servico = document.querySelector('#servicos')
servico.addEventListener('click', ()=> {
    window.scroll({
        top: 570,
        left: 0,
        behavior: 'smooth'
    })
})

let sobre = document.querySelector('#sobre')
sobre.addEventListener('click', ()=> {
    window.scroll({
        top: 1500,
        left: 0,
        behavior: 'smooth'
    })
})

let localizacao = document.querySelector('#local')
localizacao.addEventListener('click', ()=> {
    window.scroll({
        top: 2200,
        left: 0,
        behavior: 'smooth'
    })
})

// ANIMAÇÃO COM SCROLL
const debounce = function(func, wait, immediate){
    let timeout
    return function(...args){
        const context = this
        const later = function(){
            timeout = null
            if(!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if(callNow) func.apply(context, args)
    }
}



let target = document.querySelectorAll('[data-anime]')
let animationClass = 'animate'

function animeScroll(){
    let windowTop = window.pageYOffset + ((window.innerHeight * 3 / 4))
    target.forEach((elemento) => {
        if((windowTop) > elemento.offsetTop){
            elemento.classList.add(animationClass)
        }else{
            elemento.classList.remove(animationClass)
        }
    })
}

animeScroll()

if(target.length){
    window.addEventListener('scroll', debounce(() => {
        animeScroll()
    }, 200))
}









let arrow = document.querySelector('#arrow')
arrow.addEventListener('click', ()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

















//EFEITO DIGITAÇÃO
const text = document.querySelector('.typing')
typeWriter(text)

function  typeWriter(e){
    const textArray = e.innerHTML.split('')
    e.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(() =>e.innerHTML += letra, 40 * i)
        });
}

/* ACIONANDO O MENU-MOBILE */
let iconMenu = document.querySelector('.material-icons')
let menu = document.querySelector('.sidenav')

iconMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-mobile')
})



//SERVIÇOS
// let iconServico = document.querySelector('#btn-servico')
// let servico = document.querySelector('.p')

// iconServico.addEventListener('click', () => {
//     servico.classList.toggle('paragrafo')
// })



