import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage_section2() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/items');
        setItems(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
    <div className="home-page-section2">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item._id} className="item">
            <img
              src={`data:${item.file.contentType};base64,${item.file.data.toString('base64')}`}
              alt="item"
            />
            <div className="item-info">
              <h3>{item.itemType}</h3>
              <p>{item.brandName}</p>
              <p>{item.modelType}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
        <span>
          <a>Load more ...</a>
        </span>
      </div>
      <div className="adv-section"></div>
    </div>
  );
}

export default HomePage_section2;


// import ItemsDisplay from "./ItemsDisplay";

// function HomePage_section2() {
//   const sampleItems = [
//     {
//       id: 1,
//       type: "Shoe",
//       name: "Nike air force",
//       status: "Used for 4 months",
//       returns: "Shoe, Jacket, Sweater and a Hat",
//       image:
//         "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 2,
//       type: "Music instrument",
//       name: "Guitar",
//       status: "Used for 4 months",
//       returns: "Shoe, Jacket, Sweater and a Hat",
//       image:
//         "https://images.unsplash.com/photo-1684144820756-d6cafa65247b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 3,
//       type: "Household",
//       name: "Curtain",
//       status: "Used for 4 months",
//       returns: "Shoe, Jacket, Sweater and a Hat",
//       image:
//         "https://images.unsplash.com/photo-1684134219110-6d18efc08205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 4,
//       type: "Household",
//       name: "TV Stand",
//       status: "Used for 4 months",
//       returns: "Phone, car spareparts, garage tools",
//       image:
//         "https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 5,
//       type: "Household",
//       name: "Curtain",
//       status: "Used for 4 months",
//       returns: "Shoe, Jacket, Sweater and a Hat",
//       image:
//         "https://images.unsplash.com/photo-1684134219110-6d18efc08205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       id: 6,
//       type: "Shoe",
//       name: "Nike air force",
//       status: "Used for 4 months",
//       returns: "Shoe, Jacket, Sweater and a Hat",
//       image:
//         "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//   ];
//   return (
//     <div className="home-page-section2">
//       <ItemsDisplay items={sampleItems} />
//       {/* <div className="adv-section"></div> */}
//       <ItemsDisplay items={sampleItems} />
//       <div className="load-more">
//         <span>
//           <a>Load more ...</a>
//         </span>
//       </div>
//       <div className="adv-section"></div>
//     </div>
//   );
// }

// export default HomePage_section2;
