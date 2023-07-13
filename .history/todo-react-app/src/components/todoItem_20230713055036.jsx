const TodoItem = ({itemProp, setTodos}) => {

  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem