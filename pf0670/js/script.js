// console.log("Hello World!");

// //Declarando um array de nomes de pessoas
// let nomes = ["Diego", "Gabriel", "Lucas"];
// //Impriindo o array
// console.log(nomes);

// //Imprimindo o primeiro nome do array
// console.log(nomes[0]);

// //Quebrando linha no console do navegador com \n
// console.log("Quebrando linha \n");
// console.log("\n");
// //Imprimindo o array usando um loop for
// for (let i = 0; i < nomes.length; i++) {
    
//     if (nomes[i] == "Gabriel") {
//         break;
//     } else {
//         console.log(nomes[i]);
//     }

// }
// console.log("\n");
// //Imprimindo o array usando um loop forEch
// nomes.forEach(function (nome) {
//     if (nome == "Gabriel") {
//         return true;
//     } else {
//         console.log(nome);
//     }
// });


//Declaração de um array objetos alunos.
let alunos = [
    { nome: "Diego", idade: 23, peso: 80.5 },
    { nome: "Gabriel", idade: 15, peso: 60.5 },
    { nome: "Lucas", idade: 30, peso: 90.5 }
];

console.log("\n");

//Imprimindo o array de objetos
console.log(alunos);

console.log("\n");

//Imprimindo o primeiro objeto do array
console.log(alunos[0]);
console.log("\n");
//Impriindo o nome do primeiro objeto do array
console.log(alunos[0].nome)
console.log("\n");
//Imprimindo o nome, idade e peso do primeiro objeto de todos os objetos do array
console.log(alunos[0].nome, alunos[0].idade, alunos[0].peso);
console.log(alunos[1].nome, alunos[1].idade, alunos[1].peso);
console.log(alunos[2].nome, alunos[2].idade, alunos[2].peso);

console.log("\n");

//Imprimindo o nome, idade e peso de todos os objetos do array usando o valor da propriedade como String
let propriedade = "nome";
console.log(alunos[0][propriedade], alunos[0]["idade"], alunos[0]["peso"]);
console.log(alunos[1][propriedade], alunos[1]["idade"], alunos[1]["peso"]);
console.log(alunos[2][propriedade], alunos[2]["idade"], alunos[2]["peso"]);

console.log("\n");

//Imprimindo o nome, idade e peso de todos os objetos do array usando loop for
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
} //For

console.log("\n");

//Imprimindo o nome, idade e peso de todos os objetos do array usando loop forEach
alunos.forEach(function (aluno) {
    console.log(aluno.nome, aluno.idade, aluno.peso);
});//Função anônima

console.log("\n");

//Imprimindo o nome, idade e peso de todos os objetos do array usando loop forEach
alunos.forEach(aluno => {
    console.log(aluno.nome, aluno.idade, aluno.peso);
} );//Arrow function

console.log("\n");

//Imprimindo o nome, idade e peso de todos os objetos do array usando loop for of
for (let aluno of alunos) {
    console.log(aluno.nome, aluno.idade, aluno.peso);
}//For of

console.log("\n");

//Imprimindo o nome, idade e peso de todos os objetos do array usando loop for in
for (let i in alunos) {
    console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
} //For in
