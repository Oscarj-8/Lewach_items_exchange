import React from "react";

function ItemsDisplay({ items }) {
  return (
    <>
      {items.map(({ id, type, name, status, returns }) => (
        <div className="section1-card section2-card">
          <div className="section1-card-top section2-card-top ">
            <div className="card-top-text">
              <ul>
                <li key={id}>
                  <h2>{name}</h2>
                  <p>
                    <strong>Item type: </strong>
                    {type}
                  </p>
                  <p>
                    <strong>Status: </strong>
                    {status}
                  </p>
                  <p>
                    <strong>Items in return: </strong>
                    {returns}
                  </p>
                </li>
              </ul>
            </div>
            <div className="section1-card-bottom">
              <button className="card-bottom-btn">Trade</button>
              <button className="card-bottom-btn">Contact</button>
            </div>
          </div>
          <div className="card-top-img">
            <img
              src="https://plus.unsplash.com/premium_photo-1677013011737-ba61149ba70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Google Logo"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemsDisplay;
