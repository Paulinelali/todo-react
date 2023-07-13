import TodoItem from "./TodoItem"
import Navbar from "./NavBar"

const TodoList = ({ todosProps, handleChange, delTodo  }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
      ))
      }
      <li><Navbar /></li>
    </ul>
  )
}

export default TodoList