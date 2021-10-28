import React from 'react';
import BgHome from '../../components/BackgroundHome';
import BgStarted from '../../components/BackgroundStarted';
import BgrUnder from '../../components/BgrUnder';
import Footer from '../../components/Footer';
import FooterAlt from '../../components/FooterAlt';
import Header from '../../components/Header';
import SectionBlog from '../../components/SectionBlog';
import SectionContact from '../../components/SectionContact';
import SectionFeature from '../../components/SectionFeature';
import SectionPricing from '../../components/SectionPricing';
import SectionService from '../../components/SectionService';
import SectionSocial from '../../components/SectionSocial';
import SectionTeam from '../../components/SectionTeam';
import SectionTesti from '../../components/SectionTesti';
import Settings from '../../components/Settings';
import WorkProcess from '../../components/WorkProcess';
import './style.css'




function HomePage(props) {
  
    return (
        <div className="wrapper">
            <Header />
            <BgHome />
            <SectionService/>
            <SectionFeature/>
            <BgrUnder/>
            <SectionPricing/>
            <SectionTeam/>
            <WorkProcess/>
            <SectionTesti/>
            <BgStarted/>
            <SectionBlog/>
            <SectionContact/>
            <SectionSocial/>
            <Footer/>
            <FooterAlt/>
            <Settings/>
        </div>
    );
}

export default HomePage;