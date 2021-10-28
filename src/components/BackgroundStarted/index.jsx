import React from 'react';
import Button from "../Button"
import "./style.css"
function BgStarted(props) {
    return (
        <section className="section " id="bg-started">
        <div className="background-img bg-started">
          <div className="overlay"></div>
          <div className="content-home">
            <div className="container ">
              <div className="row">
                <div className="box-body">
                  <h2 className="home-title">
                  Let's Get Started
                  </h2>
                  <hr className="border-bottom"/>
                  <p className="home-desc">
                  Far far away, behind the word mountains, far from the countries 
                  Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <Button bgColor={false} name="Get Started →"/>
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

export default BgStarted;