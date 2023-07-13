const TodoItem = ({itemProp}) => {
  return (
    <div>
      <li>
        <input type=""
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem