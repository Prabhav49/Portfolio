import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import postNow from "../../img/postNow.png";
import banking from "../../img/bankinngApp.png";
import sahyog from "../../img/sahyog.png";
import grocery from "../../img/grocery.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    window.location.href = 'https://github.com/Prabhav49/HBOI'; // Replace with your desired link
  };
  const handleClick2 = () => {
    window.location.href = 'https://github.com/Prabhav49/Post-Now'; // Replace with your desired link
  };
  const handleClick3 = () => {
    window.location.href = 'https://github.com/Prabhav49/Sahyog'; // Replace with your desired link
  };
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://github.com/Prabhav49/Post-Now" target="_blank" rel="noopener noreferrer">
          <img src={postNow} height="230px" width="950px" onClick={handleClick2}alt="" />
          </a>
          <h2>Post Now - Say it Social</h2>
          <h4>&#x2022; Social Media Web Application by using MERN.<br/>&#x2022; Created a Web Application which contains a login,<br/> signup and a post feed, with functionality of adding<br/> and removing
          friends and navigating to user widget.</h4>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/Prabhav49/HBOI" target="_blank" rel="noopener noreferrer">
          <img src={banking} onClick={handleClick}alt="" />
          </a>
          <h2>HBOI -Hamilton Bank of India</h2>
          <h4>&#x2022; A Banking Web Application using MERN.<br/>&#x2022; Created a Web Application which contains a login, signup <br/>and a dashboard for different services of bank like Account<br/>
        detail, Chatbot, Premium Calculator.</h4>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/Prabhav49/Sahyog" target="_blank" rel="noopener noreferrer">
          <img src={sahyog} onClick={handleClick3}alt="" />
          </a>
          <h2>Sahayog - Crowd Funding App</h2>
          <h4>&#x2022; Created a Website using Html, CSS, Javascript, MongoDB.<br/>&#x2022; Created a Web Application which contains a login, signup<br/> and a dashboard for donating and requesting for funds.</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={grocery} alt="" height="230px" width="950px" />
          <h2>E Grocery - Only the Fresh</h2>
          <h4>&#x2022; Created a Website using Html, CSS, Javascript,PHP<br/>&#x2022; Created a Web Application which contains a login, signup<br/> and a dashboard for E Grocery shopping</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
