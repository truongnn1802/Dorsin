import React, { useState, useEffect, useRef } from 'react';
import "./style.css"

function TestiBox(props) {

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
           <div className="testi-box mt">
           <div className="testi-box__content">
               <img src={process.env.PUBLIC_URL+props.srcImg} 
               alt="" className="testi-box__avatar" />
               <p className="text-mute">{props.content}</p>
           </div>
           <h4> {props.name} - <span className="text-mute">{props.subName}</span></h4>
       </div>
      </div>
    );
}

export default TestiBox;