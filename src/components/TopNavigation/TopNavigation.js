import React, { Component,Fragment } from 'react';

import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'

import '../../asset/css/custom.css'


import whiteLogo from '../../asset/image/navLogo.svg'
import blueLogo from '../../asset/image/navLogoScroll.svg'


import {NavLink} from '../../../node_modules/react-router-dom'



class TopNavigation extends Component 
{

    constructor()
    {
        super();

        this.state={
            topNavigationBrand : "topnavigation-brand",
            navLogo : [whiteLogo],
            topNavigationBackground : "topnavigation-background ",
            topNavigationList : "top-navigation-list",
        }
    }

    scroll = ()=>
    {
        if(window.scrollY>100)
        {
            this.setState({topNavigationBrand:'topnavigation-brand-scroll' , navLogo:[blueLogo] , topNavigationBackground:"topnavigation-background-scroll" , topNavigationList:"top-navigation-list-scroll"})
        }
        else if(window.scrollY<100)
        {
            this.setState({topNavigationBrand:'topnavigation-brand' , navLogo:[whiteLogo] , topNavigationBackground:"topnavigation-background" , topNavigationList:"top-navigation-list"})
        }
    }


    componentDidMount()
    {
        window.addEventListener('scroll',this.scroll)
    }


    render() 
    {
        return (
            <Fragment>
                <title>{this.props.webTitle}</title>
                <Navbar variant="dark" fixed="top" className={this.state.topNavigationBackground} collapseOnSelect expand="lg" bg="dark" >
                    <Container>
                        <Navbar.Brand  href="#home"><NavLink className={this.state.topNavigationBrand} to="/"> <img src={this.state.navLogo}/>  ABU TORAB</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            
                            </Nav>
                            <Nav>
                            <NavLink exact activeStyle={{color:"#4974FE"}} className={this.state.topNavigationList} to="/" >HOME</NavLink>
                            <NavLink exact activeStyle={{color:"#4974FE"}} className={this.state.topNavigationList} to="/services" >SERVICES</NavLink>
                            <NavLink exact activeStyle={{color:"#4974FE"}} className={this.state.topNavigationList} to="/course" >COURSES</NavLink>
                            <NavLink exact activeStyle={{color:"#4974FE"}} className={this.state.topNavigationList} to="/portfolio" >PORTFOLIO</NavLink>
                            <NavLink exact activeStyle={{color:"#4974FE"}} className={this.state.topNavigationList} to="/contact" >CONTACT</NavLink>
                            <NavLink exact activeStyle={{color:"#4974FE"}} className={this.state.topNavigationList} to="/about" >ABOUT</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;