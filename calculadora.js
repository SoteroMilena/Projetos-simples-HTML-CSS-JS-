//A function insert recebe um num(ela meio que acumula o primeiro valor digitado,para que depois seja realizada a operação)
function insert(num){
    // a variavel numero recebe o valor que foi digitado e exibido em P
 var numero =  document.querySelector('P').innerHTML;
 //aqui temos a dois valore! sendo um o primeiro clicado e o segundo o proximo clicado
 document.querySelector('P').innerHTML = numero + num;
}
//function limpa, pega o que tem em P, ou seja o que foi digitado e sunstitui por uma string vazia
function clean(){
    document.querySelector('P').innerHTML="";
}
//essa função tem o intuito de remover um elemento, no caso o ultimo digitado.
function cleanUm(){
    var resultado = document.querySelector('P').innerHTML;
    //para apagar o ultimo valor o metodo substring pega o tamanho do valor -1 e exclui o ultimo valor.
    document.querySelector('resultado').innerHTML = resultado.substring(0,resultado.length -1); 
}
//essa função realiza todos os calculos/operações da calcculadora
function calcular(){
    // a variavel resultado(que é a tela de resultado) recebe o que foi digitado
    var resultado = document.querySelector('P').innerHTML;
    // se tiver algo dentro desse resultado 
    if(resultado){
        // o calculo é realizado e a substring eval identifica qual operação foi solicitada.
       document.querySelector('P').innerHTML = eval(resultado) 
    }
}

