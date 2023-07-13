const TodoList = ({ todosProps }) => {
  return (
    <ul>
      {props.todosProps.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList