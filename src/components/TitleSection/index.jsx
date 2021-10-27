import React, { Fragment } from "react";
import './style.css'


function TitleSection(props) {
  return (
    <div className="section__title">
      <h2 className="title-primary">{props.titlePrimary}</h2>
      <hr className="border-title" />
      <p className="sub-title text-mute">
       {props.subTitle}
      </p>
    </div>
  );
}

export default TitleSection;
