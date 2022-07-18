import React,{ Component,Fragment } from 'react';

import '../../asset/css/custom.css'

import recentProjectCard from '../../asset/image/recent-project-card.jpg'
import {Button} from 'react-bootstrap'

import {Link} from '../../../node_modules/react-router-dom'

class RecentProject extends Component 
{

    render() 
    {
        return (
            <Fragment>
                <section className="recentProject-section">
                    <div className="row">
                        <h2>Recent Projects</h2>
                    </div>

                    <div className="row">
                        <div className="grid-recentProject">
                            <div className="col">
                                <img className="recentProject-img" src={recentProjectCard} />
                                <h4 className="card-title">Foll Bazzer</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Button  variant="primary"><Link to="/projectDetails">Details</Link></Button>
                            </div>
                            <div className="col">
                                <img className="recentProject-img" src={recentProjectCard} />
                                <h4 className="card-title">Card Title</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Button className="recent-project-btn" variant="primary">Details</Button>
                            </div>
                            <div className="col">
                                <img className="recentProject-img" src={recentProjectCard} />
                                <h4 className="card-title">Card Title</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Button className="recent-project-btn" variant="primary">Details</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default RecentProject;