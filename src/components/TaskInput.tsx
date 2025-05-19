import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { addTask } from "../features/taskSlice";

let idCounter= 2;
const TaskInput=()=>{
    const[title, setTitle]= useState('');
    const dispatch= useDispatch<AppDispatch>();

    const handleAdd=()=>{
        if(title.trim()){
            dispatch(addTask({id: idCounter++, title, completed: false}))
            setTitle('');
        }
    }
    return(
        <div>
            <input type="text" placeholder="Add Task..." value={title} onChange={e=> setTitle(e.target.value)} />
            <button onClick={handleAdd} style={{margin: 30 }}> Add </button>
        </div>
    )
}

export default TaskInput;