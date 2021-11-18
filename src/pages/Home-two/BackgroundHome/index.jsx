import React from "react";
import "./style.css";

function BgHome({ onClickHome }) {
  const handleClickButton = () => {
    if (!onClickHome) return;
    onClickHome(true);
  };

  console.log("re-render BG home");

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
                  <a
                    href="#"
                    className="play-btn"
                    onClick={() => {
                      handleClickButton();
                    }}
                  >
                    <span class="material-icons icon-play">play_arrow</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(BgHome);
