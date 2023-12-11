document.getElementById('botao').addEventListener('click', () => {
    escreverConselho()
})

async function gerarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function escreverConselho() {
    const conselhoGerado = await gerarConselho()
    const conselhoID = conselhoGerado.slip.id
    const conselhoMensage = conselhoGerado.slip.advice
    document.getElementById('conselho-number').innerHTML = `ADVICE #${conselhoID}`
    document.getElementById('conselho').innerHTML = `"${conselhoMensage}"`
}

escreverConselho()
