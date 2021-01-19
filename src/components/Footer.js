import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__description">
            For work inquiries, collaboration or feedback drop me a line at{" "}
            <a href="mailto:danifdezalonso@gmail.com" target="_blank">
              danifdezalonso@gmail.com
            </a>
          </div>
          <div className="footer__socialmedia">
            <ul className="footer__socialmedia__links">
              <li>
                <a
                  href="https://www.linkedin.com/in/dani-fdez/"
                  class="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://danifdezalonso.medium.com/"
                  class="medium"
                  target="_blank"
                  rel="noreferrer"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/danifdezalonso"
                  class="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
