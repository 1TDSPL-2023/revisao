function adicionar() {
    let adicionarTarefa = document.getElementById("adicionarTarefa").value;
    let list = document.getElementById("listaTarefas");
    const novoItem = document.createElement("li");

    novoItem.appendChild(document.createTextNode(adicionarTarefa));
    list.appendChild(novoItem);
    document.getElementById("adicionarTarefa").value = "";
}