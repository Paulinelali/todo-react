const TodoItem = ({itemProp}) => {
  return (
    <div>
      <li>
        <input
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem