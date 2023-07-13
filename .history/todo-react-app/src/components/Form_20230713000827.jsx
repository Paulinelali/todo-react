import { useState } from "react"

const Form = () => {
  const [state, setState] = useState({
    fname: "First name",
    lname: "Last name",
  })

  const handleChange = (e) => {
    setFname(e.target.value)
  }

  return (
    <div>
      <form>
        <label>
          First name: <input type="text" value={fname} onChange={handleChange} />
        </label>
        <label>
          Last name: <input type="text" value={stat} onChange={handleChange} />
        </label>
      </form>
      <h5>First name: {fname}</h5>
    </div>
  )
}

export default Form