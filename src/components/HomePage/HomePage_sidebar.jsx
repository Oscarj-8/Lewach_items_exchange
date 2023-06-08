import { useState } from "react";
function HomePage_sidebar() {
  const [open, setOpen] = useState(false);

  const handler = () => {
    setOpen(!open);
  };

  return (
    <div className="side-bar-btns">
      <button className="side-bar-btn" onClick={handler}>
        Location
      </button>
      {open && (
        <div className="test">
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

      <button className="side-bar-btn">Types of item</button>
    </div>
  );
}

export default HomePage_sidebar;
