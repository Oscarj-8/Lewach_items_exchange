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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ex.
          Molestias sed quia, iure harum cum sunt eum in labore accusantium
          aspernatur inventore sit modi, perspiciatis, ratione dolor consequatur
          eligendi!
        </div>
      )}

      <button className="side-bar-btn">Types of item</button>
    </div>
  );
}

export default HomePage_sidebar;
