import React, { Component,Fragment } from 'react';

import {Button} from 'react-bootstrap'

import '../../asset/css/custom.css'



class TopBanner extends Component 
{
    render() 
    {
        return (
            <Fragment>
                <section className="hero-section">
                    <div className="row">
                        <div className="hero-text">
                            <h1>SOFTWARE ENGINEER</h1>
                            <h4>FRONT END DEVELOPER</h4>
                            <Button variant="primary">More Info</Button>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default TopBanner;