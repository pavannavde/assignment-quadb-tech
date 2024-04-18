
import { useSelector } from 'react-redux';
import './App.css';
import InputElement from './Components/InputElement';
import { useEffect, useState } from 'react';
import ListElement from './Components/ListElement';

function App() {
  const data = useSelector((state)=>state);
  const[todos,setTodos] = useState([]);

   useEffect(()=>{
   localStorage.setItem('data',JSON.stringify(data));
    setTodos(data)
   },[data])
 
  return (
    <div className="App">
      <h1>Todo <span style={{color:'#fff'}}>App</span></h1>
      <InputElement/>
      <h1>Todo List</h1>
      <ul>
      {
        todos.length > 0 ?(
          todos.map((todo,index)=>
          <ListElement data={todo} index={index}/>
          )
        )
        : (<h1 style={{color:'red',alignSelf:'center'}}>Todo list is empty !</h1>)
      }
      </ul>
      
    </div>
  );
}

export default App;
