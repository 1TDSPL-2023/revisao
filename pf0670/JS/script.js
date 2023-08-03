/* //Declarando um array de nomes de pessoas
let nomes = ["Diego", "Gabriel", "Lucas"];

//Imprimindo o array
console.log(nomes);

//Imprimindo o primeiro nome do array
console.log.log(nomes[0]);

//Quebrando linha no cole do navegador com \n
console.log("Quebrando linha \n");
console.log("\n");

//Imprimindo o array usando o loop for
for (let i = 0; i < nomes.length; i++) {

    if (nomes[i] == "Gabriel") {
        break;
    } else{
        console.log(nomes[i]);
    }
}

console.log("\n");
//Imprimindo o array usando um loop forEach
nomes.forEach(function (nome) {
    if (nome == "Gabriel") {
        return true;
    } else {
        console.log(nome);
    }
});
 */

//Declaração de um array objetos alunos.
let alunos = []