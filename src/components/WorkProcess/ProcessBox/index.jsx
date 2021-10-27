import React from "react";
import "./style.css";

function ProcessBox(props) {
  return (
    <div className="process-box">
      <div className="process-box__icon">
        <span class="material-icons">{props.icon}</span>
      </div>
      <h4>{props.title}</h4>
      <p className="text-mute">{props.subTitle}</p>
      <div className="process-line">
        <span class="material-icons">arrow_forward_ios</span>
      </div>
    </div>
  );
}

export default ProcessBox;
