import { useEffect, useRef, useState } from "react";
import useOnclickOutside from "./useOnclickOutside";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef()

  use
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
