const img = document.querySelectorAll('.container-login .profiles img') // Seleciona todos os elementos "img" da página HTML
const f = document.querySelector('.f') // Seleciona o elemento que vai ser alterado após o evento de click
const displayNone = document.querySelectorAll('.pop-display-none') // Seleciona a classe set-display-none
const containerSeries = document.querySelector('.container-series') // Seleciona a div com a classe container series
const containerLogin = document.querySelector('.container-login') // Seleciona a div com a classe "container-login"
const backgroundVideo = document.querySelector('.backgroundVideo') // Seleciona a div com a classe "backgroundVideo"
const nave = document.querySelectorAll('.nave')

nave.forEach(element => {
    window.addEventListener('scroll', () => {
        const y = window.scrollY
        if(y > 499){
            element.style.backgroundColor = '#000'
        } else {
            element.style.backgroundColor = ''
        }
    })
})

//Itera por todas as tags "img" dentro da div "profiles"
img.forEach(element => {
    // Vai escutar em qual dessas "imgs" ouve um clique
    element.addEventListener('click', () => {
        // Pega o valor da src do elemento "img" que foi clicado
        var ele = element.getAttribute('src')
        // Array para guardar uma parte do valor da variável "ele"
        var list = []
        // Este comando vai iterar pelos 6 últimos elementos da variável "ele"
        // e vai guardar os valores dentro da Array "list"
        for(i = 0; i < ele.length; i++){
            if(i >= 14 && i <= 19){
                list.push(ele[i])
            }
        }
        var nameImg = list.join('')
        //Faz manipulação no CSS
        containerLogin.style.display = 'none'
        backgroundVideo.style.display = 'none'

        displayNone.forEach(element => {
            element.classList.remove('pop-display-none')
            element.classList.add('animation-container')
        })
        f.setAttribute('src', `assets/images/${nameImg}`)
        console.log(ele)
        console.log(nameImg)
    })
});
