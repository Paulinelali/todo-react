import { useState } from "react"

const Form = () => {
  const [state, setState] = useState({
    fname: "First name",
    lname: "Last name",
    isChecked: false,
  })

  const handleChange = (e) => {
    const value = e.target.type === 
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <form>
        <label>
          First name: <input type="text" name="fname" value={state.fname} onChange={handleChange} />
        </label>
        <label>
          Last name: <input type="text" name="lname" value={state.lname} onChange={handleChange} />
        </label>
        <label>
          <input type="checkbox" name="isChecked" checked={state.isChecked} onChange={handleChange} />
          Is checked?
        </label>
      </form>
      <h5>Names: {state.fname} {state.lname}</h5>
      <h5>Is it checked? {state.isChecked ? "Yes": "No"}</h5>
    </div>
  )
}

export default Form