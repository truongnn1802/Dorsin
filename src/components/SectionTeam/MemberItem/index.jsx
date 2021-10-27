import React from "react";
import "./style.css";

function MemberItem(props) {
  return (
    <div className="col col-3">
      <div className="member-item">
        <div className="member__photo">
          <img src={props.img} 
          alt="Frank Johnson" />
        </div>
        <h3 className="member__name">{props.name}</h3>
        <h4 className="member__duties">{props.duties}</h4>
      </div>
    </div>
  );
}

export default MemberItem;
