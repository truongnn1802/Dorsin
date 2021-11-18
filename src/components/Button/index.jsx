import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

Button.propTypes = {
  bgColor: PropTypes.bool,
  name: PropTypes.string,
};
Button.defaultProps = {
  bgColor: false,
  name: " ",
};
function Button(props) {
  console.log("render button");
  const handleClick = function (e) {
    console.log(e.target);
    const root = document.querySelector(":root");
    const rootStyles = getComputedStyle(root);
    const mainColor = rootStyles.getPropertyValue('--primary-color')
console.log(mainColor)
  };

  return (
    <div>
      {props.bgColor === true ? (
        <a href="#"
         className="btn"
         onClick={handleClick}>
          {props.name}
        </a>
      ) : (
        <a
          href="#"
          className="btn"
          style={{ backgroundColor: "#FFF", color: "#000" }}
        >
          {props.name}
        </a>
      )}
    </div>
  );
}

export default Button;
