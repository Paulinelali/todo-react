import { useEffect, useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  useEffect( () => {
    document.title = ( prev => !prev)
  })
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button onClick={ () => setDropdown()}>
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
