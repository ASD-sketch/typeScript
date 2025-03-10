window.onload = function () {
    function getStoredTasks() {
        var storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    }
    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function displayTasks() {
        var tasks = getStoredTasks();
        var container = document.getElementById("taskContainer");
        container.innerHTML = "";
        tasks.forEach(function (task) {
            var card = document.createElement("div");
            card.className = "task-card";
            card.innerHTML = "\n                <h3>".concat(task.title, "</h3>\n                <p>Status: ").concat(task.states, "</p>\n                <p>Start: ").concat(task.startDate, "</p>\n                <p>End: ").concat(task.endDate, "</p>\n                <button onclick=\"editTask(").concat(task.id, ")\">Edit</button>\n                <button onclick=\"deleteTask(").concat(task.id, ")\">Delete</button>\n            ");
            container.appendChild(card);
        });
    }
    function addTask(event) {
        event.preventDefault();
        var title = document.getElementById("title").value;
        var states = document.getElementById("states").value;
        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        var tasks = getStoredTasks();
        var newTask = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            title: title,
            states: states,
            startDate: startDate,
            endDate: endDate
        };
        tasks.push(newTask);
        saveTasks(tasks);
        displayTasks();
        document.getElementById("taskForm").reset();
    }
    function editTask(id) {
        var tasks = getStoredTasks();
        var taskIndex = 0;
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id)
                taskIndex = i;
            break;
        }
        var task = tasks[taskIndex];
        var newTitle = prompt("Enter new title:", task.title);
        var newStates = prompt("Enter new status:", task.states);
        var newStartDate = prompt("Enter new start date:", task.startDate);
        var newEndDate = prompt("Enter new end date:", task.endDate);
        if (newTitle && newStates && newStartDate && newEndDate) {
            task.title = newTitle;
            task.states = newStates;
            task.startDate = newStartDate;
            task.endDate = newEndDate;
            saveTasks(tasks);
            displayTasks();
        }
    }
    function deleteTask(id) {
        var tasks = getStoredTasks();
        var filteredTasks = tasks.filter(function (task) { return task.id !== id; });
        saveTasks(filteredTasks);
        displayTasks();
    }
    document.getElementById("taskForm").addEventListener("submit", addTask);
    displayTasks();
    window.deleteTask = deleteTask;
    window.editTask = editTask;
};
