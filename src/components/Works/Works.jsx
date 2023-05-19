import React, { useContext } from "react";
import "./Works.css";
import figma from "../../img/figma.png";
import azure from "../../img/azure.jpg";
import aws from "../../img/aws.png";
import jira from "../../img/jira.png";
import sketch from "../../img/sketch.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const inlineStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked with these
          </span>
          <span>Tools & Platforms</span>
          <spane style={inlineStyles} className="introState">
          With extensive experience in AWS, Azure, Figma, Sketch, and Jira,<br/> I excel in cloud computing solutions, deploying scalable applications with high reliability.
            <br/>Proficient in design software, I create visually appealing interfaces.<br/>
            Additionally, my expertise in Jira ensures efficient task tracking and coordination, <br/>leading to timely project delivery. 
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={figma} alt="" width="116px" height="118px"/>
          </div>
          <div className="w-secCircle">
            <img src={azure} alt="" width="320px" height="180px"/>
          </div>
          <div className="w-secCircle">
            <img src={aws} alt="" width="116px" height="100px"/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={jira} alt="" width="116px" height="118px"/>
          </div>
          <div className="w-secCircle">
            <img src={sketch} alt="" width="116px" height="118px"/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
