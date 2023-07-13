const TodoItem = ({itemProp, handleChange, delTodo }) => {

  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)}/>
        <button onClick={() => delTodo}>Delete</button>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem