import React , { useState, useEffect, useRef } from "react";
import "./style.css";

function MemberItem(props) {

  const [width, setWidth] = useState(window.innerWidth);

  const colRef = useRef();

 useEffect(()=>{
  if (width < 576) {   
    colRef.current.classList.add("col-12");

  }else if(width <992) {
    colRef.current.classList.add("col-6");

  }else{
    colRef.current.classList.add("col-3")
  }
 },[])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
  // console.log("resize: "+width);
  
      if (width < 576) {   
        
        colRef.current.classList.add("col-12");
        colRef.current.classList.remove("col-3");
        colRef.current.classList.remove("col-6");

  
      }else if(width < 992) {
        colRef.current.classList.add("col-6");
        colRef.current.classList.remove("col-12");
        colRef.current.classList.remove("col-3");
  
      }else{
        colRef.current.classList.add("col-3");
        colRef.current.classList.remove("col-12");
        colRef.current.classList.remove("col-6");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div
    ref={colRef}
     className="col">
      <div className="member-item">
        <div className="member__photo">
          <img src={process.env.PUBLIC_URL+props.img} 
          alt="Frank Johnson" />
        </div>
        <h3 className="member__name">{props.name}</h3>
        <h4 className="member__duties">{props.duties}</h4>
      </div>
    </div>
  );
}

export default MemberItem;
