import { ADD_TODO,DELETE_TODO} from "./actionType";



export const add_todo  = (newTodo)=>{
   return{
         type: ADD_TODO,
         payload: newTodo
   }
}

export const delete_todo = (todo_id)=>{
   return{
            type: DELETE_TODO,
            payload: todo_id
   }
}
