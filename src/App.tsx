import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTasks } from "./features/taskSlice";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import type { AppDispatch } from "./store";
import Filter from "./components/Filter";


const App=()=>{
  const dispatch= useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(loadTasks())
  }, [dispatch])

  return(
    <div style={{padding: 30}}>
      <h1>Todo List</h1>
      <TaskInput/>
      <Filter />
      <TaskList/>
    </div>
  )
}

export default App;