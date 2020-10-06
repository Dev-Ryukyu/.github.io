// Define UI Vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector("#task")

// Load event listeners
loadEventListeners();

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit',addTask);

    // Remove task
    taskList.addEventListener('click',removeTask)

    clearBtn.addEventListener('click',clearTasks)

    filter.addEventListener('keyup',filterTasks)
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task')
    }
    // Create element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append(add) to li
    li.appendChild(document.createTextNode(taskInput.value))
    taskInput.value = '';
    // Add new link element (x to delete task)
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon 
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    // Add link to the li
    li.appendChild(link);

    // Add li to ul
    taskList.appendChild(li)

    e.preventDefault();
}

//  Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?'))
        e.target.parentElement.parentElement.remove();
    }
}
function clearTasks(e){
    // Slower
    //taskList.innerHTML = '';

    //Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

// Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
    });
}