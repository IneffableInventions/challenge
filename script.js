// Author: Gabriel Leonardo Pinto Pineda

const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
let todoInput;
let todoModal;
let unchecked = 0;
let itemCount = 0;
const toDoList = [];
let todoObject = {
  value: "",
  check: false
};

function newTodo() {
  // Show the modal for starting the process of creating a new TODO
  todoModal.style.display = "block";
}

function addTodo() {
  var input = todoInput.value;
  if (input !== "") {
    var newTodo = Object.assign({}, todoObject);
    newTodo.value = input;
    toDoList.push(newTodo);
    itemCount++;
    unchecked++;
    itemCountSpan.innerHTML = itemCount;
    uncheckedCountSpan.innerHTML = unchecked;
    displayNewTodo();
    todoInput.value = "";
    todoModal.style.display = "none";
  } else {
    alert("The todo can't be empty.");
  }
}

function displayNewTodo() {
  var todoLi = document.createElement("li");
  var todoItem = document.createElement("div");
  var check = document.createElement("input");
  var deleteB = document.createElement("button");
  var position = toDoList.length - 1;

  check.type = "checkbox";
  check.className = classNames.TODO_CHECKBOX;

  todoLi.className = classNames.TODO_ITEM;
  check.style.cursor = "pointer";

  check.onclick = function() {
    if (check.checked) {
      unchecked--;
      uncheckedCountSpan.innerHTML = unchecked;
    } else {
      unchecked++;
      uncheckedCountSpan.innerHTML = unchecked;
    }
  };

  deleteB.innerHTML = "X";
  deleteB.style.float = "right";
  deleteB.className = classNames.TODO_DELETE;
  deleteB.style.backgroundColor = "#f44336";

  deleteB.onclick = function() {
    delete toDoList[position];
    list.removeChild(todoLi);
    itemCount--;
    itemCountSpan.innerHTML = itemCount;
    if(!check.checked) {
      unchecked--;
      uncheckedCountSpan.innerHTML = unchecked;
    }
  };

  todoItem.appendChild(check);
  todoItem.appendChild(document.createTextNode(toDoList[position].value));
  todoItem.appendChild(deleteB);

  todoLi.appendChild(todoItem);
  list.appendChild(todoLi);
}

function createInput() {
  // Creation of html elements
  let modal = document.createElement("div");
  let modalHeader = document.createElement("div");
  let modalContent = document.createElement("div");
  let span = document.createElement("span");
  let title = document.createElement("h4");
  let input = document.createElement("input");
  let buttonCreate = document.createElement("button");

  // Modal definition
  modal.id = "inputModal";
  modal.className = "modal";

  // Content of modal definition
  modalContent.className = "modal-content center";

  // Span definition
  span.className = "close";
  span.id = "closeModal";
  span.innerHTML = "&times;";
  span.style.textAlign = "right";

  // Input box definition
  input.type = "text";
  input.id = "inputValue";

  // Title definition
  title.innerHTML = "Insert the new todo";

  // Button definition
  buttonCreate.className = "button button-todo";
  buttonCreate.style.backgroundColor = "#4CAF50";
  buttonCreate.innerHTML = "Create";
  buttonCreate.onclick = addTodo;

  // Elements are added to the corresponding elements
  modalHeader.appendChild(span);
  modalHeader.appendChild(title);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(input);
  modalContent.appendChild(buttonCreate);
  modal.appendChild(modalContent);

  // The modal is added to the current doc
  document.body.appendChild(modal);

  // Definition of useful objects
  todoInput = document.getElementById("inputValue");
  todoModal = document.getElementById("inputModal");

  // Function for when the modal is closed
  span.onclick = function() {
    todoModal.style.display = "none";
    todoInput.value = "";
  };
}

window.onload = createInput;
