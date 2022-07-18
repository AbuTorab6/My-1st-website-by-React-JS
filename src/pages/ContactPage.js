import React, { Component,Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import EveryPageTop from '../components/EveryPageTop/EveryPageTop';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';


class ContactPage extends Component 
{
    componentDidMount()
    {
        window.scroll(0,0)
    }

    render() 
    {
        return (
            <Fragment>
                <TopNavigation webTitle="contact" />
                <EveryPageTop pageTitle="Contact" />
                <ContactForm/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;