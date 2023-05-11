import React from "react";

function ItemsDisplay(props) {
  const { items } = props;
  return (
    <>
      {items.map((item) => (
        <div className="section1-card section2-card">
          <div className="section1-card-top section2-card-top ">
            <div className="card-top-text">
              <ul>
                <li key={item.id}>
                  <h2>{item.name}</h2>
                  <p>
                    <strong>Item type: </strong>
                    {item.type}
                  </p>
                  <p>
                    <strong>Status: </strong>
                    {item.status}
                  </p>
                  <p>
                    <strong>Items in return: </strong>
                    {item.return}
                  </p>
                </li>
              </ul>
            </div>
            <div className="card-top-img"></div>
          </div>
          <div className="section1-card-bottom">
            <button className="card-bottom-btn">Trade</button>
            <button className="card-bottom-btn">Contact</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemsDisplay;
