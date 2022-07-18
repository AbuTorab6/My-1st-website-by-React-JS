import React, { Component,Fragment } from 'react';

import '../../asset/css/custom.css'


import '../../../node_modules/video-react/dist/video-react.css'
import { Player,BigPlayButton,LoadingSpinner } from 'video-react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import {Button} from 'react-bootstrap'

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <section className="course-details-section">
                    <div  className="row">
                        <div className="grid-course-details">
                            <div className="col">
                                <h2>Full Dynamic Website With Admin Panel</h2>
                                <h5>Total Lecture=30</h5>
                                <h5>Total Student=30</h5>
                            </div>
                            <div className="col">
                                <p>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="course-details-end-section">
                    <div className="row">
                        <div className="grid-course-details-end">
                            <div className="col">
                                <h2>Skill you get</h2>
                                <p><FontAwesomeIcon icon={faCheckCircle} className="course-details-end-icon"/> Unlimited Dynamic Product Category</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} className="course-details-end-icon"/> Admin can add,edit,delete product dinamically</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} className="course-details-end-icon"/> Dinamically shopping point facilities</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} className="course-details-end-icon"/> Admin can give special offer for special user</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} className="course-details-end-icon"/> App force update system from server</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} className="course-details-end-icon"/> User can make wishlist</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} className="course-details-end-icon"/> Unlimited Dynamic Product Category</p>
                                <Button  className="course-details-end-btn" variant="primary">Buy Now</Button>
                            </div>
                            <div className="col">
                                <div >
                                    <Player className="course-details-end-video" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                        <BigPlayButton position="center" />
                                    </Player>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default CourseDetails;