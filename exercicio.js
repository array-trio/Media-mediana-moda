let array = [];
let num;

console.log("Digite um numero para fazer sua média, mediana e moda ");
process.stdin.on("data", function(data){
num = data.toString().trim();
if(num == 'finalizar' || num == 'f'){
    let soma = 0;
    let media = 0;
    for(let i = 0; i < array.length; i++){
        soma = soma + array[i];
    }
    media = soma / array.length;

    console.log("A média é " + media);
    process.exit();

}else{
    if(!isNaN(num)){
    array.push(+num);
    console.log("Número adicionado com sucesso");
    console.log("Insira outro numero ou calcule a média, mediana e moda escrevendo finalizar");
    }else{
        console.log("Digite um número válido");
    }
}
});