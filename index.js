


const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

const tasks = [];
addTaskBtn.addEventListener('click', () =>{
    const taskText = taskInput.value

    if(taskText === "") {
        alert("please enter task")
        return
    }

    tasks.push(taskText)
   

    const li = document.createElement('li')
    li.textContent = taskText;





const dBtn = document.createElement('button')
 dBtn.textContent = 'Delete'
dBtn.addEventListener('click', () =>{
     li.remove()
})


const editBtn = document.createElement('button')
editBtn.textContent = 'Edit'

editBtn.addEventListener('click', () => {
    const newText = prompt("Edit your task:" , li.textContent)
    if(newText !== ''){
        li.textContent = newText;
        li.appendChild(editBtn)
    }
})
   





 li.appendChild(dBtn)
 taskList.appendChild(li)
    taskInput.value = ""


})