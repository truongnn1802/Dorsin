import React from "react";
import Button from "../Button";
import "./style.css";

function SectionFeature(props) {
  return (
    <section className="section pt pb" id="feature">
      <div className="container">
        <div className="row">
          <div className="col col-5">
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
                  <li className="feature-item">We put a lot of effort in design.</li>
                  <li className="feature-item">The most important ingredient of successful website.</li>
                  <li className="feature-item">Sed ut perspiciatis unde omnis iste natus error sit.</li>
                  <li className="feature-item">Submit Your Orgnization.</li>
              </ul>
              <Button name="Learn more	&#8594;" bgColor={true}/>
            </div>
          </div>
          <div className="col col-7">
            <div className="feature-right">
              <img src={process.env.PUBLIC_URL+"/assets/images/online-world.svg"} alt="feature-img" className="feature-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFeature;
