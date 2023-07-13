import Navbar from "./NavBar"

const TodoItem = ({itemProp}) => {
  return (
    <div>
      <li>{itemProp.title}</li>
    </div>
  )
}

export default TodoItem