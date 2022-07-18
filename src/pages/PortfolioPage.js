import React, { Component,Fragment} from 'react';



import TopNavigation from '../components/TopNavigation/TopNavigation';
import EveryPageTop from '../components/EveryPageTop/EveryPageTop';
import AllProject from '../components/AllProject/AllProject';
import Footer from '../components/Footer/Footer';


class PortfolioPage extends Component 
{
    componentDidMount()
    {
        window.scroll(0,0)
    }

    render() 
    {
        return (
            <Fragment>
                <TopNavigation webTitle="portfolio" />
                <EveryPageTop pageTitle="All Project"/>
                <AllProject/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;