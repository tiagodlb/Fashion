/* Variaveis Globais */

let nomeUsuario = prompt("Bem vindo à DrivenFashion \nQual por qual nome podemos te chamar?")

/* Funções */
function selecionar() {
    let selecionarProduto = document.querySelector(".produto")
    selecionarProduto.addEventListener('click', evento)
    console.log("uepa")
}

function evento(evento) {
    console.log(evento.target.classList)
    if (evento.target.classList === '.imagem-produto') {
        console.log("oi")
        evento.target.classList.toggle('selecionado');
    }
    else {
        return false
    }
};

function pegarDados(){
    let dados = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    console.log(dados)
}
pegarDados()