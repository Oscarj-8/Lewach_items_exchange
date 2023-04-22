import email from "../assets/images/email.png";
import telephone from "../assets/images/telephone-call.png";
import placeholder from "../assets/images/placeholder.png";
import clock from "../assets/images/clock.png";

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contact">
        <div className="contactUs-top">
          <h1>CONTACT US</h1>
          <p>
            Thank you for visiting our website. We value your feedback and would
            love to hear from you. If you have any questions, comments, or
            concerns about our item exchange service, please contact us. We are
            available to answer your questions and provide assistance.
          </p>
        </div>
        <div className="contact-info">
          <div className="email-address">
            <div className="email-sec info-sec">
              <div className="info-icons">
                <img src={email} />
              </div>
              <div className="email-info inside-sec">
                <h2>EMAIL</h2>
                <span>h1@yahoo.com</span>
                <span>h2@yahoo.com</span>
              </div>
            </div>
            <div className="addess-sec info-sec">
              <div className="info-icons">
                <img src={placeholder} />
              </div>
              <div className="address-info inside-sec">
                <h2>ADDRESS</h2>
                <span>Arbaminch university, Lemat, Arba minch.</span>
              </div>
            </div>
          </div>
          <div className="phone-opening">
            <div className="phone-sec info-sec">
              <div className="info-icons">
                <img src={telephone} />
              </div>
              <div className="phone-info inside-sec">
                <h2>PHONE</h2>
                <span>Mobile: (555) 555-5555</span>
                <span>fax: (555) 555-5555</span>
              </div>
            </div>
            <div className="opening-sec info-sec">
              <div className="info-icons">
                <img src={clock} />
              </div>
              <div className="opening-info inside-sec">
                <h2>OPENING HOURS</h2>
                <span>Monday to Friday 8:00AM - 8:00PM </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getIn">
        <h2>GET IN TOUCH</h2>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your name" />
        <textarea placeholder="Your message" />
        <input type="submit" />
      </div>
    </div>
  );
}

export default ContactUs;
