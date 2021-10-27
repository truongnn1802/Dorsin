import React from "react";
import "./style.css";
function ServiceBox(props) {
  return (
    <div className="col col-4 mt-xs">
      <div className="service-box mt-s">
        <div className="service-box__icon mb-s">
          <span class="material-icons">{props.icon}</span>
        </div>
        <h4 className="title-service">{props.title}</h4>
        <p className="text-mute mt-s">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default ServiceBox;
