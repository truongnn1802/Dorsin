import React from "react";
import TitleSection from "../TitleSection";
import "./style.css";
import TestiBox from "./TestiBox";
function SectionTesti(props) {
  return (
    <section className="section pb pt" id="testi">
      <div className="container">
        <TitleSection
          titlePrimary="WHAT THEY'VE SAID"
          subTitle="The Big Oxmox advised her not to do so, because there were thousands
           of bad Commas, wild Question Marks and devious Semikoli."
        />
        <div className="testi-body">
          <div className="row">
            <TestiBox
              srcImg={"assets/images/avatar1.jpg"}
              content="“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. 
              That's why I need to throw curve balls.”"
              name="RUBEN REED"
              subName="Charleston"
            />
            <TestiBox
              srcImg={"assets/images/avatar2.jpg"}
              content="“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures
               and the whole of nature and its beauty.”"
              name="MICHAEL P. HOWLETT "
              subName="Worcester"
            />
            <TestiBox
              srcImg={"assets/images/avatar3.jpg"}
              content="“I've learned that people will forget what you said, people will forget what you did, but people will never
               forget how you made them feel.”"
              name="THERESA D. SINCLAIR"
              subName="Lynchburg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTesti;
