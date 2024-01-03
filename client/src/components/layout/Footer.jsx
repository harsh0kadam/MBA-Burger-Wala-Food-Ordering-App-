import React from "react";

import { AiFillInstagram, AiFillLinkedin ,  AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/harsh9039/">
        <AiFillLinkedin /> 
        </a>
        <a href="https://instagram.com/_harshit_333">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/harsh0kadam">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
