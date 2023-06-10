import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function HomePage_sidebar({ handleClose }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handler = () => {
    setOpen(!open);
  };

  const handler2 = () => {
    setOpen2(!open2);
  };
  return (
    <div className="side-bar-btns">
      <span onClick={handler}>Location</span>

      {open && (
        <div className="HomepageSide-btns">
          <button onClick={handleClose}>Addis Ababa</button>
          <button>Adama</button>
          <button>Dire Dawa</button>
          <button>Hawassa</button>
          <button>SNNPR</button>
        </div>
      )}
      <span onClick={handler2}> Types of item</span>
      {open2 && (
        <div className="HomepageSide-btns">
          <button onClick={handleClose}>Addis Ababa</button>
          <button>Adama</button>
          <button>Dire Dawa</button>
          <button>Hawassa</button>
          <button>SNNPR</button>
        </div>
      )}
    </div>
  );
}

export default HomePage_sidebar;
