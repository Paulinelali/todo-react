const TodoItem = ({itemProp, setTodos}) => {
  return (
    <div>
      <li>
        <input type="checkbox"/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem