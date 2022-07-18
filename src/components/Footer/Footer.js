import React, { Component,Fragment } from 'react';
import '../../asset/css/custom.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { faMobile,faEnvelope} from '@fortawesome/free-solid-svg-icons'

import {Link} from '../../../node_modules/react-router-dom'

class Footer extends Component 
{


    render() 
    {
        return (
            <Fragment>
                <section className="footer-section">
                    <div className="row">
                        <div className="grid-footer">
                            <div className="col">
                                <h3>Follow Me</h3>
                                <p><FontAwesomeIcon icon={faFacebookF} /><a href="#"> Facebook</a></p>
                                <p><FontAwesomeIcon icon={faInstagram} /><a href="#"> Instagram</a></p>
                            </div>
                            <div className="col">
                                <h3>Address</h3>
                                <p>Naogaon,Dhaka,Bangladesh</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> juboraz727@gmail.com</p>
                                <p><FontAwesomeIcon icon={faMobile} /> +8801755006336</p>
                            </div>
                            <div className="col">
                                <h3>Information</h3>
                                <p><Link to="/about">About Me</Link></p>
                                <p><a href="#">My Resume</a></p>
                                <p><a href="#">Contact Me</a></p>
                            </div>
                            <div className="col">
                                <h3>Legal</h3>
                                <p><Link to="/refundPolicy">Refund Policy</Link></p>
                                <p><a href="#">Terms and Condition</a></p>
                                <p><a href="#">Privacy Policy</a></p>
                            </div> 
                        </div>
                    </div>
                </section>

                <section className="footer-end-section">
                    <a href="#">abutorab.me &copy; 2020-2021</a>
                </section>
            </Fragment>
        );
    }
}

export default Footer;