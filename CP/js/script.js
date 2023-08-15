let tasks = [];

function addTask() {
    const description = document.getElementById("description").value;
    const author = document.getElementById("author").value;
    const department = document.getElementById("department").value;
    const importance = parseInt(document.getElementById("importance").value);

    const task = {
        description: description,
        author: author,
        department: department,
        importance: importance,
        value: null,
        duration: null
    };

    tasks.push(task);
    displayTasks();
    clearInputFields();
}

function removeCompletedTasks() {
    tasks = tasks.filter(task => task.value !== null || task.duration !== null);
    displayTasks();
}

function displayTasks() {
    const table = document.getElementById("taskTable");
    table.innerHTML = `
        <tr>
            <th>Descrição</th>
            <th>Autor</th>
            <th>Departamento</th>
            <th>Importância</th>
            <th>Valor</th>
            <th>Duração</th>
        </tr>
    `;

    tasks.forEach(task => {
        const row = table.insertRow();
        row.insertCell(0).innerHTML = task.description;
        row.insertCell(1).innerHTML = task.author;
        row.insertCell(2).innerHTML = task.department;
        row.insertCell(3).innerHTML = task.importance;
        row.insertCell(4).innerHTML = task.value || "-";
        row.insertCell(5).innerHTML = task.duration || "-";
    });
}

function sortByImportance() {
    tasks.sort((a, b) => b.importance - a.importance);
    displayTasks();
}

function clearInputFields() {
    document.getElementById("description").value = "";
    document.getElementById("author").value = "";
    document.getElementById("department").value = "";
    document.getElementById("importance").value = "";
}



