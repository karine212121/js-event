const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('todo-title').value;
    const text = document.getElementById('todo-text').value;


createTodoItem(title,text);

document.getElementById('todo-title').value = ' ';
document.getElementById('todo-text').value = ' ';

todoList.classList.remove('hidden')
});


function createTodoItem(title, text) {
    const todoItem =document.createElement('div');
    todoItem.className = 'todo-item';

    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.style.textAlign = 'center';

    const textElement = document.createElement('div');
    textElement.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
        todoItem.remove();
        if (todoList.children.length ===0) {
            todoList.classList.add('hidden')
        }
    })
    todoItem.appendChild(titleElement);
    todoItem.appendChild(textElement);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}


