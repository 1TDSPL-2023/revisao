// declarar a lista de tarefa vazia
let listaTarefasArray = [];

//Recuperando o botão addTarefa
const botaoAdicionaTarefa = document.getElementById("btnAddTarefa");

//Inserindo um listener de clck no botão addTarefa
botaoAdicionaTarefa.addEventListener("click", (evt)=>{

    evt.preventDefault();

    //recuperando o input da tarefa
    const inputTarefa = document.getElementById("idtarefa");
    
    //Inserindo no array com o método push o valor digitado no input
    listaTarefasArray.push(inputTarefa.value);

    //criando um elemento li
    let li = document.createElement("li")
    //Inserindo o texto no elemnto li
    li.textContent = inputTarefa.value;

    //Recuperando a lista de tarefas no html
    const listaTarefasUL = document.getElementById("lista-tarefa")
    //Inserindo o elemento li com texto na lista ul:
    listaTarefasUL.appendChild(li);

    //Criando o elemento botao
    let botaoExcluir = document.createElement("button")
    //Inserindo o texto no elemento button
    botaoExcluir.textContent = "X";
    //inserindo o botao no elemento li
    li.appendChild(botaoExcluir)

    botaoExcluir.addEventListener("click", (evt)=>{

        listaTarefasArray.forEach(tarefa=>{

        if (evt.target.parentNode.textContent.split("X")[0] == tarefa){
            listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa))
        }
        
        })

        evt.target.parentNode.remove();
        console.log(listaTarefasArray)

    })

    //Imprimindo o array e limpando o input tarefa
    console.log(listaTarefasArray)
    inputTarefa.value = "";
});