const TodoList = (props) => {
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <li></li>
      ))}
    </ul>
  )
}