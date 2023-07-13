import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef()
  CONSOLE
  useEffect( () => {
    document.title = `${dropdown}`
  }, [dropdown])
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
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
