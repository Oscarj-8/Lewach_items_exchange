import footerLogo from "../assets/images/footerLogo.png";

function Footer() {
  return (
    <div className="footer-root">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={footerLogo} alt="Lewach logo" />
        </div>
        <div className="footer-teext">
          <p>
            Lewach is an items exchange website that users can exchange their
            used items with each other. for more read about us section
          </p>
        </div>
        <div className="footer-social-icons"></div>
      </div>
      <div className="footer-center"></div>
      <div className="footer-right"></div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;
