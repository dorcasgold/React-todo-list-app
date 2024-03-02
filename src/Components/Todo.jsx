function Todo({ todo, onDelete }) {
  return (
    <div className="content">
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo