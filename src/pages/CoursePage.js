import React, { Component,Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import EveryPageTop from '../components/EveryPageTop/EveryPageTop';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';


class CoursePage extends Component 
{

    componentDidMount()
    {
        window.scroll(0,0)
    }

    render() 
    {
        return (
            <Fragment>
                <TopNavigation webTitle="course" />
                <EveryPageTop pageTitle="All Courses" />
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;