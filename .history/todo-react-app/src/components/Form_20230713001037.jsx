import { useState } from "react"

const Form = () => {
  const [state, setState] = useState({
    fname: "First name",
    lname: "Last name",
  })

  const handleChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div>
      <form>
        <label>
          First name: <input type="text" name="" value={state.fname} onChange={handleChange} />
        </label>
        <label>
          Last name: <input type="text" name="" value={state.lname} onChange={handleChange} />
        </label>
      </form>
      <h5>Names: {state.fname} {state.lname}</h5>
    </div>
  )
}

export default Form