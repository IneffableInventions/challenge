import React from 'react';


export default function TodoListItem({item, checkItem, deleteItem}) {
  return (
  <div>
  <input className="todo-checkbox" style={{cursor: "pointer"}} type="checkbox" checked={item.checked} onChange={()=>checkItem(item)} />
  {item.value}
  <button className="todo-delete" style={{float: "right", backgroundColor: "rgb(244,67,54)"}} onClick={()=>{
    deleteItem(item);
  }}>X</button>

  </div>
  );
}


