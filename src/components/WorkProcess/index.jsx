import React from "react";
import TitleSection from "../TitleSection";
import ProcessBox from "./ProcessBox";
import Button from "../Button";
import "./style.css";

function WorkProcess(props) {
  return (
    <section className="section pb pt" id="work-process">
      <div className="container">
        <TitleSection
          titlePrimary="WORK PROCESS"
          subTitle="In an ideal world this website wouldn’t exist, a client would acknowledge the
         importance of having web copy before the design starts."
        />
        <div className="process-body">
          <ProcessBox
            icon="mode_edit"
            title="Tell us what you need"
            subTitle="The Big Oxmox advised her not to do so."
          />
          <ProcessBox
            icon="badge"
            title="Get free quotes"
            subTitle="Little Blind Text didn’t listen."
          />
          <ProcessBox
            icon="mode_standby"
            title="Deliver high quality product"
            subTitle="When she reached the first hills."
          />
        </div>
        <div className="btn-process">
          <Button bgColor name="Get Started &#8594;" />
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
