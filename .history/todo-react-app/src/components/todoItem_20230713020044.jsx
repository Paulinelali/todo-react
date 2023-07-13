const TodoItem = ({itemProp, setTodos}) => {
  const handleChange = 
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => console.log("clicked", id)}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem