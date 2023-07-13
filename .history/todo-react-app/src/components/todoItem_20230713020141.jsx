const TodoItem = ({itemProp, setTodos}) => {
  const handleChange = (id) => {
    console.log("clicked", id)
  }
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(ite))}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem