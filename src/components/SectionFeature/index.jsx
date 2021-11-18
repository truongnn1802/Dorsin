import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import "./style.css";

function SectionFeature(props) {
  const [width, setWidth] = useState(window.innerWidth);

  const leftRef = useRef();
  const rightRef = useRef();
  useEffect(() => {
    if (width < 992) {
      rightRef.current.classList.add("col-12");
      leftRef.current.classList.add("col-12");
    }
    if (width > 991) {
      leftRef.current.classList.add("col-5");
      rightRef.current.classList.add("col-7");
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

        leftRef.current.classList.remove("col-5");
        rightRef.current.classList.remove("col-7");
      }
      if (width > 991) {
        rightRef.current.classList.add("col-7");
        leftRef.current.classList.add("col-5");

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
    <section className="section pt pb" id="feature">
      <div className="container">
        <div className="row">
          <div ref={leftRef} className="col col-5">
            <div className="feature-box">
              <h3 className="feature-title">
                A digital web design studio creating modern &#38; engaging
                online experiences
              </h3>
              <p className="text-mute">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  We put a lot of effort in design.
                </li>
                <li className="feature-item">
                  The most important ingredient of successful website.
                </li>
                <li className="feature-item">
                  Sed ut perspiciatis unde omnis iste natus error sit.
                </li>
                <li className="feature-item">Submit Your Orgnization.</li>
              </ul>
              <Button name="Learn more	&#8594;" bgColor={true} />
            </div>
          </div>
          <div ref={rightRef} className="col col-7">
            <div className="feature-right">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/online-world.svg"}
                alt="feature-img"
                className="feature-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFeature;
