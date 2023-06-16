import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

function HomePageSideBar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handler = () => {
    setOpen(!open);
  };

  const handler2 = () => {
    setOpen2(!open2);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="homePageSidebar-btn">
        <button onClick={handleOpen}>
          <FontAwesomeIcon icon={faSlidersH} />
        </button>
      </div>

      {open && (
        // <>
        //   <div className={`sidebar  ${open ? "open" : ""}`} ref={sidebarRef}>
        //     <h2>Sidebar Content</h2>
        //     <span>herrera</span>
        //     <button onClick={handleClose}>Close Sidebar</button>
        //   </div>
        //   <div className="sidebar-overlay" onClick={handleClose}></div>
        // </>
        <>
          <div
            className={`sidebar side-bar-btns  ${open ? "open" : ""}`}
            ref={sidebarRef}
          >
            {/* <button onClick={handleClose}>Close Sidebar</button> */}
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
          <div className="sidebar-overlay" onClick={handleClose}></div>
        </>
      )}
    </>
  );
}

export default HomePageSideBar;
