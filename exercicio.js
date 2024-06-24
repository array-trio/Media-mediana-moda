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
    let mediana;
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] > array[j]){
                array[i] = array[i] + array[j];
                array[j] = array[i] - array[j];
                array[i] = array[i] - array[j];
            }
        }
    }
    if(array.length%2 == 0){
        mediana = (array[array.length/2] + array[(array.length/2)-1])/2;
    } else{
        mediana = array[Math.floor(array.length/2)];
    }
    console.log("A mediana é " + mediana);
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