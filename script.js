//-------------selectors------------------------//
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list')


//------------------event listeners-----------------//
todoButton.addEventListener('click' , addTodo);
todoList.addEventListener('cilck' , deleteCheck);
// filterOption.addEventListener('click' , filterTodo);


//---------------functions---------------------//
//todo function 
function addTodo(e){
    e.preventDefault();
    const emp = todoInput.value;
    if (emp === "") {
        alert('please enter a todo');
        return false;
    }
    else {
     const todoDiv = document.createElement('div');
     todoDiv.classList.add('todo');
     todoList.appendChild(todoDiv);

     const newTodo = document.createElement('li');
     newTodo.innerHTML = emp;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);

     const checkButton = document.createElement('button');
     checkButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
     checkButton.classList.add('check-btn');
     todoDiv.appendChild(checkButton);

     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
     trashButton.classList.add('trash-btn');
     todoDiv.appendChild(trashButton);

     todoInput.value = "";
    } 
}

//deletecheck 
function deleteCheck(e){
    const item = e.target;
    if (item.classList[0] === 'check-btn'){
        alert('checked')
    }
    if (item.classList[0] === 'trash-btn'){
        alert('deleted')
    }
}

