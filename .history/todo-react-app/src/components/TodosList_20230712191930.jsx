const TodoList = (props) => {
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <li>{todo.}</li>
      ))}
    </ul>
  )
}