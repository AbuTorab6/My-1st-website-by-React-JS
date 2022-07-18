import React, { Component,Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import '../../asset/css/custom.css'


class Summary extends Component 
{


    render() 
    {
        return (
            <Fragment>
                <section className="summary-section">
                    <div className="row">
                        <h2>Summary</h2>
                    </div>
                     <div className="row">
                        <div className="grid-summary">
                            <div className="col">
                                <div className="grid-increas-bar">
                                    <div className="col">
                                        <h1>
                                            <CountUp start={0} end={100} duration={2}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start}>
                                                         <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h1>
                                        <h4>TOTAL PROJECT</h4>
                                    </div>
                                    <div className="col">
                                        <h1>
                                            <CountUp start={0} end={100} duration={2}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start}>
                                                         <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h1>
                                        <h4>TOTAL CLIENTS</h4>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col">
                                <div className="card-body">
                                    <h3 className="card-title">How i Work</h3>
                                    <p> <FontAwesomeIcon className="font-awesome-icon" icon={faCheckCircle} /> Requirment Gathering</p>
                                    <p> <FontAwesomeIcon className="font-awesome-icon" icon={faCheckCircle} /> System Analysis</p>
                                    <p> <FontAwesomeIcon className="font-awesome-icon" icon={faCheckCircle} /> Coding Testing</p>
                                    <p> <FontAwesomeIcon className="font-awesome-icon" icon={faCheckCircle} /> Implementation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Summary;