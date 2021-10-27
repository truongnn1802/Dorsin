import React from "react";
import Button from "../../Button";
import "./style.css";
  

function PricingItem({info}) {
    console.log( info);

  return (
    
        <div className="col col-4">
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
