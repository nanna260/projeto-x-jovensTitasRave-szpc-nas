alert('seja bem vindo OwO')
console.long(document.getElementById("btn-avancar"))
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual =

const cartao = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function() {;
    const ehUltimoCartao = cartaoAtual===cartao.length-1;
    if(ehUltimoCartao)return;
   
    esconderCartaoSelecionado();
   
    console.log(cartaoAtual);
    console.log(cartao.length -1); //5
    console;log(cartaoAtual === cartao;length -1);
    
    esconderCartao();

    const cartao =
    cartaoAtual ++; 
    MostarCartao();
    {
        esconderCartao();

    cartaoAtual--;
    MostrarCartao();

    }

 
});

function MostrarCartao() {
    cartao[cartaoAtual].classList.add("selecionado");
}

function MostarCartao() {
    cartao[cartaoAtual].classList.add("selecionado");
}

function MostarCartao() {
    cartao[cartaoAtual].classList.add("selecionado");
}

function mostarCartao() {
    const cartao = document.querySelectorAll, cartaoAtual; ++;
    console.log(cartao[cartaoAtual]);
    cartao[cartaoAtual].classList.add("selecionado");

    btnVoltar.addEventListener("click", function () {
        const ehPrimeiroCartao = cartaoAtual ===0
        if(ehPrimeiroCartao) return;
     });
    return cartao;
}

function esconderCartaoSelecionado() {
            console.log(cartao.length);
            const cartaoSelecionado = document.querySelectorAll("selecionado");
            cartaoSelecionado.classList.remove("selecionado");
        }
