import React from 'react';
import BgHome from '../../components/BackgroundHome';
import BgrUnder from '../../components/BgrUnder';
import Header from '../../components/Header';
import SectionFeature from '../../components/SectionFeature';
import SectionPricing from '../../components/SectionPricing';
import SectionService from '../../components/SectionService';
import SectionTeam from '../../components/SectionTeam';
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
        </div>
    );
}

export default HomePage;