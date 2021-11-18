import React, { useState, useEffect, useRef } from "react";
import TitleSection from "../TitleSection";
import "./style.css";
function SectionContact(props) {

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
    <section id="contact" className="section pt pb">
      <div className="container">
        <TitleSection
          titlePrimary="GET IN TOUCH"
          subTitle="We thrive when coming up with innovative ideas but also understand 
            that a smart concept should be supported with measurable results."
        />
        <div className="row">
          <div className="col" ref={leftRef}>
            <div className="contact-info">
              <h5>Office Address 1:</h5>
              <p className="text-mute">4461 Cedar Street Moro, AR 72368</p>
            </div>
            <div className="contact-info">
              <h5>Office Address 2:</h5>
              <p className="text-mute">4461 Cedar Street Moro, AR 72368</p>
              <p className="text-mute"> New Orleans, LA 70171</p>
            </div>
            <div className="contact-info">
              <h5>Working Hours:</h5>
              <p className="text-mute">9:00AM To 6:00PM</p>
            </div>
          </div>
          <div className="col" ref={rightRef}>
            <div className="contact-form">
              <form action="" className="form-group">
                <div className="row">
                  <div className="col col-6">
                    <input
                      type="text"
                      placeholder="Your name *"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="col col-6">
                    <input
                      type="text"
                      placeholder="Your email *"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col col-12">
                    <input
                      type="text"
                      placeholder="Your subject"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col col-12">
                    <textarea
                      className="form-input"
                      name="comments"
                      id="comment"
                      rows="4"
                      placeholder="Your messages..."
                    ></textarea>
                  </div>
                </div>
                <div style={{textAlign:"right"}}>
                <input
                 type="submit"
                 id="submit"
                 value="Send message"
                 className="btn-submit btn "/>
                </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
