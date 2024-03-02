import { useState } from "react"

function TodoList() {

  const [todos, setTodos] = useState([])

  function addTodo() {
    const newTodo = prompt("Enter new Todo");
    if (newTodo) {
      setTodos([...todos, newTodo])
    }
  }
  return (
    <div>TodoList</div>
  )
}

export default TodoList