import React, { Component,Fragment } from 'react';

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import '../../asset/css/custom.css'






class Technology extends Component 
{

    constructor()
    {
        super();

        this.state = {
            chartData : [
                {
                    name : "HTML",
                    skill : 99
                },
                {
                    name : "CSS",
                    skill : 95
                },
                {
                    name : "JavaScript",
                    skill : 85
                },
                {
                    name : "React.js",
                    skill : 80
                },
                {
                    name : "JQuery",
                    skill : 90
                },
                {
                    name : "Bootstrap",
                    skill : 70
                },
                {
                    name : "C#",
                    skill : 50
                },
                {
                    name : "Dot Net",
                    skill : 70
                }
            ]
        }
    }




    render() 
    {
        var blue = "#4974FE"
        return (
            <Fragment>
                <section className="technology-section" >
                    <div className="row">
                        <h2>Technology Used</h2>
                    </div>

                    <div className="row">
                        <div className="grid-technology">
                            <div className="col" >
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart width={150} height={40} data={this.state.chartData}>
                                        < Tooltip />
                                        <XAxis dataKey="name"/>
                                        <Bar dataKey="skill" fill={blue} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="col" >
                                <p>
                                    To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.
                                    <br/><br/>
                                    I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                                    <br/><br/>
                                    Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Technology;