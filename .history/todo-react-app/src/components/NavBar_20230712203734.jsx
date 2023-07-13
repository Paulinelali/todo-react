import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  console.log(useState(false));
  return (
    <nav>
      <p>Nav content</p>
    </nav>
  );
};
export default Navbar;
