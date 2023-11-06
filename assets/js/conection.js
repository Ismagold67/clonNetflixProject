let divMidias = document.querySelectorAll('.midia')

fetch("/assets/js/dados.json").then((response) => {
    response.json().then((datas) => {
        datas.movies.map((midia) => {

            divMidias.forEach(element => {
                const img = element.querySelector('img')
                const way = img.getAttribute('src')
                const div = document.createElement('div')
                const span = document.createElement('span')
                const p = document.createElement('p')
                const i = document.createElement('i')

                element.addEventListener('mouseenter', () => {
                    if(way.includes(midia.id)){
                        div.classList.add('card-video-after-mouseenter')
                        img.style.display = 'none'
                        
                        span.innerHTML = midia.path
                        p.textContent = `Sinopse: ${midia.sinopse}`

                        i.innerHTML = '<i class="fa-solid fa-play ca-f">ㅤAssistir</i> <i class="fa-solid fa-plus ca-f">ㅤAdicionar a lista</i>'
                        div.appendChild(span)
                        div.appendChild(i)
                        div.appendChild(p)
                        element.appendChild(div)

                    }
                })
                element.addEventListener('mouseleave', () => {
                    var span = div.querySelector("span")
                    var p = div.querySelector("p")
                    var ele = document.querySelector('.midia .card-video-after-mouseenter')
                    if (span) {
                        div.removeChild(span)
                        div.removeChild(p)
                        element.removeChild(ele)
                        img.style.display = 'block'
                    }
                })
            })
        })
    })
})

