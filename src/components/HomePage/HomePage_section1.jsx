import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ItemsCard from "./ItemsCard";

function HomePage_section1() {
  return (
    <div className="homePage-section1">
      <FaChevronLeft size="2em" />
      {/* <div className="section1-card">
        <div className="section1-card-top">
          <div className="card-top-text">
            <h2>Asus laptop</h2>
            <span>
              Body Medium Lorem ipsum dolor sit amet consectetur cambuur.
            </span>
          </div>
          <div className="card-top-img"></div>
        </div>
        <div className="section1-card-bottom">
          <button className="card-bottom-btn">Trade</button>
          <button className="card-bottom-btn">Contact</button>
        </div>
      </div> */}
      <ItemsCard />
      <FaChevronRight size="2em" />
    </div>
  );
}

export default HomePage_section1;
