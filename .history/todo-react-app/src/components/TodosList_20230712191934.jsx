const TodoList = (props) => {
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <li>{todo.ti}</li>
      ))}
    </ul>
  )
}