const TodoItem = ({itemProp, handleChange}) => {

  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)}/>
        <button>Delete</button>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem