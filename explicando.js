//Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.
let palavras = ["sonho","medo","sorrir","sorte","mundo","chorar", "flor"]

console.log(".join() \n");
console.log(" O método join() junta os elementos de um array, usando um separador.\n Caso não seja especificado o separador o mesmo utilizará vírgula \n");
console.log(palavras.join(" ♥ "));

console.log("\n.pop() \n");
console.log(" O método pop() elimina o ultimo elemento do array. Esse método não recebe parâmetro e mostra o elemento eliminado \n");
console.log(palavras.pop());


console.log("\n.push() \n");
console.log(" O método push() insere um ou mais elementos no final do array. Ele recebe um ou mais elementos como parâmetros e retorna o comprimento do array \n");
console.log(palavras.push("dançar", "cantar", "pular"));

console.log("\n.shift() \n");
console.log(" O método shift() elimina o primeiro elemento de um array, esse método não recebe parâmetro, e retorna o elemento eliminado\n");
console.log(palavras.shift());

console.log("\n.unshift() \n");
console.log(" O método unshift() insere um ou mais elemento no inicio do array, recebe um ou mais elementos como parametros e retorna\n o novo comprimento do array\n");
console.log(palavras.shift());


