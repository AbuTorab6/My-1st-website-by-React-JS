import React, { Component,Fragment } from 'react';

import {Route,Switch} from '.././../node_modules/react-router-dom'


import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import CoursePage from '../pages/CoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

import RefundPolicyPage from '../pages/RefundPolicyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';


class MyRouter extends Component 
{

    render() 
    {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/course" component={CoursePage} />
                    <Route path="/portfolio" component={PortfolioPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/refundPolicy" component={RefundPolicyPage} />
                    <Route path="/projectDetails" component={ProjectDetailsPage} />
                    <Route path="/courseDetails" component={CourseDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default MyRouter;