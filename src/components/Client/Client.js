import React, { Component,Fragment } from 'react';
import '../../asset/css/custom.css'
import jubo from '../../asset/image/client.jpg'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

class Client extends Component 
{

    render() 
    {

        var settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };


        return (
            <Fragment>
                <section className="client-section">
                    <div className="row">
                        <h2>Client Says</h2>
                    </div>

                    <div className="row">
                      <Slider className="card-client" {...settings}>
                          <div >
                              <div className="client-image-div">
                                  <img className="client-img" src={jubo} />
                              </div>
                              <h3>Web Development</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                          </div>

                          <div >
                              <div className="client-image-div">
                                  <img className="client-img" src={jubo} />
                              </div>
                              <h3>Mobile Development</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                          </div>

                          <div >
                              <div className="client-image-div">
                                  <img className="client-img" src={jubo} />
                              </div>
                              <h3>Graphics Design</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                          </div>
                        </Slider>
                    </div>                    
                </section>
            </Fragment>
        );
    }
}

export default Client;