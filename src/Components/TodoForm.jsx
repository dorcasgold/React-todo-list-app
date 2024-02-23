import { useState } from "react"

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value}
        placeholder="Today's Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}

export default TodoForm