import TodoItem from "./TodoItem"
import Navbar from "./NavBar"

const TodoList = ({ todosProps, set }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))
      }
      <li><Navbar /></li>
    </ul>
  )
}

export default TodoList