import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter/Counter'
import todoapp from "./Components/todo,todoapp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <todoapp></todoapp>
    </>
  )
}

export default App
