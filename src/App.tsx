import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTask] = useState<string[]>([])

  const [inputField,setInputField] = useState<string>('')

  const inputOnChange =(event:ChangeEvent<HTMLInputElement>)=>{
    setInputField(event.target.value)
  }

  const removeTask =(index:number)=>{
    const temp = [...tasks]
    temp.splice(index,1)
    console.log(temp)
    setTask(temp)
  }
  const addTask =()=>{
    setTask((prev)=>([...prev, inputField]))
    setInputField('')
  }
  return (
    <div className="container">
     <div>
     <div className="flex gap">
      <input type="text" value={inputField} onChange={inputOnChange}/>
      <button onClick={addTask}>Add</button>
    </div>
    <div>
      <ul>
        {tasks.map((el,index)=><li key={index} className="flex gap items-center">
          {el}
          <button className="red" onClick={()=>removeTask(index)}>Remove</button>
        </li>)}
      </ul>
    </div>
     </div>
    </div>
  );
}

export default App;
