//Todos from our web page
const todos = document.querySelector(".todo__items");

//input value
const input = document.querySelector(".add__form input");

//Add todo button
const button = document.querySelector(".add__form button");

button.addEventListener("click", addTodo);

function addTodo(e) {
    e.preventDefault();
    if(!input.value) {
        console.log("Input a value");
    } else {
        createTodo(input.value);
        input.value = "";
    }
}

function createTodo(todo) {
    //Create a new list item
    const newTodo = document.createElement("li");
    //Give it a class name
    newTodo.classList.add("todo__item");

    newTodo.innerText = todo;
    //Alt
    // newTodo.className += "todo__item";
    const deleteBtn = document.createElement("button");

    //Add evenet lister
    deleteBtn.addEventListener("click", deleteListItem);
    deleteBtn.innerText = "X";
    deleteBtn.className += "delete__todo";
    newTodo.append(deleteBtn);

    todos.append(newTodo);

}

function deleteListItem(e) {
    const deleteLI = e.target.parentNode;
    if(confirm("Do you wish to delete this item?")) {
        todos.removeChild(deleteLI);
    }
}


