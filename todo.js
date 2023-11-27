function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(task);
    taskInput.value = "";
}

function removeTask(button) {
    var task = button.parentNode;
    task.parentNode.removeChild(task);
}
