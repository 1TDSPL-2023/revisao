
//Declarar a lista de tarefas vazia
let listaTarefasArray = [];

//Recuperando o botão addTarefa
const botaoAdicionaTarefa = document.getElementById("btnAddTarefa");

//Inserindo um listener de click no botão addTarefa
botaoAdicionaTarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();

    //Recuperando o input da tarefa
    const inputTarefa = document.getElementById("idTarefa");

    //Inserindo no array com o método push o valor digitado no input.
    listaTarefasArray.push(inputTarefa.value);

    //Criando um elemento li
    let li = document.createElement("li");

    //Inserindo o texto no elemento li
    li.textContent = inputTarefa.value;

    //Recuperando a lista de tarefas do HTML:
    const listaTarefasUL = document.getElementById("lista-tarefa");

    //Inserindo o elemento li com o texto na lista ul:
    listaTarefasUL.appendChild(li);

    //Criando o elemento botão
    let botaoExcluir = document.createElement("button");

    //Inserindo o texto no elemento botão
    botaoExcluir.textContent = " x ";

    //Inserindo o elemento botão com o texto no elemento li:
    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evento)=>{

        listaTarefasArray.forEach(tarefa=>{

            if(evento.target.parentNode.textContent.split(" ")[0] == tarefa){
                listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1)
            }
        })
        evento.target.parentNode.remove();

          //Imprimindo o array e limpando o input tarefa.
        console.log(listaTarefasArray);
    })

    inputTarefa.value = "";

});

//Delcarar um array de categorias de tarefas
const categorias = ["Trabalho", "Estudos", "Casa", "Lazer", "Esportes"];

//Recuperar o select de categorias
const selectCategorias = document.querySelector("#idCategoria");

categorias.forEach((categoria, index) => {
    let optionCategoria = document.createElement("option");
    optionCategoria.textContent = categoria;
    optionCategoria.value = (index + 1);
    selectCategorias.appendChild(optionCategoria);
});

let categoriasPares = categorias.filter((categoria, index) => {
    return index % 2 == 0;
});
console.log(categoriasPares);

//Declarar um array de objetos com usuário e senha
const s = [
    {nome: "Maria", senha: "12345"},
    {nome: "Paulo", senha: "12345"},
    {nome: "Carlos", senha: "123456"}
];

function validarUsuario(nmUser, senhaUser){
//Declarar uma variável para armaznar o objeto de usuário logado e validar com filter
let usuarioLogado = usuarios.filter((usuario) => {
    
return usuario.nome == nmUser && usuario.senha == senhaUser;   
});
}

addEventListener("click", () => {
    console.log(usuarioLogado);
});