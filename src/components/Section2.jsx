import community from "../assets/images/community.png";
import connect from "../assets/images/connect.png";
import delivery from "../assets/images/page3delivery.jpg";
import waste from "../assets/images/waste.png";
import variety from "../assets/images/variety.png";

function Section2() {
  return (
    <div className="page3-cards">
      <div className="page3-card">
        <div className="page3-text">
          <h2>Build a community of like minded people</h2>
          <p>
            Connect with others who share your value and interests through items
            exchange, creating a community centered around sustainability and
            reducing waste
          </p>
          <img src={community} />
        </div>
      </div>
    </div>
  );
}

export default Section2;
