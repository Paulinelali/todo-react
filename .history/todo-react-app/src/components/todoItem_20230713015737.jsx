const TodoItem = ({itemProp, setTodos}) => {
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} on/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem