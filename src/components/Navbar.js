import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            headerOpen: false,
            user: {}
        }
        this.toggleHeader = this.toggleHeader.bind(this)
    }

    toggleHeader() {
        this.setState({headerOpen: !this.state.headerOpen})
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps);
        if (prevProps.headerOpen !== this.headerOpen) {
            this.setState({headerOpen: true});

        }
    }

    render() {
        return (
            <Navbar bg="dark" variant='dark' fixed='top' expand="lg" id="mainNav">
                <div className="container px-4">
                    <Navbar.Toggle aria-controls="basic-navbar-nav">Menu<i
                        className="fa fa-bars ml-1"/></Navbar.Toggle>
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="text-uppercase ml-auto py-4 py-lg-0">
                            <Nav.Link href="/">Home</Nav.Link>
                            {/*<Nav.Link href="/login">Log In</Nav.Link>*/}
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="/about#team">Team</Nav.Link>
                            <NavDropdown alignRight={true} title="Services" id="navbarDropdownBlog">
                                <NavDropdown.Item href="/residentialmanagement">Residential
                                    Management</NavDropdown.Item>
                                <NavDropdown.Item href="/propertymanagement">Property Management</NavDropdown.Item>
                                <NavDropdown.Item href="/commercialmanagement">Commercial Management</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}


export default Header
