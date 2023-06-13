import { useState } from "react";
import UploadModal from "./UploadModal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemsDisplay({ items }) {
  const [viewIsOpen, setViewIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);

  const openViewModal = () => {
    setViewIsOpen(!viewIsOpen);
  };

  const openContactModal = () => {
    setContactIsOpen(!contactIsOpen);
  };

  const closeModal = () => setViewIsOpen(false);
  const closeModal2 = () => {
    setContactIsOpen(false);
  };
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
              <button className="card-bottom-btn" onClick={openViewModal}>
                View
              </button>
              <UploadModal onRequestClose={closeModal} isOpen={viewIsOpen}>
                <div className="viewModal">
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti ducimus saepe natus accusamus cumque nobis
                    assumenda, .
                  </div>
                  <div className="viewModal-itemDetails viewModal-details">
                    <h2>Item detail</h2>
                    <span>Item brand: </span>
                    <span>Model Type: </span>
                    <span>Item quantity: </span>
                    <span>Estimated value:</span>
                    <span>Duration of usage:</span>
                    <span>Defects of item:</span>
                  </div>
                  <div className="viewModal-LocationDetails  viewModal-details">
                    <h2>Location details</h2>
                    <span>Region: </span>
                    <span>City/Zone: </span>
                    <span>Subcity/Woreda: </span>
                    <span>Specific area name:</span>
                    <span>Items willing to accept:</span>
                  </div>
                  <div className="viewModal-btns">
                    <button>Trade</button>
                    <button>Contact</button>
                  </div>
                </div>
              </UploadModal>
              <button className="card-bottom-btn" onClick={openContactModal}>
                Contact
              </button>
              <UploadModal
                onRequestClose={closeModal2}
                isOpen={contactIsOpen}
              ></UploadModal>
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
