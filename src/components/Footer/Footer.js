import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made with <i className="fa fa-heart fa-1x"  style={{color:"red"}}> </i> by Sathiyapriya Krishnasamy
      </span>
      <div className="iconContainer">
        <a href="https://github.com/sathiyapriyakm" target="__blank">
          <i className="fab fa-github-square  fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/sathiyapriya-krishnasamy-2259ba55" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://sathiyapriya-krishnasamy.netlify.app" target="__blank">
          <i className="fa fa-briefcase fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
