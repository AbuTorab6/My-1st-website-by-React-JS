import React, { Component,Fragment } from 'react';
import '../../asset/css/custom.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { faMobile,faEnvelope} from '@fortawesome/free-solid-svg-icons'

class ContactForm extends Component {
    render() 
    {
        return (
            <Fragment>
                <section className="contact-form-section">
                    <div className="row">
                        <div className="grid-contact-form">
                            <div className="col">
                                <h3>Quick Connect</h3>
                                <form>
                                    <div className="contact-name contact-common">
                                        <label for="name">Name</label> <br/>
                                        <input type="text" id="name" name="name" />
                                    </div>
                                    <div className="contact-email contact-common">
                                        <label for="email">Email Address</label> <br/>
                                        <input type="email" id="email" name="email" />
                                    </div>
                                    <div className="contact-msg contact-common">
                                        <label for="msg">Your Message</label> <br/>
                                        <textarea id="msg" name="msg" />
                                    </div>
                                    <div className="contact-btn">
                                        <input type="submit" value="send" />
                                    </div>
                                </form>
                            </div>
                            <div className="col">
                                <h3>Address</h3>
                                <p>Naogaon,Dhaka,Bangladesh</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> juboraz727@gmail.com</p>
                                <p><FontAwesomeIcon icon={faMobile} /> +8801755006336</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ContactForm;