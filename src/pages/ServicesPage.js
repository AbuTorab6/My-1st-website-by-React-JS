import React, { Component,Fragment } from 'react';


import TopNavigation from '../components/TopNavigation/TopNavigation';
import EveryPageTop from '../components/EveryPageTop/EveryPageTop';
import Services from '../components/Services/Services';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

class ServicesPage extends Component 
{

    componentDidMount()
    {
        window.scroll(0,0)
    }

    render() 
    {
        return (
            <Fragment>
                <TopNavigation webTitle="services" />
                <EveryPageTop pageTitle="Get My Services"/>
                <Services/>
                <ContactForm/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;