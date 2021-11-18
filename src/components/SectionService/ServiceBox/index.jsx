import React, { useState, useEffect, useRef } from "react";
import "./style.css";
function ServiceBox(props) {
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
    <div ref={colRef} className="col mt-xs">
      <div className="service-box mt-s">
        <div className="service-box__icon mb-s">
          <span class="material-icons">{props.icon}</span>
        </div>
        <h4 className="title-service">{props.title}</h4>
        <p className="text-mute mt-s">{props.text}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
