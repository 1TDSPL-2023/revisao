// CTRL + SHIFT + I = console do navegador


//Declarando um array de nomes de pessoas 
//let nomes = ['Diego','Gabriel','Lucas'];

//Imprimindo o array
//console.log(nomes);

//Imprimindo o primeiro nome do array
//console.log(nomes[0]);

//Quebrar linha no console do navegador
//console.log("\n")

//Imprimindo o array usando um loop for
//for (let i = 0; i < nomes.length; i++) {
//    if (nomes[i] == "Gabriel") {
//        break;
//   } else {
//        console.log(nomes[i]);
//   }

//Declaração de um array de objeto alunos
//let alunos = [
//    {nome: "Douglas", idade: 17, peso: 75},
//    {nome: "dada", idade: 12, peso: 80},
//    {nome: "lala", idade: 14, peso: 47},
//];
//
////Imprimindo o array de objetos 
//console.log(alunos);
//
////Imprimindo o nome do primeiro objeto do array 
//console.log(alunos[0].nome);
//
////Imprimindo tudo de todos os objetos
//console.log(alunos[0].nome, alunos[0].idade, alunos[0].peso);
//console.log(alunos[1].nome, alunos[1].idade, alunos[1].peso);
//console.log(alunos[2].nome, alunos[2].idade, alunos[2].peso);

//Declarando um array de nomes de pessoas 
let nomes = ["Douglas","Pablo","Larissa"];

//Imprimindo ele
console.log(nomes);

//Inserindo um novo nome no final do array usando push 
nomes.push("Maria");
console.log(nomes);
console.log("\n");

//Inserindo um novo nome no final do array usando unshift, pegando o valor
//da variável nome que recebeu o valor do input.

//Recuperando o botão submit do form
let botao = document.querySelector("#btnSubmit");

//Adicionando um evento de click ao botão de submit usando arrow function 
botao.addEventListener("click", () => {
    //recuperando o valor do input de email e armazenando na variável email
    let email = document.querySelector("#idEmail").value;
    //recuperando o valor do input de email e armazenando na variável telefone
    let telefone = document.querySelector("#idTel").value;
    //adicionando a variável email no INÍCIO do array nomes
    nomes.unshift(email);
    //limpar o input de email
    document.querySelector("#idEmail").value = "";
    //limpar o input de telefone
    document.querySelector("#idTel").value = "";

    //imprimindo o array
    console.log(nomes);
    console.log("\n");
})

//removendo o último elemento do array utilizando pop
nomes.pop();

//removendo o primeiro elemento do array utilizando shift
nomes.shift

//Colocando em ordem alfabética o array usando sort

nomes.sort();

//Revertendo a ordem do array usando reverse
nomes.reverse();






