let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    
    if (task !== "") {
        tasks.push(task);
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(){
    const removeTask=document.getElementById("taskInput");
    const task= taskInput.value.trim();

    if(task !== ""){
        tasks.pull(task);
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}
