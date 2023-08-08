// Declarar a lista de tarefas vazias 
let listaTarefasArray = []; 

// Recuperando o botão addTarefa
const botaoAdicionaTarefa = document.getElementById("btnAddTarefa"); 

// Inserindo um listener de click no botão addTarefa
botaoAdicionaTarefa.addEventListener("click", (evento)=>{ // O evento é o cod que prepara a ação
    evento.preventDefault(); 

// Recuperando o input da tarefa 
    const inputTarefa = document.getElementById("idTarefa");

// Inserindo no array com o método push o valor digitado no input
    listaTarefasArray.push(inputTarefa.value); 

// Criando um elemento li
    let li = document.createElement("li"); 
// Inserindo p texto no elemento li
    li.textContent = inputTarefa.value; 

// Recuperando a lista de tarefas do HTML
    const listaTarefasUL = document.getElementById("lista-tarefa"); 
// Inserindo o elemento li com texto na lista ul: 
    listaTarefasUL.appendChild(li); // append = ele cria um filho para o elemento

// Criando o elemento botao 
    let botaoExcluir = document.createElement("button"); 

// Inserindo um texto no botao 
    botaoExcluir.textContent = " x "; 

// Inserindo o elemento botão com o texto no elemento li: 
    li.appendChild(botaoExcluir); 

//
    botaoExcluir.addEventListener("click", (evento)=>{ 

        if(evento.target.parentNode.textContent.split(" ")[0] == tarefa){
            listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1) // indexof = 
        }
        evento.target.parentNode.remove();  

        // Imprimindo o array e limpando o input tarefa
    console.log(listaTarefasArray); 
    })

    inputTarefa.value = ""; 

}); 

