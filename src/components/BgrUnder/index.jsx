import React from "react";
import Button from "../Button";
import "./style.css";

function BgrUnder() {
  return (
    <section className="section bg-below">
      <div className="background-img bgr-below">
        <div className="overlay"></div>
        <div className="content-home">
          <div className="container ">
            <div className="row">
              <div className="box-body">
                <h2 className="bg-below__title">
                  Build your dream website today
                </h2>
                <p className="bg-below__desc">
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her.
                </p>
                <Button name="View Plan &#38; Pricing" bgColor={false}/>
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

export default BgrUnder;
