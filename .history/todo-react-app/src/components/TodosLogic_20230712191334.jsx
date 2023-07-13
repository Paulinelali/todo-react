import InputTodo from "./InputTodo";
import TodoList

const TodoLogic = () => {

  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];

  return (
    <div>
      <InputTodo />
      <TodoList todosProps={todos}/>
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoLogic