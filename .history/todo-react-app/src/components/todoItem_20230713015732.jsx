const TodoItem = ({itemProp, setTodos}) => {
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} conC/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem