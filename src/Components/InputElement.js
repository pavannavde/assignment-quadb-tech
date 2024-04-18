import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_todo } from '../redux/action/todoActions';

const InputElement = () => {
  const [todoText, setTodoText] = useState('')
  const dispatch = useDispatch();


  //function to handle change in input
  const handleChange = (e) => {
    setTodoText(e.target.value)
  }


  //function to handle click on add button 
  const handleClick = () => {
    //create a id 
    const id = Math.floor(Math.random() * 1000)
    console.log(id)
    //create a object
    const obj = {
        id: id,
        text: todoText
    }
    //dispatch the action
    dispatch(add_todo(obj));
    setTodoText('');
  }


  return (
    <div className='inputEle'>
      <input type="text"  placeholder='write your text here' onChange={handleChange}  value={todoText}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default InputElement
