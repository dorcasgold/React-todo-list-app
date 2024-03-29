import { useState } from "react"
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([])

  function addTodo() {
    const newTodo = prompt("Enter new Todo");
    if (newTodo) {
      setTodos([...todos, newTodo])
    }
  }
  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos)
  }
  return (
    <div className="container">
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
      ))}
    </div>
  )
}

export default TodoList