document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            ${taskText}
            <button class="deleteButton">Remover</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Limpa o campo de entrada

        // Adiciona funcionalidade de remoção
        taskItem.querySelector('.deleteButton').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    }
});