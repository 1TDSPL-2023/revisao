// let nomes = ["Diego", "Gabriel", "Lucas"];

// // console.log(nomes);

// console.log("Índice: ")
// console.log(nomes[0]);


// console.log("\nImprimindo array com loop for:");
// for (let i = 0; i < nomes.length; i++) {
//     if (nomes[i] == "Gabriel") {
//         break;
//     } else {
//         console.log(nomes[i]);
//     }
// }

// console.log("\nImprimindo o array usando um loop forEach:");
// nomes.forEach(function (nome) {
//     if (nome == "Gabriel") {
//         return true;
//     } else {
//         console.log(nome);
//     }
// });

let alunos = [
    {nome: "Diego", idade: 23, peso: 80.5},
    {nome: "Gabriel", idade: 15, peso: 60.5},
    {nome: "Lucas", idade: 30, peso: 90.5}
]

console.log("Declaração de um array objetos alunos:")
console.log(alunos);

console.log("\nImprimindo o primeiro objeto do array:")
console.log(alunos[0]);

console.log("\nImprimindo o nome do objeto do array:")
console.log(alunos[0].nome, alunos[0].idade, alunos[0].peso);
console.log(alunos[1].nome, alunos[1].idade, alunos[1].peso);
console.log(alunos[2].nome, alunos[2].idade, alunos[2].peso);

console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando o valor da propriedade como String")
let propriedade = "nome";
console.log(alunos[0]["nome"], alunos[0]["idade"], alunos[0]["peso"]);
console.log(alunos[1]["nome"], alunos[1]["idade"], alunos[1]["peso"]);
console.log(alunos[2]["nome"], alunos[2]["idade"], alunos[2]["peso"]);

console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop for")
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
}

//Função anônima
console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop forEach")
alunos.forEach(function (aluno) {
    console.log(aluno.nome, aluno.idade, aluno.peso)
});

//Arrow function
console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop forEach")
alunos.forEach(aluno => {
    console.log(aluno.nome, aluno.idade, aluno.peso);
});

//Imprimindo o nome, idade e peso de todos os objetos do array usando loop for of
console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop for of")
for (let aluno of alunos) {
    console.log(aluno.nome, aluno.idade, aluno.peso);
}

//Imprimindo o nome, idade e peso de todos os objetos do array usando loop for in
console.log("\nImprimindo o nome, idade e peso de todos os objetos do array usando loop for in")
for (let i in alunos) {
    console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
}