import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delete_todo } from '../redux/action/todoActions';

const ListElement = ({data,index}) => {
    const [isComplete, setIsComplete] = useState(false);
    const dispatch = useDispatch();

    // to delete todo
    function DeleteFun(id){
        dispatch(delete_todo(id))
    }

  return (
    <div className='list'>
            <li key={index} className={isComplete ? 'complete' :''}>{data.text}</li>
            <button onClick={()=>DeleteFun(data.id)}>Delete</button>
            <button disabled={isComplete} onClick={()=>setIsComplete(true)}>Complete</button>
    </div>
    
  )
}

export default ListElement
