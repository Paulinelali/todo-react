import TodoItem from "./TodoItem"
import Navbar from "./NavBar"

const TodoList = ({ todosProps }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))
      }
    </ul>
    <Navbar />
  )
}

export default TodoList