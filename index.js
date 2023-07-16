let TiTle = document.createElement("h2");
TiTle.innerHTML = `Local Storage To Do List`
let input = document.createElement("input");
input.setAttribute("type", "text")
let button = document.createElement("button");
button.innerHTML = `Add`
button.setAttribute("id", "add");
let Tasks = document.createElement("div");
document.body.append(TiTle, input, button, Tasks);



button.onclick = function () {
    if (input.value !== "") {
        addValueToArray(input.value);
        input.value = "";
    }
}



window.onload = () => {
    const localTasks = window.localStorage.getItem("Tasks");
    if (localTasks !== null) {
        const parsedTasks = JSON.parse(localTasks);
        for (let i = 0; i < parsedTasks.length; i++) {
            addValueToArray(parsedTasks[i]);
        }
    }
};

const arrayOfTasks = [];




function addValueToArray(Task) {
    arrayOfTasks.push(Task);
    console.log(arrayOfTasks);
    addTasktoDiv();
    saveTasks();
}

function addTasktoDiv() {
    if (Tasks.hasChildNodes = true) {
        Tasks.innerHTML = "";
    }
for (let i = 0; i < arrayOfTasks.length; i++) {
    let OneTask = document.createElement("div");
    OneTask.setAttribute("id", "child")
    Tasks.appendChild(OneTask);
    let TaskBtn = document.createElement("button");
    OneTask.innerHTML = arrayOfTasks[i];
    OneTask.appendChild(TaskBtn);
    TaskBtn.innerHTML = "X";
    TaskBtn.addEventListener("click", function () {
        removeTaskFromArray(arrayOfTasks[i]);
    });
}
window.localStorage.setItem("Tasks", arrayOfTasks)
}

function saveTasks() {
    window.localStorage.setItem("Tasks", JSON.stringify(arrayOfTasks));
}

function removeTaskFromArray(task) {
    const index = arrayOfTasks.indexOf(task);
    if (index > -1) {
        arrayOfTasks.splice(index, 1);
    }
    addTasktoDiv();
    saveTasks();
}