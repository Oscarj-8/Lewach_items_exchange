import { useState, useEffect } from "react";
import UploadModal from "./UploadModal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phone from "../../assets/images/phone.png";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import axios from "axios";

function HomePage_section2() {
  const itemDetail = [
    {
      id: 1,
      image: `${phone}`,
      brand: "LG",
      model: "23GT-23LG",
      quantity: "1",
      estimatedValue: "12,300",
      usage: "1.2yr",
      defects: "Broken glass",
      region: "Adama",
      city: "Adama",
      subCity: "dunno",
      areaName: "18",
      itemsWillingToAccept:
        "any kind of touch mobile phone and may be smart watch",
    },
  ];

  const [viewIsOpen, setViewIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [tradeIsOpen, setTradeIsOpen] = useState(false);

  const openViewModal = () => {
    setViewIsOpen(!viewIsOpen);
  };

  const openContactModal = () => {
    setContactIsOpen(!contactIsOpen);
  };

  const toggleTradeModal = () => {
    setTradeIsOpen(!tradeIsOpen);
  };

  const closeModal = () => setViewIsOpen(false);
  const closeModal2 = () => {
    setContactIsOpen(false);
  };
  const closeTradeModal = () => {
    setTradeIsOpen(false);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/items");
        setItems(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="home-page-section2">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item._id} className="section2-card">
            <div className="section1-card-top section2-card-top ">
              <div className="card-top-text">
              <img
                  src={`data:${item.file.contentType};base64,${item.file.data}`}
                  alt="item"
                />
                <div className="">
                  <h2>{item.name}</h2>
                  <p>
                    <strong>Item type: </strong>
                    {item.itemType}
                  </p>
                  <p>
                    <strong>Brand Name: </strong>
                    {item.brandName}
                  </p>
                  <p>
                    <strong>Model Type: </strong>
                    {item.modelType}
                  </p>
                  <p>
                    <strong>Looking : </strong>
                    {item.itemsWillingToAccept}
                  </p>
                </div>
                <div className="section1-card-bottom">
                  <button className="card-bottom-btn" onClick={openViewModal}>
                    View
                  </button>
                  <UploadModal onRequestClose={closeModal} isOpen={viewIsOpen}>
                    {itemDetail.map(
                      ({
                        id,
                        image,
                        brand,
                        model,
                        quantity,
                        estimatedValue,
                        usage,
                        defects,
                        region,
                        city,
                        subCity,
                        areaName,
                        itemsWillingToAccept,
                      }) => (
                        <div key={`veiewItem - ${id}`} className="viewModal">
                          <div className="viewModal-top">
                            <span>Jermey Oceans</span>
                            <button onClick={closeModal}>
                              <FontAwesomeIcon
                                icon={faClose}
                                className="viewModalClose"
                                size="2x"
                              />
                            </button>
                          </div>
                          <div className="viewModal-img">
                            <img src={image} alt="item picture" />
                          </div>
                          <div className="viewModal-itemDetails viewModal-details">
                            <h2>Item detail</h2>
                            <span>Item brand: </span>
                            <span>Model Type: </span>
                            <span>Item quantity: </span>
                            <span>Estimated value: </span>
                            <span>Duration of usage: </span>
                            <span>Defects of item: </span>
                          </div>
                          <div className="viewModal-LocationDetails  viewModal-details">
                            <h2>Location details</h2>
                            <span>Region: </span>
                            <span>City/Zone: </span>
                            <span>Subcity/Woreda: </span>
                            <span>Specific area name: </span>
                            <span>Items willing to accept:</span>
                          </div>
                          <div className="viewModal-btns">
                            <button onClick={toggleTradeModal}>Trade</button>
                            {tradeIsOpen && (
                              <div className="tradeModal">
                                <div className="tradeModal-closeBtn">
                                  <FontAwesomeIcon
                                    icon={faClose}
                                    onClick={closeTradeModal}
                                  />
                                </div>
                                <span>
                                  Do you want to upload now or use already
                                  uploaded items?
                                </span>
                                <div className="tradeModal-inside">
                                  <button>
                                    <Upload />
                                  </button>
                                  <button>
                                    <Link to="/profilepage">Go to profile</Link>
                                  </button>
                                </div>
                              </div>
                            )}
                            <button>Contact</button>
                          </div>
                        </div>
                      )
                    )}
                  </UploadModal>
                  <button
                    className="card-bottom-btn"
                    onClick={openContactModal}
                  >
                    Contact
                  </button>
                  <UploadModal
                    onRequestClose={closeModal2}
                    isOpen={contactIsOpen}
                  ></UploadModal>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
      <span>
        <a>Load more ...</a>
      </span>

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
//       image: "https://images.unsplash.com/photo-1614860957837-d8cf8798cb25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//         },
//     {
//       id: 2,
//       type: "Music instrument",
//       name: "Guitar",
//       status: "Used for 1 year",
//       returns: "Any Music Insturements",
//       image:"https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//        },
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
