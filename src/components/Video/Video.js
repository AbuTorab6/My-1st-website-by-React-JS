import React, { Component,Fragment } from 'react';

import '../../asset/css/custom.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import {Modal,Button} from 'react-bootstrap'

import "../../../node_modules/video-react/dist/video-react.css";
import { Player,BigPlayButton,LoadingSpinner } from 'video-react';

class Video extends Component 
{


    constructor()
    {
        super();
        this.state = {
            data : false
        }
    }

    showModal = ()=>
    {
        this.setState({data:true})
    }

    hideModal = ()=>
    {
        this.setState({data:false})
    }


    render() 
    {
        return (
            <Fragment>
                <section className="video-section">
                    <div className="row">
                        <div className="col card-video">
                            <h3>How I Do</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            <p><FontAwesomeIcon onClick={this.showModal} className="video-icon" icon={faPlayCircle} /></p>
                        </div>
                    </div>
                </section>


                <Modal size="lg" show={this.state.data} onHide={this.hideModal}>
                    <Modal.Body >
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                            <LoadingSpinner />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="modal-btn" variant="primary" onClick={this.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>


            </Fragment>
        );
    }
}

export default Video;