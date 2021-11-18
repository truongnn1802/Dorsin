import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function SectionSocial(props) {

  
  const [width, setWidth] = useState(window.innerWidth);

  const leftRef = useRef();
  const rightRef = useRef();
  useEffect(() => {
    if (width < 992) {
      rightRef.current.classList.add("col-12");
      leftRef.current.classList.add("col-12");
    }
    if (width > 991) {
      leftRef.current.classList.add("col-4");
      rightRef.current.classList.add("col-8");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("chạy vào đây");
      // console.log("resize: "+width);

      if (width < 992) {
        rightRef.current.classList.add("col-12");
        leftRef.current.classList.add("col-12");

        leftRef.current.classList.remove("col-4");
        rightRef.current.classList.remove("col-8");
      }
      if (width > 991) {
        leftRef.current.classList.add("col-4");
        rightRef.current.classList.add("col-8");

        leftRef.current.classList.remove("col-12");
        rightRef.current.classList.remove("col-12");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <section className="section" id="social">
      <div className="container">
        <div className="row">
          <div className="col" ref={leftRef}>
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
          <div className="col" ref={rightRef}>
            <div className="contact">
              <span className="contact-icon">
                <i class="fas fa-phone"></i>
              </span>
              <span className="contact-content">+91 123 4556 789</span>
            </div>
          </div>
          <div className="col" ref={rightRef}>
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
