import "./homePage.css";
import logo from "../../assets/images/logoWhite.png";
import menu from "../../assets/images/phone-menu.png";

function Home_page_header() {
  return (
    <div className="home-page-header">
      <img src={logo} />
      <img src={menu} className="phone-menu" />
    </div>
  );
}

export default Home_page_header;
