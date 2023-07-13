const TodoItem = ({itemProp, setTodos}) => {
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => console.log("clicked")}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem