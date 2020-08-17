
let valor;

function button(num){
   valor = document.calculator.visor.value += num;
}

function reset(){
    document.calculator.visor.value= " ";
}

function calculate(){
    let result = eval(valor);
    document.calculator.visor.value = result; 
}