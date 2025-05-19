import type {Task} from '../types';

let mockTask: Task[]= [
    {id: 1, title: "First Task", completed: false}
]

export const fetchTasks= async(): Promise<Task[]> => {
    return new Promise((res)=> setTimeout(()=> res([...mockTask]), 500))
};

export const addTaskAPI= async(task: Task): Promise<Task> => {
mockTask.push(task);
return new Promise(res => setTimeout(()=> res(task), 500))
}

export const deleteTaskAPI= async(id: number): Promise<number>=> {
    mockTask= mockTask.filter(task=> task.id !== id)
    return new Promise(res => setTimeout(()=> res(id), 500))
}
