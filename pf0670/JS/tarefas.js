//declarar a lista de tarefas vazia 
let listaTarefasArray = [];

//Recuperando o botão addTarefa
const botaoAdicionaTarefa = document.getElementById("btnAddTarefa");


//Inserindo um listener de click no botão addTarefa
botaoAdicionaTarefa.addEventListener("click", (evt)=>{
    
    evt.preventDefault();
    //recuperando o input da tarefa
    const inputTarefa = document.getElementById("Idtarefa")

    listaTarefasArray.push(inputTarefa.value);
    
    //Criando um elemento li
    let li = document.createElement("li");
    //inserindo o texto no elemento li
    li.textContent = inputTarefa.value;

    //Recuperando a lista de tarefas do HTML
    const listaTarefasUl = document.getElementById("lista-tarefa");
    // Inserindo o elemento li com texto na lista ul 
    listaTarefasUl.appendChild(li);

    //Criando o elemento botao 
    let botaoExcluir = document.createElement("button")
    //inserindo o texto no elemento  button
    botaoExcluir.textContent = " x ";
    //inserindo o botao no elemento li 
    li.appendChild(botaoExcluir);
    
    botaoExcluir.addEventListener("click", (evt)=>{

        listaTarefasArray.forEach(tarefa =>{

        if(evt.target.parentNode.textContent.split(" x ")[0] == tarefa){

            listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa))

        }
    })
        
    
        evt.target.parentNode.remove();  
         //imprimindo o array e limpando o input tarefa.
         console.log(listaTarefasArray)
    })

    
    inputTarefa.value = "";

});


