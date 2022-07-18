import React, { Component,Fragment } from 'react';

import '../../asset/css/custom.css'
import courseImg from '../../asset/image/course.jpg'

import {Link} from '../../../node_modules/react-router-dom';

class AllCourses extends Component 
{
    render() 
    {
        return (
            <Fragment>
                <section class="course-section">
                    <div className="row">
                        <div className="grid-course">
                            <div className="col">
                                <div className="course-image-div">
                                    <img className="course-img" src={courseImg} />
                                </div>
                                <div className="course-description-div">
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                    <Link to="/courseDetails" >Details</Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="course-image-div">
                                    <img className="course-img" src={courseImg} />
                                </div>
                                <div className="course-description-div">
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                    <a href="#" >Details</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="course-image-div">
                                    <img className="course-img" src={courseImg} />
                                </div>
                                <div className="course-description-div">
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                    <a href="#" >Details</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="course-image-div">
                                    <img className="course-img" src={courseImg} />
                                </div>
                                <div className="course-description-div">
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                    <a href="#" >Details</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="course-image-div">
                                    <img className="course-img" src={courseImg} />
                                </div>
                                <div className="course-description-div">
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                    <a href="#" >Details</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="course-image-div">
                                    <img className="course-img" src={courseImg} />
                                </div>
                                <div className="course-description-div">
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                    <a href="#" >Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default AllCourses;