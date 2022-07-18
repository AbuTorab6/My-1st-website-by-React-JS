import React, { Component,Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import EveryPageTop from '../components/EveryPageTop/EveryPageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';

class ProjectDetailsPage extends Component 
{
    componentDidMount()
    {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation webTitle="projectDetails" />
                <EveryPageTop pageTitle="Project Details" />
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;