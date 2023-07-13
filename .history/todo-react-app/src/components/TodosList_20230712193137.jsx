const TodoList = ({ todosProps }) => {
  return (
    <ul>
      {.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList