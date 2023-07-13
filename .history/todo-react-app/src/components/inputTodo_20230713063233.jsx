import { useState } from "react"
const InputTodo = ({addTodoItem}) => {

  const [title, setTitle] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()){
      addTodoItem(title);
      setTitle("")
    }else{
      alert("Please add an item")
    }
    

  }
  return (
    <div>todo field her...
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} placeholder="Add todo"/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default InputTodo