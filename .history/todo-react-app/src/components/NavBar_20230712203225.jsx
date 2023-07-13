import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  console.log(useState(false));
  return (
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
  );
};
export default Navbar;
