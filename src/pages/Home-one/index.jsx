import React, { useState } from "react";
import BgHome from "../../components/BackgroundHome";
import BgStarted from "../../components/BackgroundStarted";
import BgrUnder from "../../components/BgrUnder";
import Footer from "../../components/Footer";
import FooterAlt from "../../components/FooterAlt";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import SectionBlog from "../../components/SectionBlog";
import SectionContact from "../../components/SectionContact";
import SectionFeature from "../../components/SectionFeature";
import SectionPricing from "../../components/SectionPricing";
import SectionService from "../../components/SectionService";
import SectionSocial from "../../components/SectionSocial";
import SectionTeam from "../../components/SectionTeam";
import SectionTesti from "../../components/SectionTesti";
import Settings from "../../components/Settings";
import WorkProcess from "../../components/WorkProcess";

function HomePage() {
  const [open, setOpen] = useState(false);

  const onClickHome = (status) => {
    setOpen(status);
    console.log("status: ",status);
  };
  console.log("re-render lại home",open);

  const handleClose =(status)=>{
     console.log(status);
     setOpen(status)
  }

  return (
    <div className="wrapper">
      <Header />
      <BgHome onClickHome={onClickHome} />
      <SectionService />
      <SectionFeature />
      <BgrUnder />
      <SectionPricing />
      <SectionTeam />
      <WorkProcess />
      <SectionTesti />
      <BgStarted />
      <SectionBlog />
      <SectionContact />
      <SectionSocial />
      <Footer />
      <FooterAlt />
      <Settings />
      <Modal open={open} onClose={handleClose}/>
    </div>
  );
}

export default HomePage;
