import TodoItem from "./TodoItem"
import Navbar from "./NavBar"

const TodoList = ({ todosProps, handleChange, delTodo  }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo=/>
      ))
      }
      <li><Navbar /></li>
    </ul>
  )
}

export default TodoList