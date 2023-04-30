import left from "../assets/images/left-arrow.png";
import right from "../assets/images/right-arrow.png";
import quote from "../assets/images/quote.png";

function Testimonial() {
  return (
    <div name="testimonial" className="testimonial-root">
      <div className="testimonial-header">
        <h2>Testimonials</h2>
      </div>
      <div className="comment-sec">
        <div className="arrow left">
          <img src={left} alt="left-arrow" />
        </div>

        <div className="comment comment-box1">
          <img className="immgg" src={quote} alt="quote icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem tempore mollitia eos recusandae illo quasi ad cumque,
            at doloribus nulla eveniet
          </p>
          <div className="testimonial-bottom">
            <span>Joan Fergusson</span>
          </div>
        </div>
        <div className="arrow right">
          <img src={right} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
