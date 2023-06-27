import { useState } from "react";
import phone from "../../assets/images/phone.png";
import variety from "../../assets/images/variety.png";
import waste from "../../assets/images/waste.png";
import tablet from "../../assets/images/tablet.png";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import UploadModal from "../HomePage/UploadModal";

function AdminDeliveryRequest() {
  const deliveryItems = [
    {
      id: 1,
      image: `${phone}`,
      itemsToBeSwapped_1: "Phone",
      itemsToBeSwapped_2: "Tablet",
      from: "Arba Minch",
      to: "Hawassa",
    },
    {
      id: 2,
      image: `${variety}`,
      itemsToBeSwapped_1: "Plates",
      itemsToBeSwapped_2: "Blender",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 3,
      image: `${waste}`,
      itemsToBeSwapped_1: "Bottels",
      itemsToBeSwapped_2: "Papers",
      from: "Harar",
      to: "Dire Dawa",
    },
    {
      id: 4,
      image: `${tablet}`,
      itemsToBeSwapped_1: "Tablet",
      itemsToBeSwapped_2: "Phone",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 5,
      image: `${variety}`,
      itemsToBeSwapped_1: "Plates",
      itemsToBeSwapped_2: "Blender",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 6,
      image: `${waste}`,
      itemsToBeSwapped_1: "Bottels",
      itemsToBeSwapped_2: "Papers",
      from: "Harar",
      to: "Dire Dawa",
    },
    {
      id: 7,
      image: `${waste}`,
      itemsToBeSwapped_1: "Bottels",
      itemsToBeSwapped_2: "Papers",
      from: "Harar",
      to: "Dire Dawa",
    },
    {
      id: 8,
      image: `${phone}`,
      itemsToBeSwapped_1: "Phone",
      itemsToBeSwapped_2: "Tablet",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 9,
      image: `${variety}`,
      itemsToBeSwapped_1: "Plates",
      itemsToBeSwapped_2: "Blender",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 10,
      image: `${phone}`,
      itemsToBeSwapped_1: "Phone",
      itemsToBeSwapped_2: "Tablet",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 11,
      image: `${waste}`,
      itemsToBeSwapped_1: "Tv",
      itemsToBeSwapped_2: "Phone",
      from: "Harar",
      to: "Dire Dawa",
    },
    {
      id: 12,
      image: `${tablet}`,
      itemsToBeSwapped_1: "Tablet",
      itemsToBeSwapped_2: "Phone",
      from: "Addis Ababa",
      to: "Jimma",
    },
  ];

  const modalStyle = {
    content: {
      height: "40em",
      width: "40em",
      backgroundColor: "#fff",
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isForwardOpen, setIsFowardOpen] = useState(false);

  const openViewModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openForwardModal = () => {
    setIsFowardOpen(!isForwardOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsFowardOpen(false);
  };

  return (
    <div className="adminDeliveryRequests-root">
      <Sidebar />
      <SearchBar />
      <div className="dashboard-card">
        <h3>Delivery Requests</h3>
        <div className="time">
          <span>September 12,2022 12:35 PM</span>
        </div>
      </div>
      <div className="deliveryItem-cards">
        {deliveryItems.map(
          ({ id, image, itemsToBeSwapped_1, itemsToBeSwapped_2, from, to }) => (
            <div className="deliveryItem-card" key={`DeliveryCard-${id}`}>
              <img src={image} alt="item img" />
              <div className="item-img-side">
                <h3>
                  {itemsToBeSwapped_1} - {itemsToBeSwapped_2} Swap
                </h3>
                <span>From - {from}</span>
                <span> To - {to}</span>
                <div className="itemcard-btns">
                  <button
                    className="itemCard-btn view-btn"
                    onClick={openViewModal}
                  >
                    View
                  </button>
                  {
                    <UploadModal
                      isOpen={isModalOpen}
                      onRequestClose={closeModal}
                      modalStyle={modalStyle}
                    >
                      <div className="items-delivery-request">
                        <div className="item-1">
                          <div className="item-1-item-info">
                            <h2>Item 1</h2>
                            <div className="item-1-imgs">
                              <div className="item-1Img-1"></div>
                              <div className="item-1Img-2"></div>
                            </div>
                            <div>
                              <h2>Item Info</h2>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Item Type: <b>Phone</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Item Brand: <b>Iphone</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Model Type: <b>Iphone X</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Items Quantity: <b>1</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Estimated value: <b>29,899 birr</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Duration of usage: <b>2 years</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Defects of item: <b>Broken glass</b>
                              </span>
                            </div>
                          </div>

                          <div className="item-1-location-info">
                            <div>
                              <h2>Location Info</h2>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Region: <b>Arba minch</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                City/ zone: <b>Arba minch</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                SUbcity/Woreda: <b>4</b>
                              </span>
                            </div>
                            <div className="item-1-info">
                              <span>
                                Specific area name: <b>Lemat</b>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="item-2">
                          <h2>Item 2</h2>
                          <div className="item-2-imgs">
                            <div className="item-2Img-1"></div>
                            <div className="item-2Img-2"></div>
                          </div>
                        </div>
                      </div>
                    </UploadModal>
                  }
                  <button
                    className="itemCard-btn forward-btn"
                    onClick={openForwardModal}
                  >
                    Forward
                  </button>
                  <UploadModal
                    isOpen={isForwardOpen}
                    onRequestClose={closeModal}
                  ></UploadModal>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AdminDeliveryRequest;
