import TodoItem from "./Todo"

const TodoList = ({ todosProps }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
        <TodoItem itemProps={todo} />
      ))
      }
    </ul>
  )
}

export default TodoList