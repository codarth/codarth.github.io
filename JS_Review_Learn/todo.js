// Gained Access to DOM elements
let addButton = document.getElementById("addButton"); //Add new task button
let taskInput = document.getElementById("new-task"); //Add new task input field
let incompleteTasksHolder = document.getElementById('incomplete-tasks'); //Incomplete tasks
let completedTasksHolder = document.getElementById('completed-tasks'); //Completed tasks

const maxTasks = 5;
let numTasks = 2;

let createNewTaskElement = function(taskString) {
    console.log(taskString);
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    let editInput = document.createElement('input');
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    
    label.innerText = taskString;

    checkBox.type = 'checkbox';

    editInput.type = 'text';

    editButton.innerText = 'Edit';
    editButton.className = 'edit';

    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
};

let addTask = function() {
    var listItem = createNewTaskElement(taskInput.value);
    if(numTasks < maxTasks) {
        incompleteTasksHolder.appendChild(listItem)
        
        numTasks++;

        bindTaskEvents(listItem, taskCompleted);
        taskInput.value = "";
    } else {
        alert("You have reached the maximum number of tasks of 5.\nPlease delete a task to add a new one.");
    }
};

addButton.onclick = addTask;


let editTask = function() {
    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");
    if(containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
};

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    numTasks--;
};

let taskCompleted = function() {
    let listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
};
let taskIncomplete = function() {
    let listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
};

for(let i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(let i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}