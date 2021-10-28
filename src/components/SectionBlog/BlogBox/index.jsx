import React from "react";
import "./style.css";

function BlogBox(props) {
  return (
    <div className="col col-4">
      <div className="blog-box">
        <img
          src={props.imgUrl}
          alt={props.name}
          className="blog__thumnail"
        />
        <h5 className="text-mute">{props.job}</h5>
        <h4>
          <a href="" className="blog-box__title">
            {props.title}
          </a>{" "}
        </h4>
        <p className="blog-box__content text-mute">
          {props.content}
        </p>
        <a href="#" className="btn-more">
          Read more 	&#8594;
        </a>
      </div>
    </div>
  );
}

export default BlogBox;
