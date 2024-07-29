import React, { useState, useEffect } from 'react'
import Custom from './components/Custom'


function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([
    "valleri",
    "larisha",
    "vaishali"
])

function createTodo(){
setTodos(oldTodos => {
  return [...oldTodos,task]
})
}
  return <div>
  <h1>Valleri's To Do App  </h1>
  <input type="text" value={task} onChange={event => {
    setTask(event.target.value)
  }}
  />
  <button onClick={createTodo}>Create Todo</button>

  <ul>
{todos.map(todo => {
  return <li>{todo}</li>

})}
  </ul>
    
  </div>
}


export default App

