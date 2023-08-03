// console.log("Hello World")

//Declarando nomes de pessoas numa array

// let nomes = ["Diego", "Gabriel", "Lucas"];

// //imprimindo o array

// console.log(nomes[0]);

// //quebrando linhas no console com \n
// console.log("Quebrando linha \n");
// console.log("\n");


// // imprimindo array usando loop for
// for (let i = 0 ; i < nomes.length; i++){
//     if (nomes[i] == "Gabriel"){
//         break;
//     }
//     else{
//         console.log(nomes[i]);
//     }

// }


// // imprimindo array usando loop forEach
// nomes.forEach(function (nome){
//     if (nome == "Gabriel"){
//         return true;
//     }
//     else{
//         console.log(nome);
//     }
//     console.log(nome);
// })


//Declaracao de um array de objetos alunos.
// let alunos = [
// // imprimindo array usando loop for
//     {nome : "Diego" , idade : 23 , peso : 80.5},
//     {nome : "Gabriel" , idade : 15 , peso : 60.5},
//     {nome : "Lucas" , idade : 30 , peso : 90.5}
// ]

// //imprimir array objetos

// console.log(alunos);

// //JSON = JAVASCRIPT OBJECT NOTATION

// //Iprimindo o primeiro objeto do array

// console.log(alunos[0]);

// //imprimindo o nome do primeiro objeto do array

// console.log(alunos[0].nome);

// //imprimindo o nome , idade e peso de todos objetos do array
// console.log(alunos[0].nome, alunos[0].idade , alunos[0].peso);
// console.log(alunos[1].nome, alunos[1].idade , alunos[1].peso);
// console.log(alunos[2].nome, alunos[2].idade , alunos[2].peso);

// console.log("\n");

// //imprimindo o nome com o alor da propriedade em String

// let propriedade = "nome";

// console.log(alunos[0][propriedade], alunos[0].idade , alunos[0].peso);
// console.log(alunos[1][propriedade], alunos[1].idade , alunos[1].peso);
// console.log(alunos[2][propriedade], alunos[2].idade , alunos[2].peso);


// //imprimindo cada informacao do objeto com loop for

// for (let i = 0 ;  i < alunos.length ; i++){
//     console.log(alunos[i].nome, alunos[i].idade , alunos[i].peso);
// }


//Declarando um array de nomes de pessoas
let nomes = ["Diego" , "Gabriel" , "Lucas"]
//imprimindo array
console.log(nomes);
console.log("\n");

//Inserindo um novo nome no final do array utilizando o método push
nomes.push("João");
// imprimindo Array
console.log(nomes);
console.log("\n");

//Inserindo um novo nome no final do array utilizando o método push
nomes.push("Maria");
// imprimindo Array
console.log(nomes);
console.log("\n");

//Inserindo um novo nome no inicio do array utilizando o método unshift, pegando o alor da variavel noem que recebeu o vvalor do input.


//recuperando o botao submit do form
let botao = document.querySelector('#btnSubmit');



//adicionando um evento click ao botao de submit, utilizando um arrow function
botao.addEventListener("click", ()=>{
    //recuperando o valor do input de email e armazenado na variavel email
    let email = document.querySelector("#idEmail").value;
    //recuperando o valor do input de txtTel e armazenando na variavel telefone 
    let telefone = document.querySelector("#txtTel").value;



    //adicionando a variavel email no inicio do array nomes.
    nomes.unshift(email);
})
    //limpar o input de email
    document.querySelector("#idEmail").value = "";
    //limpar o input de telefone
    document.querySelector("#idTel").value = "";
    


    //alterando o valor de um elemto do array com o metodo splice
    //Desde a posicao 1 ate a posicao 1 substitui por "maria"
    nomes.splice(1,1,"maria");
    console.log(nomes);
    console.log("\n");

    //alteracao de 2 valores do array
    nomes.splice(1, 2 , "Tuca", "Jorge");
    //imprimindo o array
    console.log(nomes);
    console.log("\n");

    //alterando o valor de um elemento utilizando splice
    nomes.splice(1,1);
    //quando nao especificado nada apos dizer aposicao ele substiuira por nada entao apga
    console.log(nomes);
    console.log("\n");