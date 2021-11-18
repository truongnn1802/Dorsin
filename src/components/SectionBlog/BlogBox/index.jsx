import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function BlogBox(props) {

  const [width, setWidth] = useState(window.innerWidth);

  const colRef = useRef();

 useEffect(()=>{
  if (width < 992) {   
    colRef.current.classList.add("col-12");

  } if(width >991) {
    colRef.current.classList.add("col-4");

  }
 },[])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("chạy vào đây");
  // console.log("resize: "+width);
  
      if (width < 992) {   
        
        colRef.current.classList.add("col-12");
        colRef.current.classList.remove("col-4");
  
      } if(width >991) {
        colRef.current.classList.add("col-4");
        colRef.current.classList.remove("col-12");
  
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="col" ref={colRef}>
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
