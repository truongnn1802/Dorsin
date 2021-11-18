import React,{ useState, useEffect, useRef } from "react";
import Button from "../../Button";
import "./style.css";
  

function PricingItem({info}) {

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
    
        <div ref={colRef} className="col">
          <div className="pricing-box-item">
            <div className="price-header">
              <h4>{info.name}</h4>
              <span className="price">${info.price}</span>
              <span className="text-mute">{info.bill}</span>
            </div>
            <hr className="pricing-border" />
            <div className="price-body">
              <p className="service-item">
                Bandwidth: <span>{info.bandwidth}</span>
              </p>
              <p className="service-item">
                Onlinespace :<span>{info.onlinespace}</span>
              </p>
              <p className="service-item">
                Support: <span> {info.support}</span>
              </p>
              <p className="service-item">
                Domain: <span> {info.domain}</span>
              </p>
              <p className="service-item">
                Hidden Fees:
                <span>{info.hiddenFees}</span>
              </p>
            </div>
            <Button name="Join Now" bgColor={true} />
          </div>
        </div>
      
  );
}

export default PricingItem;
