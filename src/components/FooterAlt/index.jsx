import React from "react";
import "./style.css"
function FooterAlt(props) {
  return (
    <section className="section" id="footer-alt">
      <div className="container">
        <div className="row">
          <div className="left">
              <p className="text-mute">2019 - 2020&#169;Dorsin - Themesbrand payment</p>
          </div>
          <div className="right">
              <img src={process.env.PUBLIC_URL+"/assets/images/payment.png"} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterAlt;
