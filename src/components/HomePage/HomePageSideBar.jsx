import { useState, useEffect, useRef } from "react";

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
      <button onClick={handleOpen}>Open Sidebar</button>
      {open && (
        <>
          <div className={`sidebar  ${open ? "open" : ""}`} ref={sidebarRef}>
            <h2>Sidebar Content</h2>
            <span>herrera</span>
            <button onClick={handleClose}>Close Sidebar</button>
          </div>
          <div className="sidebar-overlay" onClick={handleClose}></div>
        </>
      )}
    </>
  );
}

export default HomePageSideBar;
