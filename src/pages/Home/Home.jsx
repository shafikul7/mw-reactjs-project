import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import IndustryLeaders from '../../components/IndustryLeaders/IndustryLeaders';
import ProjectHistory from '../../components/ProjectHistory/ProjectHistory';
import IndustryExpertise from '../../components/Industry-Expertise/IndustryExpertise';
import WorkingUs from '../../components/WorkingUs/WorkingUs';
import HighlightProject from '../../components/Highlight-project/HighlightProject';
import Footer from '../../components/Footer/Footer';
import Strategy from '../../components/Strategy/Strategy';
import InfiniteLoopComponent from '../../components/Test/Test';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Hero></Hero>
            <IndustryLeaders></IndustryLeaders>
            <ProjectHistory></ProjectHistory>
            <Strategy></Strategy>
            <HighlightProject></HighlightProject>
            <WorkingUs></WorkingUs>
            <IndustryExpertise></IndustryExpertise>
            <Footer></Footer>
            
        
        </div>
    );
}

export default Home;
