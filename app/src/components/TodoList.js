import React from 'react';

import TodoListItem from "./TodoListItem";


export default function TodoList({items, setItems, checkItem, deleteItem}) {
  return (
    
    <ul id="todo-list" className="todo-list">
        {
            items.map(item=>{
            return<li className="todo-container" key={item.id}><TodoListItem item={item} checkItem={checkItem} deleteItem={deleteItem}/></li>
           })  
        }      
    </ul> 
  );
}


