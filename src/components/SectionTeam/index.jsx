import React from "react";
import TitleSection from "../TitleSection";
import MemberItem from "./MemberItem";
import "./style.css"

function SectionTeam(props) {
  return (
    <section className="section" id="team">
      <div className="container">
        <TitleSection
          titlePrimary="BEHIND THE PEOPLE"
          subTitle="It is a long established fact that create category leading brand experiences a reader will be distracted
                 by the readable content of a page when looking at its layout."
        />
        <div className="member-list">
            <div className="row">
                <MemberItem
                 img="./assets/images/photos1.jpg"
                 name="Frank Johnson"
                 duties="CEO"/>
                <MemberItem
                 img="./assets/images/photos2.jpg"
                 name="Elaine Stclair"
                 duties="DESIGNER"/>
                <MemberItem
                 img="./assets/images/photos3.jpg"
                 name="Wanda Arthur"
                 duties="DEVELOPER"/>
                <MemberItem
                 img="./assets/images/photos4.jpg"
                 name="Joshua Stemple"
                 duties="MANAGER"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTeam;
