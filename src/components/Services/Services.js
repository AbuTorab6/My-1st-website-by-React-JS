import React, { Component,Fragment } from 'react';



import {} from 'react-bootstrap'

import '../../asset/css/custom.css'



import web from '../../asset/image/web.svg'
import mobile from '../../asset/image/mobile.svg'
import graphics from '../../asset/image/graphics.svg'




class Services extends Component 
{
    render() 
    {
        return (
            <Fragment>
                <section className="services-section">
                    <div className="row">
                        <h2>MY SERVICES</h2>
                    </div>

                    <div className="row">
                        <div className="grid-services">
                            <div className="col ">
                                <div className="services-img-div">
                                    <img className="services-img"  src={web} alt="image" />
                                </div>
                                <h3>Web development</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                            </div>
                            <div className="col">
                                <div className="services-img-div">
                                    <img className="services-img"  src={mobile} alt="image" />
                                </div>
                                <h3>Mobile development</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  </p>
                            </div>
                            <div className="col">
                            <   div className="services-img-div">
                                    <img className="services-img"  src={graphics} alt="image" />
                                </div>
                                <h3>Graphics Design</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Services;