const { useState } = require("react")

const Form = () => {
  const [fname, setFname] = useState("Names...")

  return (
    <form>
      <label>
        First name: <input type="text" value={fname} />
      </label>
    </form>
    <h
  )
}