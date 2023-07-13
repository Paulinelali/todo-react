import { useState } from "react";

const Navbar = () => {
  const [dropDown, setDropDown] = useState()
  console.log(useState(false));
  return (
    <nav>
      nav bar content
    </nav>
  );
};
export default Navbar;