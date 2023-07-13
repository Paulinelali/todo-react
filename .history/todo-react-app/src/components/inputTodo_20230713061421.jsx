import { useState } from "react"
const InputTodo = () => {

  const [title, setTitle] = useState()

  const handleChange = (e) => {
    setT
  }
  return (
    <div>todo field her...
      <form>
        <input type="text" placeholder="Add todo"/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default InputTodo