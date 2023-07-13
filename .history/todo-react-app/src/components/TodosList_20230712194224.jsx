const TodoList = ({ todosProps }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
        <TodoItem itm
      ))
      }
    </ul>
  )
}

export default TodoList