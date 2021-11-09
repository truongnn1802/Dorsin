import React, { useRef, useState } from "react";
import Color from "./color";
import "./style.css";

let root = document.documentElement;

const listColor = [
  "#fb3e3e",
  "#1bbc9d",
  "#f85f89",
  "#00e6e6",
  "#704fff",
  "#2762da",
  "#f09105",
  "#f6cb42",
];
function Settings() {
  const handleChangeColor = function (color) {
    console.log(color);
    root.style.setProperty('--primary-color',`${color}`);
  };
  const settingElement = useRef();

  const handleClickCollapse = ()=>{
    console.log(settingElement.current);
    settingElement.current.classList.toggle("open");  
  }

  return (
    <div id="setting" ref={settingElement}>
      <div className="setting-icon"
       onClick={handleClickCollapse}>
        <span class="material-icons">settings</span>
      </div>
      <div className="choose-color">
        <h4>Select Your Color</h4>
        <div className="list-color">
        <Color
             listColor={listColor}
              onChangeColor={handleChangeColor} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
