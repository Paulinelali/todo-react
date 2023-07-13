import { useState } from "react";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false)
  console.log(useState(false));
  return (
    <nav>
      nav bar content
    </nav>
  );
};
export default Navbar;