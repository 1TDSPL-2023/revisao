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

    let li = document.createElement("li"); 
    li.textContent = inputTarefa.value; 
    

// Imprimindo o array e limpando o input tarefa
    console.log(listaTarefasArray); 
    inputTarefa.value = ""; 

}); 

