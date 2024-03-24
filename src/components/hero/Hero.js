import React from "react";
import "./hero.css";
import { IoChevronForward } from "react-icons/io5";
function Hero({ title, describtion, bg, id, logoImg }) {
  const titleStyle = { color: id == 1 ? "white" : "black" };
  const bannerStyle =
    id == 3 ? { position: "relative", top: "250px" } : { bottom: "150px" };
  return (
    <div className="hero">
      <div style={{ backgroundImage: `url(${bg})` }} className="banner">
        <div style={bannerStyle} className="banner__info">
          <h1 style={titleStyle}>{title}</h1>
          <img className="herologo" src={logoImg} alt="" />
          <h3 style={titleStyle}>{describtion}</h3>
          <div className="links">
            <div className="links">
              <a href="#">
                Learn more <IoChevronForward />
              </a>
              <a href="#">
                Buy <IoChevronForward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
