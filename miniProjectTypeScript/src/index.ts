interface Task {
    id: number;
    title: string;
    states: string;
    startDate: string;
    endDate: string;
}

window.onload = () => {

    function getStoredTasks(): Task[] {
        let storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    }

    function saveTasks(tasks: Task[]): void {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function displayTasks(): void {
        let tasks = getStoredTasks();
        let container = document.getElementById("taskContainer")!;
        container.innerHTML = "";

        tasks.forEach(task => {
            let card = document.createElement("div");
            card.className = "task-card";
            card.innerHTML = `
                <h3>${task.title}</h3>
                <p>Status: ${task.states}</p>
                <p>Start: ${task.startDate}</p>
                <p>End: ${task.endDate}</p>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            container.appendChild(card);
        });
    }

    function addTask(event: Event) {
        event.preventDefault();

        let title = (document.getElementById("title") as HTMLInputElement).value;
        let states = (document.getElementById("states") as HTMLInputElement).value;
        let startDate = (document.getElementById("startDate") as HTMLInputElement).value;
        let endDate = (document.getElementById("endDate") as HTMLInputElement).value;

    

        let tasks = getStoredTasks();
        let newTask: Task = { 
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1, 
            title, 
            states, 
            startDate, 
            endDate 
        };

        tasks.push(newTask);
        saveTasks(tasks);
        displayTasks();

        (document.getElementById("taskForm") as HTMLFormElement).reset();
    }

    function editTask(id: number) {
        let tasks = getStoredTasks();
        let taskIndex = 0;

        for(let i=0;i<tasks.length;i++)
        {
            if(tasks[i].id==id)
                taskIndex = i;
            break;
        }

        let task = tasks[taskIndex]
        let newTitle = prompt("Enter new title:", task.title);
        let newStates = prompt("Enter new status:", task.states);
        let newStartDate = prompt("Enter new start date:", task.startDate);
        let newEndDate = prompt("Enter new end date:", task.endDate);

        if (newTitle && newStates && newStartDate && newEndDate) {
            task.title = newTitle;
            task.states = newStates;
            task.startDate = newStartDate;
            task.endDate = newEndDate;
            saveTasks(tasks);
            displayTasks();
        }
    }

    function deleteTask(id: number) {
        let tasks = getStoredTasks();
        let filteredTasks = tasks.filter(task => task.id !== id);
        saveTasks(filteredTasks);
        displayTasks();
    }

    document.getElementById("taskForm")!.addEventListener("submit", addTask);

    displayTasks();

(window as any).deleteTask = deleteTask;
(window as any).editTask = editTask;

};
