import React from 'react';
import "./style.css"

function TestiBox(props) {
    return (
      <div className="col col-4">
           <div className="testi-box">
           <div className="testi-box__content">
               <img src={props.srcImg} 
               alt="" className="testi-box__avatar" />
               <p className="text-mute">{props.content}</p>
           </div>
           <h4> {props.name} - <span className="text-mute">{props.subName}</span></h4>
       </div>
      </div>
    );
}

export default TestiBox;