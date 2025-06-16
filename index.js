// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')



//  add an EventListeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

// Functions this function is called when sth happened 
// and the thing that happens is called event 
function addTodo(event){

    event.preventDefault();
// TODO DIV
const todoDiv = document.createElement('div')
todoDiv.classList.add('todo')
// Create LI
const newTodo = document.createElement('li')

// to safely show user tasks innerText
newTodo.innerText = todoInput.value;

newTodo.classList.add('todo-item')
todoDiv.appendChild(newTodo) 


// CHECKMARK BUTTON
const completedButton = document.createElement('button')
completedButton.innerHTML = 'C';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton)


// trash buttn

const trashButton = document.createElement('button')
trashButton.innerHTML = 'D';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton)

// APPEND TO LIST
todoList.appendChild(todoDiv)
// clear TODO INPUT VALUE

todoInput.value = ""

}


function deleteCheck(e)
{
    const item = e.target;

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;

        // Animation
        todo.classList.add("fall")
        todo.addEventListener('transitioned', function() {
            todo.remove();

        })
    }


    // CHECKMARK
//  checkmark
if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed-btn")
}
}