//----------------------------------------------- MANIPULANDO ARRAYS (=list) ---------------------------------------------------

// let nomes = ["Diego", "Gabriel", "Lucas"]
// //Imprimindo array sem loop

// console.log("Imprimindo sem loop")
// console.log(nomes);
// console.log(nomes[0]);
// console.log("\n");

// //Imprimindo com loop for (break para o loop)
// console.log("Imprimindo com loop for usando break")
// for (let i = 0; i < nomes.length; i++){
//     if (nomes[i] == "Gabriel") {
//         break;
//     } else {
//         console.log(nomes[i])
//     }
// }

// console.log("\n")

// //Imprimindo com forEach (imparável)
// console.log("Imprimindo com loop forEach usando return")
// nomes.forEach(function(nome) {
//     if (nome == "Gabriel"){
//         return true;
//     } else {
//         console.log(nome)
//     }
// });

//----------------------------------------------- MANIPULANDO ARRAYS DE OBJETOS (=dictionary) --------------------------------------

// //Criando array de objetos alunos
// let alunos = [
//     {nome: "Diego", idade: 23, peso: 80.5},
//     {nome: "Gabriel", idade: 15, peso: 60.5},
//     {nome: "Lucas", idade: 30, peso: 71.5}
// ];

// //Imprimindo o array de obj
// console.log("Array completo:")
// console.log(alunos)
// console.log("\n")

// //Imprimindo o nome do primeiro obj
// console.log("Primeira propriedade do primeiro obj do array:")
// console.log(alunos[0].nome)
// console.log("\n")

// //Imprimindo todas as propriedades de todos os obj
// console.log("Todas as propriedades de todos os obj:")
// console.log(alunos[0].nome, alunos[0].idade, alunos[0].peso);
// console.log(alunos[1].nome, alunos[1].idade, alunos[1].peso);
// console.log(alunos[2].nome, alunos[2].idade, alunos[2].peso);
// console.log("\n")

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for
// console.log("Todas as propriedades de todos os obj usando for:")
// for (let i = 0; i < alunos.length; i++) {
//     console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
// }
// console.log("\n")

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop forEach
// console.log("Todas as propriedades de todos os obj usando forEach e função anônima:")
// alunos.forEach(function (aluno) {
//     console.log(aluno.nome, aluno.idade, aluno.peso);
// });//Função anônima
// console.log("\n")

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop forEach
// console.log("Todas as propriedades de todos os obj usando forEach e Arrow function:")
// alunos.forEach(aluno => {
//     console.log(aluno.nome, aluno.idade, aluno.peso);
// } );//Arrow function
// console.log("\n")

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for of
// console.log("Todas as propriedades de todos os obj usando for of:")
// for (let aluno of alunos) {
//     console.log(aluno.nome, aluno.idade, aluno.peso);
// }//For of
// console.log("\n");

// //Imprimindo o nome, idade e peso de todos os objetos do array usando loop for in
// console.log("Todas as propriedades de todos os obj usando for in:")
// for (let i in alunos) {
//     console.log(alunos[i].nome, alunos[i].idade, alunos[i].peso);
// } //For in
// console.log("\n");

// ---------------------------------------------------- MANIPULAÇÃO DE ARRAYS COM FORM --------------------------------------------

//Declando um array de nomes de pessoas
let nomes = ["Diego", "Gabriel", "Lucas"];
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Inserindo um novo nome no final do array utilizando o método push
nomes.push("João");
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Inserindo um novo nome no final do array utilizando o método push e passando com variável
let nome = "Maria";
nomes.push(nome);
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Inserindo um novo nome no início do array utilizando o método unshift, pegando o valor da variável nome que recebeu o valor do input.

//Recuperando o botão submit do form
let botao = document.querySelector("#btnSubmit");

//Adicionando um evento de click ao botão de submit, utilizando uma arrow function
botao.addEventListener("click", () => {
    //Recuperando o valor do input de email e armazenando na variável email
    let email = document.querySelector("#idEmail").value;
    //Recuperando o valor do input de txtTel e armazenando na variável telefone
    let telefone = document.querySelector("#idTel").value;

    //Adicionando a variável email no inicio do array nomes.
    nomes.unshift(email);

    //Limpar o input de email.
    document.querySelector("#idEmail").value = "";
    //Limpar o input de telefone.
    document.querySelector("#idTel").value = "";

    //Imprimindo o array
    console.log(nomes);
    console.log("\n");

    //Imprimindo o array na div com id="lista" um embaixo do outro
    document.querySelector("#lista").innerHTML = nomes.join("<br>");
});


//Removendo o último elemento do array utilizando o método pop
nomes.pop();
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Removendo o primeiro elemento do array utilizando o método shift
nomes.shift();
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Colocando em ordem alfabética o array utilizando o método sort
nomes.sort();
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Revertendo a ordem do array utilizando o método reverse
nomes.reverse();
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Recuperando o botão ordenar do form
let botaoOrdenar = document.querySelector("#btnOrdenar");

//Adicionando um evento de click ao botão de ordenar, utilizando uma arrow function
botaoOrdenar.addEventListener("click", () => {
    //Ordenando o array em ordem alfabética
    nomes.sort();
    //Imprimindo o array
    console.log(nomes);
    console.log("\n");

    //Imprimindo o array na div com id="lista" um embaixo do outro
    document.querySelector("#lista").innerHTML = nomes.join("<br>");
});

// ------------------------------------------- MANIPULAÇÃO DE ARRAY USANDO MÉTODO SPLICE ----------------------------------------

//Alterando o valor de um elemento do array utilizando o método splice
nomes.splice(1, 1, "Maria");
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Alterando o valor de dois elementos do array utilizando o método splice
nomes.splice(1, 2, "Tuca", "Jorge");
//Imprimindo o array
console.log(nomes);
console.log("\n");

//Alterando o valor de um elemento do array utilizando o método splice
nomes.splice(1, 1);
//Imprimindo o array
console.log(nomes);
console.log("\n");