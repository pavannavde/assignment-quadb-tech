
import { ADD_TODO, DELETE_TODO } from "../action/actionType";


const initialState = JSON.parse(localStorage.getItem("data")) || [] ;

const todoReducer = (state = initialState, action) => {
    if(action.type === ADD_TODO){
       return [...state, action.payload]
    }
    else if(action.type === DELETE_TODO){
        return state.filter(todo => todo.id !== action.payload)
    }
    else{
        return state;
    }
}

export default todoReducer

