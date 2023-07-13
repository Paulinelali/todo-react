import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  console.log(useState(false));
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button>
          Service <span>&#8595</span>
          </button>
          <ul>
            <li>Design</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
