const TodoItem = ({itemProp, setTodos}) => {
  return (
    <div>
      <li>
        <input type="checkbox" checked={item}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem