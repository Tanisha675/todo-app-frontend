import Header from './Header.js'
import Footer from './Footer.js'
import AddToDo from './AddToDo.js'
import Showtodo from './Showtodo.js'
import DoneTodopage from './DoneTodopage.js'
import Homepage from './Homepage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState,useEffect} from 'react'
import {callAllApi} from './backendAPI.js'

async function fetchtodo(setTodo){
  const todoList=await callAllApi('/read-todos');
  setTodo(todoList)
}

function App() {
  const [todo, setTodo] = useState([]);
  const [doneArr, setDoneArr] = useState([]);

  useEffect(()=>{
    fetchtodo(setTodo)
  },[]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes> 
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={<AddToDo todo={todo} setTodo={setTodo} />} />
          <Route path='/show' element={<Showtodo todo={todo} setTodo={setTodo} setDone={setDoneArr} />} />
          <Route path='/done' element={<DoneTodopage todo={todo} setTodo={setTodo} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


