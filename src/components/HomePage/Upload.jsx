import UploadModal from "./UploadModal";
import { useState } from "react";

function Upload() {
  const itemTypes = ["type one", "type two", "type three"];
  const itemBrands = ["Brand one", "Brand two", "Brand three"];
  const itemModels = ["Model one", "model two", "model three"];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);

  const [itemType, setItemType] = useState("");
  const [brandName, setBrandName] = useState("");
  const [modelType, setModelType] = useState("");

  const itemTypeChangeHandler = (e) => {
    setItemType(e.target.value);
  };

  const brandTypeChangeHandler = (e) => {
    setBrandName(e.target.value);
  };

  const modelTypeChangeHandler = (e) => {
    setModelType(e.target.value);
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Upload</button>
      <UploadModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form>
          <label htmlFor="item-type">Item Type:</label>
          <select
            name="item-type"
            id="item-type"
            value={itemType}
            onChange={itemTypeChangeHandler}
          >
            <option value="">Select item type</option>
            {itemTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
          <label htmlFor="item-brand">Item Brand:</label>
          <select
            id="item-brand"
            name="item-brand"
            value={brandName}
            onChange={brandTypeChangeHandler}
          >
            <option value="">Select item brand</option>
            {itemBrands.map((brand) => (
              <option value={brand} key={brand}>
                {brand}
              </option>
            ))}
          </select>
          <label htmlFor="model-type">Model Type:</label>
          <select
            name="model-type"
            id="model-type"
            value={modelType}
            onChange={modelTypeChangeHandler}
          >
            <option value="">Select model type</option>
            {itemModels.map((model) => (
              <option value={model} key={model}>
                {model}
              </option>
            ))}
          </select>
        </form>
      </UploadModal>
    </div>
  );
}

export default Upload;
