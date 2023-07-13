import TodoItem from "./TodoItem"
import Navbar from "./NavBar"

const TodoList = ({ todosProps, setTodos }) => {
  return (
    <ul>
      { todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} setTodo{set}/>
      ))
      }
      <li><Navbar /></li>
    </ul>
  )
}

export default TodoList