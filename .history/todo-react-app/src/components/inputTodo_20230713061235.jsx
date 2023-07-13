import { useContext } from "react"
import Form from "./Form"
const InputTodo = () => {

  const [title, setTitle] = useC
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