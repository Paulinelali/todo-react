import { useState } from "react"
const InputTodo = () => {

  const [title, setTitle] = useState()

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div>todo field her...
      <form>
        <input type="text" value={title} placeholder="Add todo"/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default InputTodo