import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  console.log(useState(false));
  return (
    <nav>
      <ul>
      </ul>
        <li>Home</li>
    </nav>
  );
};
export default Navbar;
