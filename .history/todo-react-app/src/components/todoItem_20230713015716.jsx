const TodoItem = ({itemProp, setTodos}) => {
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.co}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem