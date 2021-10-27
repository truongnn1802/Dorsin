import React from "react";
import TitleSection from "../TitleSection";
import PricingItem from "./PricingItem";
import "./style.css";

const listInfo = [
  {
    name: "ECONOMY",
    price: "9.90",
    bill: "BILLING PER MONTH",
    bandwidth: "1GB",
    onlinespace: "50MB",
    support: "No",
    domain: "1",
    hiddenFees: "No",
  },
  {
    name: "DELUXE",
    price: "29.90",
    bill: "BILLING PER MO",
    bandwidth: "100GB",
    onlinespace: " 2 GB",
    support: "Yes",
    domain: "Unlimited",
    hiddenFees: "No",
  },
  {
    name: "ULTIMATE",
    price: "19.90",
    bill: "BILLING PER MONTH",
    bandwidth: "10GB",
    onlinespace: "500MB",
    support: "No",
    domain: "10",
    hiddenFees: "No",
  },
];

function SectionPricing(props) {
  console.log(listInfo);
  return (
    <section className="section pt-m pb" id="pricing">
      <div className="container">
        <div className="pricing-title">
          <TitleSection
            titlePrimary="OUR PRICING"
            subTitle="Call to action pricing table is really crucial to your for your business website.
            Make your bids stand-out with amazing options."
          />
        </div>
        <div className="pricing-box">
          <div className="row">
            {listInfo.map((info) => (
              <PricingItem info={info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPricing;
