import { useState } from "react";
import phone from "../../assets/images/phone.png";
import variety from "../../assets/images/variety.png";
import waste from "../../assets/images/waste.png";
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
      itemsToBeSwapped_1: "Tablet",
      itemsToBeSwapped_2: "Tablet",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 3,
      image: `${waste}`,
      itemsToBeSwapped_1: "Tv",
      itemsToBeSwapped_2: "Phone",
      from: "Harar",
      to: "Dire Dawa",
    },
    {
      id: 4,
      image: `${variety}`,
      itemsToBeSwapped_1: "Tablet",
      itemsToBeSwapped_2: "Tablet",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 5,
      image: `${waste}`,
      itemsToBeSwapped_1: "Tv",
      itemsToBeSwapped_2: "Phone",
      from: "Harar",
      to: "Dire Dawa",
    },
    {
      id: 6,
      image: `${variety}`,
      itemsToBeSwapped_1: "Tablet",
      itemsToBeSwapped_2: "Tablet",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 7,
      image: `${phone}`,
      itemsToBeSwapped_1: "Phone",
      itemsToBeSwapped_2: "Tablet",
      from: "Arba Minch",
      to: "Hawassa",
    },
    {
      id: 8,
      image: `${variety}`,
      itemsToBeSwapped_1: "Tablet",
      itemsToBeSwapped_2: "Tablet",
      from: "Addis Ababa",
      to: "Jimma",
    },
    {
      id: 9,
      image: `${waste}`,
      itemsToBeSwapped_1: "Tv",
      itemsToBeSwapped_2: "Phone",
      from: "Harar",
      to: "Dire Dawa",
    },
    {
      id: 10,
      image: `${variety}`,
      itemsToBeSwapped_1: "Tablet",
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
      image: `${variety}`,
      itemsToBeSwapped_1: "Tablet",
      itemsToBeSwapped_2: "Tablet",
      from: "Addis Ababa",
      to: "Jimma",
    },
  ];

  const modalStyle = {
    content: {
      height: "32em",
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
                    ></UploadModal>
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
