import platform from "../assets/images/platform.png";
import delivery from "../assets/images/delivery.png";
import group from "../assets/images/group.png";

function Section1() {
  return (
    <div className="section-root">
      <div className="sec-top">
        <div className="green-line"></div>
        <div>
          <h2>WHAT WE OFFER</h2>
        </div>
      </div>
      <div className="sec-cards">
        <div className="card">
          <div className="icon-div">
            <img src={platform} />
          </div>
          <p>
            A platform to connect two parties who are willing to trade items of
            their choice
          </p>
          <div className="card-number">1</div>
        </div>
        <div className="card">
          <div className="icon-div">
            <img src={delivery} />
          </div>
          <p>Provide a delivery service if required by our users</p>{" "}
          <div className="card-number">2</div>
        </div>

        <div className="card">
          <div className="icon-div">
            <img src={group} />
          </div>
          <p>Create communities of users, where anyone can find anything</p>
          <div className="card-number">3</div>
        </div>
      </div>
      <div className="green-line green-down"></div>
    </div>
  );
}

export default Section1;
