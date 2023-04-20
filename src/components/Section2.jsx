import community from "../assets/images/community.png";
import connect from "../assets/images/connect.png";
import delivery from "../assets/images/delivery2.png";
import waste from "../assets/images/waste.png";
import variety from "../assets/images/variety.png";

function Section2() {
  return (
    <div className="page3-cards">
      <div className="page3-card card-1">
        <div className="page3-text">
          <h2>Build a community of like minded people</h2>
          <p>
            Connect with others who share your value and interests through items
            exchange, creating a community centered around sustainability and
            reducing waste
          </p>
        </div>
        <img src={community} />
      </div>
      <div className="page3-card card-2">
        <div className="page3-text">
          <h2>Connect with your community</h2>
          <p>
            Lewach helps with you connect with your local community by
            exchanging items with people nearby. Support small businesses and
            meet new people without leaving the comfort of your own home
          </p>
        </div>
        <img src={connect} />
      </div>
      <div className="page3-card card-3">
        <div className="page3-text">
          <h2>REDUCE WASTE</h2>
          <p>
            By exchanging items with others, you can reduce waste and help the
            environment. Lewach encourages sustainability and supports the
            sharing economy.
          </p>
        </div>
        <img src={waste} />
      </div>
      <div className="page3-card card-4">
        <div className="page3-text">
          <h2>Convenient delivery service</h2>
          <p>
            Our delivery service makes it easy to exchange items with others in
            your community. You can arrange for pick-up and delivery of items,
            saving you time and hassle.
          </p>
        </div>
        <img src={delivery} />
      </div>
      <div className="page3-card card-5">
        <div className="page3-text">
          <h2>increase variety in your life</h2>
          <p>
            Find new items to enjoy and explore through item exchange, including
            unique and interesting pieces that might not have otherwise
            discovered.
          </p>
        </div>
        <img src={variety} />
      </div>
    </div>
  );
}

export default Section2;
