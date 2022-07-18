import React, { Component,Fragment } from 'react';


import TopNavigation from '../components/TopNavigation/TopNavigation';
import EveryPageTop from '../components/EveryPageTop/EveryPageTop';
import RefundPolicyDescription from '../components/RefundPolicyDescription/RefundPolicyDescription';
import Footer from '../components/Footer/Footer';


class RefundPolicyPage extends Component 
{
    componentDidMount()
    {
        window.scroll(0,0)
    }

    render() 
    {
        return (
            <Fragment>
                <TopNavigation webTitle="refundPolicy"/>
                <EveryPageTop pageTitle="Refund Policy" />
                <RefundPolicyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPolicyPage;