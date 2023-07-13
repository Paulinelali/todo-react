import { useState } from "react"
const InputTodo = () => {

  const [title, setTitle] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle()

  }
  return (
    <div>todo field her...
      <form>
        <input type="text" value={title} onChange={handleChange} placeholder="Add todo"/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default InputTodo