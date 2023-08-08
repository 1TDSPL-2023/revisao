
let listaTarefasArray = []

const botaoAdicionarTarefa = document.getElementById("btnAddTarefa")

botaoAdicionarTarefa.addEventListener("click", (evento)=>{
    
    evento.preventDefault();
    
    const inputTarefa = document.getElementById("idTarefa");

    listaTarefasArray.push(inputTarefa.value);

    let li = document.createElement("li");
    li.textContent = inputTarefa.value;

    const listaTarefasUL = document.getElementById("lista-tarefas");
    listaTarefasUL.appendChild(li);

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evento)=>{

        listaTarefasArray.forEach(tarefa=>{
            
            if(evento.parentNode.textContent.split(" ")[0] == tarefa){
                listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1)
            }
        })

        evento.target.parentNode.remove();
        console.log(listaTarefasArray);

    })


    inputTarefa.value = "";
    
});









