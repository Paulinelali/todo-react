import { useState } from "react"

const Form = () => {
  const [state, setState] = useState({
    fname: "First name",
    lname: "Last name",
    isChecked: false,
    gender: "",
  })

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      ...state,
      [e.target.name]: value,
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
        <label>
          <input type="radio" name="gender" value="male" checked={state.gender === "male"} onChange={handleChange} />{" "}
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={state.gender === "female"} onChange={handleChange} />{" "}
          Female
        </label>
        <button>Submit</button>
      </form>
      <h5>Names: {state.fname} {state.lname}</h5>
      <h5>Is it checked? {state.isChecked ? "Yes": "No"}</h5>
      <h5>Gender: {state.gender}</h5>
    </div>
  )
}

export default Form