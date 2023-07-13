const TodoItem = ({itemProp, setTodo}) => {
  const handleChange = (id) => {
    setTodo((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  }
  return (
    <div>
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)}/>
        {itemProp.title}
        </li>
    </div>
  )
}

export default TodoItem