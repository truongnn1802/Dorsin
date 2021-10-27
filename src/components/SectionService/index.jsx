import React from "react";
import TitleSection from "../TitleSection";
import ServiceBox from "./ServiceBox";
import "./style.css";

function SectionService() {
  return (
    <section className="section pt-m pb-m" id="service">
      <div className="container">
        <TitleSection
          titlePrimary="OUR SERVICES"
          subTitle="We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that have meaning and add a value for our clients."
        />
        <div className="row mt-s">
          <ServiceBox
            icon="diamond"
            title="Digital Design"
            text="Some quick example text to build on the card title and make up the
              bulk of the card's content. Moltin gives you the platform."
          />
          <ServiceBox
            icon="dvr"
            title="Unlimited Colors"
            text="Credibly brand standards compliant users without extensible services.
             Anibh euismod tincidunt ut laoreet."
          />
          <ServiceBox
            icon="savings"
            title="Strategy Solutions"
            text="Separated they live in Bookmarksgrove right at the coast of the Semantics,
             a large language ocean necessary regelialia."
          />
          <ServiceBox
            icon="support"
            title="Awesome Support"
            text="It is a paradisematic country, in which roasted parts of sentences fly
             into your mouth leave for the far World."
          />
          <ServiceBox
            icon="feed"
            title="Truly Multipurpose"
            text="Even the all-powerful Pointing has no control about the blind texts
             it is an almost unorthographic."
          />
          <ServiceBox
            icon="flight"
            title="Easy to customize"
            text="Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
             She packed her seven versalia."
          />
        </div>
      </div>
    </section>
  );
}

export default SectionService;
