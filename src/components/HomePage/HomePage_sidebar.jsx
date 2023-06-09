import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
function HomePage_sidebar() {
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
      {/*<FontAwesomeIcon icon={faArrowDown} /> */}

      {open && (
        <div className="HomepageDropdown">
          <select>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
          </select>
          <select>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
          </select>
          <select>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
          </select>
          <select>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
          </select>
        </div>
      )}
      <span onClick={handler2}> Types of item</span>
      {open2 && (
        <div className="HomepageDropdown">
          <select>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
          </select>
          <select>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
            <option>yeh</option>
          </select>
          <select>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
            <option>ehy</option>
          </select>
          <select>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
            <option>hye</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default HomePage_sidebar;
