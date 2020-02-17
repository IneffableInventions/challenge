import React from 'react';
import {useState} from "react";


export default function Modal({showModal, setShowModal, addItem}) {

const [input, setInput] = useState("");


if(showModal){
    return (
        <div id="inputModal" className="modal" style={{display: "block"}}>
            <div className="modal-content center">
                <div>
                    <span onClick={()=>setShowModal(false)} id="closeModal" className="close" style={{textAlign: "right"}}>x</span>
                    <h4>Insert the new todo</h4>

                </div>
                
                <input type="text" id="inputValue" value={input} onChange={e=>setInput(e.target.value)}/>
                <button className="button button-todo" style={{backgroundColor: "rgb(76,175,80)"}} onClick={()=>{
                    if(input){
                        addItem(input);
                        setInput("");
                    }
                    else{
                        alert("The todo can't be empty.")
                    }
                }}>Create</button>
            

            </div>
            
            
        </div>
      );

}
else return null;
   


}
