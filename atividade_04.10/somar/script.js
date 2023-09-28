document.addEventListener("DOMContentLoaded", function (){

const botao = document.querySelector(".botaoSomar");


botao.addEventListener("click", function(e){
    e.preventDefault();
    
    const v1 = parseFloat(document.querySelector(".valor01").value);
    const v2 = parseFloat(document.querySelector(".valor02").value);

    const soma = (v1 + v2);

    document.querySelector(".valorSoma").innerHTML = soma;

    document.querySelector(".valor01").value = "";
    document.querySelector(".valor02").value = "";

})
})