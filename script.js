```javascript
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

const tasksContainer = document.querySelector(".tasks");

const completedTasks = document.querySelector(".card:nth-child(2) p");
const pendingTasks = document.querySelector(".card:nth-child(3) p");
const progress = document.querySelector(".card:nth-child(4) p");


// Update task statistics
function updateProgress() {

    const checkboxes = document.querySelectorAll(".task input");

    const totalTasks = checkboxes.length;

    let completed = 0;

    checkboxes.forEach(function (checkbox) {

        if (checkbox.checked) {
            completed++;
        }

    });

    const pending = totalTasks - completed;

    let percentage = 0;

    if (totalTasks > 0) {
        percentage = Math.round((completed / totalTasks) * 100);
    }

    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
    progress.textContent = percentage + "%";
}


// Add new task
addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    const newTask = document.createElement("div");

    newTask.classList.add("task");


    newTask.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
    `;


    tasksContainer.appendChild(newTask);


    const checkbox = newTask.querySelector("input");

    checkbox.addEventListener("change", updateProgress);


    taskInput.value = "";


    updateProgress();

});


// Update statistics when existing tasks are checked
const existingCheckboxes = document.querySelectorAll(".task input");

existingCheckboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", updateProgress);

});


// Run when page loads
updateProgress();
```
