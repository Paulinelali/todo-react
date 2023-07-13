const TodoItem = ({itemProp}) => {
  return (
    <div>
      <li>
        <input type="check"
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem