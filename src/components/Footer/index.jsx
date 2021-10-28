import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <h3>dorsin</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  about us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  careers
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-3">
            <h3>infomation</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  Terms & Condition
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  about us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Jobs
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Bookmarks
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-3">
            <h3>Support</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  FAQ
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Contact
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Disscusion
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-3">
            <h3>subscribe</h3>
            <p>
              In an ideal world this text wouldn’t exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <form action="" className="form-group">
              <input type="text"
               placeholder="Email" />
              <button className="btn-send">
                <i class="far fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;
