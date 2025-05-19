import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { toggleComplete, deleteTask } from "../features/taskSlice";

const TaskList=()=> {
    const {tasks, filter}= useSelector((state: RootState)=> state.tasks);
    const dispatch= useDispatch<AppDispatch>();
    const filteredTasks= tasks.filter(task=> {
        if(filter=== "completed") return task.completed;
        if(filter=== "pending") return !task.completed;
        return true;
    })

    return(
        <ul>
            {filteredTasks.map(task=> (
                <div style={{padding: 20, display: "flex", justifyContent: "left"}}>
                    <li key={task.id}>
                    <input type="checkbox" checked={task.completed} onChange={()=> dispatch(toggleComplete(task.id))} />
                    <div style={{textDecoration: task.completed? "line-through" : "none"}}>
                        {task.title}
                    </div>
                    <button onClick={()=> dispatch(deleteTask(task.id))}> Delete </button>
                    </li>
                </div>
                
            ))}
        </ul>
    )
}

export default TaskList;