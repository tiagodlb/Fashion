/* Variaveis Globais */

let nomeUsuario = prompt("Bem vindo à DrivenFashion \nQual por qual nome podemos te chamar?")
let ListaPedidos = []
let inputValor = ""
let checar1, checar2, checar3,travar = false

/* Funções */
function selecionar(produto) {
    let quantidadeProdutos = document.querySelectorAll(".container-produto .selecionado").length
    let trava = true
    produto.addEventListener('click', () => {
        if (trava == true && quantidadeProdutos >= 1) {
            trava = false
        }
        if (trava == true && produto.className === 'produto') {
            produto.classList.add('selecionado');

        }
        else {
            produto.classList.remove('selecionado');

            //confirm("Você deseja mesmo?")
        }
        if (trava === true) {
            checar1 = true
        }
    })
};

function selecionar2(produto) {
    let quantidadeProdutos2 = document.querySelectorAll(".container-produto2 .selecionado").length
    let trava = true
    produto.addEventListener('click', () => {
        if (trava == true && quantidadeProdutos2 >= 1) {
            trava = false
        }
        if (trava == true && produto.className === 'produto') {
            produto.classList.add('selecionado');
        }
        else {
            produto.classList.remove('selecionado');
            //confirm("Você deseja mesmo?")
        }
        if (trava === true) {
            checar2 = true
        }
    })
};

function selecionar3(produto) {
    let quantidadeProdutos3 = document.querySelectorAll(".container-produto3 .selecionado").length
    let trava = true
    produto.addEventListener('click', () => {
        if (trava == true && quantidadeProdutos3 >= 1) {
            trava = false
        }
        if (trava == true && produto.className === 'produto') {
            produto.classList.add('selecionado');

        }
        else {
            produto.classList.remove('selecionado');
            //confirm("Você deseja mesmo?")
        }
        if (trava === true) {
            checar3 = true
        }
    })
};

function urlInput() {
    let input = String(document.querySelector("input").value)
    if (input.length === 0) {
        alert('Por favor insira um link válido')
    }
    else {
        inputValor = input
        confirm("Pedido feito, clicke em OK para confirmar")
    }
}

function liberarBotao() {
    check1 = false
    if (checar1 === true && checar2 === true) {
        check1 = true
    }

    if (checar3 === true && check1 === true) {
        let botao = document.querySelector("button")
        botao.style.background = '#404EED'
    }
    else {
        let botao = document.querySelector("button")
        botao.style.background = '#C4C4C4'
    }

}
function confirmarPedido() {
    let travar = false
    urlInput()
}

/* Axios */

function pegarDados() {
    let dados = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    dados.then(carregarPedidos)
}

function carregarPedidos(resposta) {
    ListaPedidos = resposta.data;
    renderizarPedidos()
    //    setInterval(pegarDados, 10000)
}

function renderizarPedidos(pedido) {
    let container2 = document.querySelector(".container2")
    container2.innerHTML = "";
    for (i = 0; i < ListaPedidos.length; i++) {
        const pedido = ListaPedidos[i];
        container2.innerHTML += pedidoDiv(pedido)
    }
}


function pedidoDiv(pedido) {
    return `
    <div class="container-pedidos">
    <div class="pedidos">
        <div class="imagem-pedidos">
            <img src="${pedido.image}">
        </div>
        <p><strong>Criador:</strong>${pedido.owner}</p>
    </div>
    `
}
setInterval(liberarBotao, 1000)
pegarDados()