import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

Button.propTypes = {
  bgColor: PropTypes.bool,
  name: PropTypes.string,
};
Button.defaultProps = {
  bgColor: false,
  name: " ",
};
function Button(props) {
  console.log(props.bgColor);
  return (
    <div>
      {props.bgColor === true ? (
        <a href="#" className="btn">
          {props.name}
        </a>
      ) : (
        <a href="#" className="btn" style={{ backgroundColor:"#FFF",color:"#000" }}>
          {props.name}
        </a>
      )}
    </div>
  );
}

export default Button;
