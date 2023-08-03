import React from 'react'
import "./App.css"
 
const TodoList = (props) =>{
    

    
    return (
        <div className='innerlistdiv'>
            
            <button className="removeBtn" onClick={()=>{
                props.onSelect(props.id)
            }}>X</button>
            <li>{props.id+1} : {props.val}</li>
            
        </div>
        
        )
}

export default TodoList;