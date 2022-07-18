import React, { Component,Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import Technology from '../components/Technology/Technology';
import Summary from '../components/Summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Course from '../components/Course/Course';
import Video from '../components/Video/Video'
import Client from '../components/Client/Client';
import Footer from '../components/Footer/Footer';



class HomePage extends Component 
{

    componentDidMount()
    {
        window.scroll(0,0)
    }

    render() 
    {
        return (
            <Fragment>
                <TopNavigation webTitle="home" />
                <TopBanner/>
                <Services/>
                <Technology/>
                <Summary/>
                <RecentProject/>
                <Course/>
                <Video/>
                <Client/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;