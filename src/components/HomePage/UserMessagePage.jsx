import React from "react";
import Home_page_header from "./Home_page_header";
import variety from "../../assets/images/variety.png";
import testimonial from "../../assets/images/testimonial.jpg";
import "./UserMessagePage.css";

function UserMessagePage() {
  const message = [
    {
      id: 1,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 2,
      image: `${testimonial}`,
      userName: "Gelila",
      text: "dolor sit amet, consectetu Lorem ipsum ",
    },
    {
      id: 3,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 4,
      image: `${testimonial}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 5,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 6,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 7,
      image: `${testimonial}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
  ];
  return (
    <div className="userMessage-root">
      <Home_page_header />
      <div className="userMessage-top">
        <h3>Messages</h3>
        <div className="userMessage-counter">
          <span>3</span>
        </div>
      </div>
      {message.map(({ id, image, userName, text }) => (
        <div className="userMessage-card" key={`message-${id}`}>
          <img src={image} alt="" />
          <div className="userMessage-main">
            <h2>{userName}</h2>
            <span>{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserMessagePage;
