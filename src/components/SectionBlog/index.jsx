import React from "react";
import TitleSection from "../TitleSection";
import BlogBox from "./BlogBox";
import "./style.css";

function SectionBlog(props) {
  return (
    <section className="section pt-m pb" id="blog">
      <div className="container">
        <TitleSection
          titlePrimary="BLOG"
          subTitle="Separated they live in Bookmarksgrove right at the coast of the Semantics,
              a large language ocean class at a euismod mus luctus quam."
        />
        <div className="blog-body">
            <div className="row">
                <BlogBox
                 imgUrl={process.env.PUBLIC_URL+"/assets/images/img_blog1.jpg"}
                 job="UI 	&#38; UX Design"
                 title="Doing a cross country road trip"
                 content="She packed her seven versalia, put her initial
                  into the belt and made herself on the way.."/>
                <BlogBox
                 imgUrl={process.env.PUBLIC_URL+"/assets/images/img_blog2.jpg"}
                 job="Digital Marketing"
                 title="New exhibition at our Museum"
                 content="Pityful a rethoric question ran over her cheek,
                  then she continued her way.

                 Read More "/>
                <BlogBox
                 imgUrl={process.env.PUBLIC_URL+"/assets/images/img_blog3.jpg"}
                 job="Travelling"
                 title="Why are so many people.."
                 content="Far far away, behind the word mountains, 
                 far from the countries Vokalia and Consonantia."/>
             
            </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBlog;
