import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../types";
import { fetchTasks, addTaskAPI, deleteTaskAPI } from "./taskAPI";

type FilterType= "all" | "completed" | "pending"

interface TaskState {
    tasks: Task[];
    loading: false;
    filter: FilterType
}

const initialState: TaskState={
    tasks: [],
    loading: false,
    filter: "all"
}

export const loadTasks= createAsyncThunk("tasks/load", fetchTasks)
export const addTask= createAsyncThunk("tasks/add", addTaskAPI)
export const deleteTask= createAsyncThunk("tasks/delete", deleteTaskAPI)

const taskSlice= createSlice({
    name: "tasks",
    initialState,
    reducers: {
        toggleComplete: (state, action: PayloadAction<number>)=>{
            const task= state.tasks.find(task => task.id === action.payload)
            if(task) task.completed= !task.completed
        },
        setFilter: (state, action: PayloadAction<FilterType>) => {
            state.filter= action.payload;
        },
    }, 
    extraReducers: (builder) => {
        builder.addCase(loadTasks.fulfilled, (state, action)=> {
                state.tasks= action.payload;
               })
               .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload)
               })
               .addCase(deleteTask.fulfilled, (state, action)=> {
                state.tasks= state.tasks.filter(task=> task.id !== action.payload)
               })
    }
});

export const {toggleComplete, setFilter}= taskSlice.actions;
export default taskSlice.reducer;