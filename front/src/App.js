import React from "react";
import "./App.css";

class ToDoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_count: 0,
      uncheked_count: 0,
      toDo_items: [],
      isCreatingTodo: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  showInputModal() {
    this.setState({
      isCreatingTodo: true
    });
  }

  closeModal() {
    this.setState({
      isCreatingTodo: false
    });
  }

  addTodoItem(text) {

    if (!text){
      this.closeModal();
      return;
    }

    const new_todo_items = this.state.toDo_items.concat(
      {
        text: text,
        check: false
      });

    this.setState({
      toDo_items: new_todo_items,
      item_count: new_todo_items.length,
      uncheked_count: this.state.uncheked_count + 1,
      isCreatingTodo: false
    });
  }


  deleteTodoItem(id){
    
    let count = this.state.toDo_items[id].check ? 0 : -1;

    const new_todo_items = this.state.toDo_items.slice();
    new_todo_items.splice(id, 1);

    this.setState({
      toDo_items: new_todo_items,
      item_count: new_todo_items.length,
      uncheked_count: this.state.uncheked_count + count,
    });

  }

  handleCheckEvent(index) {
    const new_todo_items = this.state.toDo_items.slice();
    let current_state = new_todo_items[index].check;
    new_todo_items[index] = {...new_todo_items[index], check: !current_state};

    let count = current_state ? 1 : -1;

    this.setState({
      toDo_items: new_todo_items,
      uncheked_count: this.state.uncheked_count + count,
    });

  }

  render() {
    /* Creando los elementos de la lista */
    const todo_items = this.state.toDo_items.map((todo_item, index) => {
      return (
        <li key={index} className="todo-container">
          <div>
            <input type="checkbox" className="todo-checkbox" checked={todo_item.check} onChange={() => this.handleCheckEvent(index)} />
            {todo_item.text}
            <button className="todo-delete" onClick={() => this.deleteTodoItem(index)}>X</button>
          </div>
        </li>
      );
    });

    /* Renderizando junton a los elemntos de la lista creados */
    return (
      <div className="ToDoListApp">
        <div className="container center">
          <h1 className="center title"> Ineffable To-do</h1>
          <Controls
            item_count={this.state.item_count}
            uncheked_count={this.state.uncheked_count}
          />
          <button
            className="button center"
            onClick={() => this.showInputModal()}
          >
            New TODO
          </button>
          <ul id="todo-list" className="todo-list">{todo_items}</ul>
        </div>
        <TodoModal
          show={this.state.isCreatingTodo}
          closeModal={this.closeModal}
          addTodoItem={this.addTodoItem}
        />
      </div>
    );
  }
}

function Controls(props) {
  return (
    <div className="flow-right controls">
      <span>Item count: {props.item_count}</span>
      <span>Uncheked count {props.uncheked_count}</span>
    </div>
  );
}

class TodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_text: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      current_text: event.target.value
    });
  }

  addTodoItem(text){
    this.props.addTodoItem(text);
    this.setState({
      current_text: ""
    });
  }

  render() {
    return (
      <div
        id="inputModal"
        className="modal"
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div className="modal-content center">
          <div>
            <span
              className="close"
              id="closeModal"
              onClick={() => this.props.closeModal()}
            >
              ×
            </span>
            <h4>Insert the new todo</h4>
          </div>
          <input
            type="text"
            value={this.state.current_text}
            onChange={this.handleChange}
            id="inputValue"
          />
          <button
            className="button button-todo"
            onClick={() => this.addTodoItem(this.state.current_text)}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoListApp;
