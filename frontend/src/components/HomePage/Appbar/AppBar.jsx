import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import logo from "../../../images/logo.png";
import AppBarAvatar from './AppBarAvatar';
import AppBarCart from './AppBarCart';

const linkStyle = {
    color: "#464646",
    fontFamily: 'Poppins',
    fontWeight: 400
}

const buttonStyle = {
    color: "#fff",
    backgroundColor: "#93CF41",
    fontFamily: 'Poppins',
    fontWeight: 400
}

function AppBar(props) {
    return (
        <div>
            <Navbar className="shadow-sm p-3  bg-white rounded" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/"><img src={logo} alt="farm-logo" className="logo-image" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" style={linkStyle} className="mx-3">HOME</Nav.Link>
                        <Nav.Link href="#about" style={linkStyle} className="mx-3">ABOUT</Nav.Link>
                        <Nav.Link href="/gallery" style={linkStyle} className="mx-3">GALLERY</Nav.Link>
                        <Nav.Link href="#pricing" style={linkStyle} className="mx-3">CONTACT</Nav.Link>
                    </Nav>
                    <Nav>
                        {(props.getUserRole === "User" || props.getUserRole === "Admin") ? (
                            <Form>
                                <Nav className="mx-auto">
                                    <Nav.Link style={linkStyle} className="mx-2">
                                        <AppBarCart />
                                    </Nav.Link>
                                    <Nav.Link style={linkStyle} className="mx-2"><AppBarAvatar getUser={props.getUserName}></AppBarAvatar></Nav.Link>
                                </Nav>


                            </Form>
                        ) : (
                            <Form>
                                <Button className="mx-3" variant="contained" style={buttonStyle} href="/login">SIGN IN</Button>
                                <Button className="mx-3" variant="contained" style={buttonStyle} href="/register">SIGN UP</Button>
                            </Form>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default AppBar;