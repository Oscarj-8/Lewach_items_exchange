import footerLogo from "../assets/images/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer-root">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={footerLogo} alt="Lewach logo" />
        </div>
        <div className="footer-text">
          <p>
            Lewach is an items exchange website that users can exchange their
            used items with each other. for more read about us section
          </p>
          <div className="footer-social-icons">
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebook-icon social-icons"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="twitter-icon social-icons"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="instagram-icon social-icons"
            />
          </div>
        </div>
      </div>
      <div className="footer-center"></div>
      <div className="footer-right"></div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;
