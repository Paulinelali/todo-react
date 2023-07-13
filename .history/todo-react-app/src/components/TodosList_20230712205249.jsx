import TodoItem from "./TodoItem"
import Navbar from "./NavBar"

const TodoList = ({ todosProps }) => {
  return (
    <div>
      <ul>
      { todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))
      }
    </ul>
    <Navbar />
    </div>
  )
}

export default TodoList