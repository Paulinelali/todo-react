import Navbar from "./NavBar"

const TodoItem = ({itemProp}) => {
  return (
    <li>{itemProp.title}</li>
    <Navbar />
  )
}

export default TodoItem