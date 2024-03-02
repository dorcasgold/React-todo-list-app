function Todo(todo, onDelete) {
  return (
    <>
      <span>{todo}</span>
      <input onClick={onDelete} type="submit" value="Submit" />
    </>
  )
}

export default Todo