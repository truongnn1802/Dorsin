import React from "react";
import "./style.css";

function BgHome() {
  return (
    <section className="section bgHome">
      <div className="background-img">
        <div className="overlay"></div>
        <div className="content-home">
          <div className="container ">
            <div className="row">
              <div className="box-body">
                <h1 className="home-title">
                  We help startups launch their products
                </h1>
                <p className="home-desc">
                  Etiam sed.Interdum consequat proin vestibulum class at.
                </p>
                <div className="play-video">
                  <a href="#" className="play-btn">
                    <span class="material-icons icon-play">play_arrow</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-pattern-effect">
            <img src={"assets/images/bg-pattern.png"} alt="" />
        </div>
      </div>

    </section>
  );
}

export default BgHome;
