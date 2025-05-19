import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { setFilter } from "../features/taskSlice";

const Filter=()=>{
    const dispatch= useDispatch<AppDispatch>();
    const filter= useSelector((state: RootState)=> state.tasks.filter);

    return(
        <div>
            <button onClick={()=> dispatch(setFilter("all"))} disabled={filter ==="all"} style={{margin: 10}}>All</button>
            <button onClick={()=> dispatch(setFilter("completed"))} disabled={filter ==="completed"} style={{margin: 10}}>Completed</button>
            <button onClick={()=> dispatch(setFilter("pending"))} disabled={filter ==="pending"} style={{margin: 10}}>Pending</button>
        </div>
    )
}

export default Filter;