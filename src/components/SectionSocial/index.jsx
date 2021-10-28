import React from "react";
import "./style.css";

function SectionSocial(props) {
  return (
    <section className="section" id="social">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className="social-network">
              <a href="" className="social-network-link">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" className="social-network-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" className="social-network-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="" className="social-network-link">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="" className="social-network-link">
                <i class="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          <div className="col col-3">
            <div className="contact">
              <span className="contact-icon">
                <i class="fas fa-phone"></i>
              </span>
              <span className="contact-content">+91 123 4556 789</span>
            </div>
          </div>
          <div className="col col-3">
            <div className="contact">
              <span className="contact-icon">
              <i class="far fa-envelope"></i>
              </span>
              <span className="contact-content">Support@info.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSocial;
