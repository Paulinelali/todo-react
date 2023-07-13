const TodoItem = ({itemProp, set}) => {
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