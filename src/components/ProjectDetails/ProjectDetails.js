import React, { Component,Fragment } from 'react';

import '../../asset/css/custom.css'

import recentProjectCard from '../../asset/image/recent-project-card.jpg'

import {Button} from 'react-bootstrap'

class ProjectDetails extends Component 
{

    render() 
    {
        return (
            <Fragment>
                <section className="project-details-section">
                    <div className="row">
                        <div className="grid-project-details">
                            <div className="col">
                                <img className="project-details-img" src={recentProjectCard} />
                            </div>
                            <div className="col">
                                <h2>Foll Bazzer</h2>
                                <p>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                                <ul>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                </ul>
                                <Button className="project-details-btn" variant="primary">Live Preview</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ProjectDetails;