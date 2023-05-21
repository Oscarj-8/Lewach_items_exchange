function ItemsDisplay({ items }) {
  return (
    <>
      {items.map(({ id, type, name, status, returns, image }) => (
        <div className="section2-card" key={`list-item-${id}`}>
          <div className="section1-card-top section2-card-top ">
            <div className="card-top-text">
              <ul>
                <li>
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
          <div className="card-top-img section2-img">
            <img src={image} alt="Google Logo" />
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemsDisplay;
