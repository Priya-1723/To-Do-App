const input_box = document.querySelector("#input-box");
const addTaskBtn = document.querySelector(".addBtn");
const list_container = document.querySelector("#list-container")

function addTask(){
    if(!input_box.value.trim()){
        alert("Please enter your task.")
    } else {
        // Create a new task item
        let li = document.createElement('li');
        li.innerHTML = input_box.value;
        list_container.appendChild(li)

        // Add a delete button
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    // Clear the input field
    input_box.value = ''
    saveData();
}

// Attach the addTask function to the button click
addTaskBtn.addEventListener('click', addTask)

// Handle task interactions (check/uncheck and delete)
list_container.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

// Save data to local storage
function saveData() {
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask(){
    list_container.innerHTML = localStorage.getItem("data")
}
showTask();