// Select all task checkboxes
const checkboxes = document.querySelectorAll(".task input");

const completedTasks = document.querySelector(".card:nth-child(2) p");
const pendingTasks = document.querySelector(".card:nth-child(3) p");
const progress = document.querySelector(".card:nth-child(4) p");

function updateProgress() {

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


// Add click event to every checkbox

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        updateProgress();

    });

});


// Run once when page loads

updateProgress();
