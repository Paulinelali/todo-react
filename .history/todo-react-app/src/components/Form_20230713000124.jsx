import { useState } from "react"

const Form = () => {
  const [fname, setFname] = useState("Names...")

  return (
    <div>
      <form>
        <label>
          First name: <input type="text" value={fname} />
        </label>
      </form>
      <h5>First name: {fname}</h5>
    </div>
  )
}

export default Form