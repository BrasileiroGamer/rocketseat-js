var list = document.getElementById('list');
var input = document.getElementById('input');
var button = document.getElementById('button');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

function add(name) {
    var todo = document.createElement('li');
    var todoText = document.createTextNode(name);

    var remove = document.createElement('a');
    remove.setAttribute('href', '#');
    remove.setAttribute('onclick', 'deleteTodo(' + todos.indexOf(todo) + ')');
    var removeText = document.createTextNode(' Excluir');

    remove.appendChild(removeText);

    todo.appendChild(todoText);
    todo.appendChild(remove);

    list.appendChild(todo);
}

function renderTodos() {
    list.innerHTML = '';

    for (todo of todos) {
        add(todo);
    }
}

renderTodos();

function addTodo() {
    if (input.value.trim() != '') {
        todos.push(input.value);
        input.value = '';
        renderTodos();
        saveToStorage();
    } else {
        alert('Preencha o campo!');
    }
}

button.onclick = addTodo;

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
