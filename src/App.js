import React, { useState } from "react";
import "./App.css"
import TodoList from "./TodoList";

const App =()=>{
    const [inputList, setInputList]= useState("");
    const [Items, setItems]= useState([]);

    const itemEvent =(event) =>{
        setInputList(event.target.value);
    };

    const addItem = () =>{
      if (inputList!==""){
        setItems((oldItems)=>{
            return [...oldItems, inputList]
        });
        setInputList("");
      }
      else{
        alert("Input box is Empty")
        console.log("Insert Valid Input")
      }
    }
    const deleteItem = (id) =>{
        console.log(`item No. ${id+1} deleted`)
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index) => {
                return index!==id;
            });
        });
    };
    const handler = (event) => {
      // changing the state to the name of the key
    // which is pressed
    console.log(event.key);
    if(event.key==="Enter"){
      addItem();
    }
  };
    

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>Todo</h1>
                    <br/>
                    <input type="text" placeholder="Add Item" onChange={itemEvent} value={inputList} onKeyPress={(e) => handler(e)} />
                    {/* <button onClick={addItem}>+</button> */}

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {Items.map((itemval, index) =>{
                            return <TodoList val={itemval} key={index} id={index} onSelect={deleteItem}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;