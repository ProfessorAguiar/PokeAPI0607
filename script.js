let pesq = 0
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (pesq != 1) {
        const poke = form.poke.value
        console.log(poke)
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${poke}`, success: function (result) {
                console.log(result)
                const divResp = document.createElement('div')
                divResp.className = 'cardResp';

                const divImg = document.createElement('div')
                divImg.className = 'cardImg';

                const divTxt = document.createElement('div')
                divTxt.className = 'cardTxt';

                const section = document.querySelector('section')
                section.append(divResp)
                divResp.append(divImg)
                divResp.append(divTxt)
                const imagem = document.createElement('img')
                divImg.append(imagem)
                imagem.src = (`${result.sprites.front_default}`)

                const nome = document.createElement('h3')
                divTxt.append(nome)
                nome.innerHTML = (`${result.name}`)

                const altura = document.createElement('p')
                divTxt.append(altura)
                altura.innerHTML = (`Altura: ${result.height}`)

                const peso = document.createElement('p')
                divTxt.append(peso)
                peso.innerHTML = (`Peso${result.weight}`)
                pesq = 1
            }
        });
    }
})