import React from 'react';
import {useState} from "react";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

export default function App() {

  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idCount, setIdCount] = useState(0);

  function addItem(item){
    let temp = items;
    temp.push({id: idCount, value: item, checked: false});
    setItems(temp);
    setIdCount(idCount+1)
    setShowModal(false);
  }

  function deleteItem(item){
    let temp = [...items];
    const index = temp.findIndex(x => x.id === item.id);
    if (index > -1) {
      temp.splice(index, 1);
      setItems(temp);
    }
  }

  function checkItem(item){
    let temp = [...items];
    const index = temp.findIndex(x => x.id === item.id);
    if (index > -1) {
      temp[index].checked = !temp[index].checked;
      setItems(temp);
    }

  }


  return (
    
    <div className="container center">
      <h1 className="center title">Ineffable To-do</h1>
      <div className="flow-right controls">
        <span>Item count: {" "} {items.length}</span>
        <span>
          Unchecked count:
          {" "}
          {items.filter(item=> !item.checked).length}
        </span>
      </div>
      <button className="button center" onClick={()=>setShowModal(true)}>New TODO</button>
      <TodoList items={items} setItems={setItems} deleteItem={deleteItem} checkItem={checkItem}/>
      <Modal addItem={addItem} showModal={showModal} setShowModal={setShowModal}/>   
    </div>
  );
}

