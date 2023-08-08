// function adicionar() {
//     let adicionarTarefa = document.getElementById("adicionarTarefa").value;
//     let list = document.getElementById("listaTarefas");
//     const novoItem = document.createElement("li");

//     novoItem.appendChild(document.createTextNode(adicionarTarefa));
//     list.appendChild(novoItem);
//     document.getElementById("adicionarTarefa").value = "";
// }


//Declarar a lista de tarefas vazia
let listaTarefasArray = [];

const botaAdicionaTarefa = document.getElementById("btnAddTarefa");

botaAdicionaTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();

    const inputTarefa = document.getElementById("idTarefa");

    //Inserindo no array com o método push o valor digitado no input.
    listaTarefasArray.push(inputTarefa.value);
    let li = document.createElement("li");
   
    li.textContent = inputTarefa.value;
    const listaTarefasUL = document.getElementById("lista-tarefa");
    listaTarefasUL.appendChild(li);

    //Criando o elemento botao
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " x ",
    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evento)=>{

        listaTarefasArray.forEach(tarefa=>{
            if (evento.target.parentNode.textContent.split(" ")[0] == tarefa){
                listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1)
            }
        })

        evento.target.parentNode.remove();
        
        //Imprimindo o array e limpando o input tarefa.
        console.log(listaTarefasArray);
    })
    inputTarefa.value = "";
});

