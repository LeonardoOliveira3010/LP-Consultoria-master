// /* MENU PRINCIPAL MOBILE */
// $(document).ready(function(){
//     $('.button-collapse').sideNav();
// });

// MENU MOBILE





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



