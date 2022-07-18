import React, { Component,Fragment } from 'react';

import '../../asset/css/custom.css'

class EveryPageTop extends Component 
{
    render() 
    {
        return (
            <Fragment>
                <section className="every-page-top-section">
                    <div className="row">
                        <h2>{this.props.pageTitle}</h2>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default EveryPageTop;