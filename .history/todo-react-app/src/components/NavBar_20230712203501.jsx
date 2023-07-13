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
          Service <span>&#85</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
