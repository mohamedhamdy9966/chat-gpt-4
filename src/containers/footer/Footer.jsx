import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/gpt3Logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">
          Do You Want to Step Into The Future Before Others
        </h2>
      </div>
      <div className="gpt3__footer-btn">
        <p> Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>All rights reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Overons</p>
          <p>Overons</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>copyrights</p>
      </div>
    </div>
  );
};

export default Footer;
