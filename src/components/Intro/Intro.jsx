import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  
  const inlineStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    window.location.href = 'https://github.com/Prabhav49'; // Replace with your desired link
  };
  const handleClick2 = () => {
    window.location.href = 'https://www.linkedin.com/in/prabhav-pandey-228949201'; // Replace with your desired link
  };
  const handleClick3 = () => {
    window.location.href = 'https://instagram.com/prabhav_pandey49?igshid=ZGUzMzM3NWJiOQ=='; // Replace with your desired link
  };
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Prabhav Pandey</span>
          <span style={inlineStyles} className="introState">
            Frontend Developer : Turning design visions into immersive digital experiences, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Prabhav49" target="_blank" rel="noopener noreferrer">
          <img src={Github} onClick={handleClick}alt="" />
          </a>
          <a href="https://www.linkedin.com/in/prabhav-pandey-228949201" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} onClick={handleClick2}alt="" />
          </a>
          <a href="https://instagram.com/prabhav_pandey49?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} onClick={handleClick3}alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" className="profileName" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
