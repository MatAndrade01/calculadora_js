document.addEventListener("DOMContentLoaded", function(){

    const somar = document.querySelector(".botaoAdicao");
    const subtrair = document.querySelector(".botaoSubtracao");
    const dividir = document.querySelector(".botaoDivisao");
    const multiplicar = document.querySelector(".botaoMutiplicacao");

    somar.addEventListener("click", function(e){
        e.preventDefault();

        const v1 = parseFloat(document.querySelector(".valor01").value);
        const v2 = parseFloat(document.querySelector(".valor02").value);

        const soma = (v1 + v2);

        document.querySelector(".valor").innerHTML = soma;

        document.querySelector(".valor01").value = "";
        document.querySelector(".valor02").value = "";

    })

    subtrair.addEventListener("click", function(e){
        e.preventDefault();

        const v1 = parseFloat(document.querySelector(".valor01").value);
        const v2 = parseFloat(document.querySelector(".valor02").value);


        const subitracao = (v1 - v2);

        document.querySelector(".valor").innerHTML = subitracao;

        document.querySelector(".valor01").value = "";
        document.querySelector(".valor02").value = "";

    })

    dividir.addEventListener("click", function(e){
        e.preventDefault();

        const v1 = parseFloat(document.querySelector(".valor01").value);
        const v2 = parseFloat(document.querySelector(".valor02").value);

        const divisao = (v1 / v2);

        document.querySelector(".valor").innerHTML = divisao;

        document.querySelector(".valor01").value = "";
        document.querySelector(".valor02").value = "";

    })

    multiplicar.addEventListener("click", function(e){
        e.preventDefault();

        const v1 = parseFloat(document.querySelector(".valor01").value);
        const v2 = parseFloat(document.querySelector(".valor02").value);

        const multiplicacao = (v1 * v2);

        document.querySelector(".valor").innerHTML = multiplicacao

        document.querySelector(".valor01").value = "";
        document.querySelector(".valor02").value = "";
    })
});
