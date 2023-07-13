import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef()
  console.log(ref)
  useEffect( () => {
    document.title = `${dropdown}`
    const handler = (event) => {
      if(dropdown && ref.current && !ref.current.contains(event.target)){
        setDropdown(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("")
    }
  }, [dropdown])
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={ () => setDropdown((prev) => !prev)}>
          Service <span>&#8595</span>
          </button>
          {dropdown && (
            <ul>
            <li>Design</li>
            <li>Development</li>
          </ul>
          )}
          
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
