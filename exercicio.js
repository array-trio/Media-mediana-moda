let numeros = [];
let num;
let repeticao = {};

console.log("Digite um numero para fazer sua média, mediana e moda ");
process.stdin.on("data", function(data){
num = data.toString().trim();
if(num == 'finalizar' || num == 'f'){
//-------------------------------------------------
//processo média
    let soma = 0;
    let media = 0;
    for(let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i];
    }
    media = soma / numeros.length;
//--------------------------------------------------------------
//processo moda
for (let i = 0; i < numeros.length; i++) {
    if(repeticao[numeros[i]]) {
        repeticao[numeros[i]]++
    } else {
        repeticao[numeros[i]] = 1
    }
}

let array = Object.entries(repeticao)

let moda
let quantidadeAparicoes = 0

for(let i = 0; i < array.length; i++) {
    if(array[i][1] > quantidadeAparicoes) {
        quantidadeAparicoes = array[i][1]
        moda = array[i][0]
    }
}


//-------------------------------------------------------------- 
    console.log("A média é: ", media);
    console.log("A moda é:", moda);
    console.log("")
    process.exit();

} else {
    if(!isNaN(num)){
    numeros.push(+num);
    console.log("Número adicionado com sucesso");
    console.log("Insira outro numero ou calcule a média, mediana e moda escrevendo finalizar");
    }else {
        console.log("Digite um número válido");
    }
    }
});