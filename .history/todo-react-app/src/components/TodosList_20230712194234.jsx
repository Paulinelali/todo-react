const TodoList = ({ todosProps }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
        <TodoItem itemProps={}
      ))
      }
    </ul>
  )
}

export default TodoList