const TodoItem = ({itemProp, setTodos}) => {
  const handleChange = (id) => {
    console.log("clicked", id)
  }
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => ha)}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem