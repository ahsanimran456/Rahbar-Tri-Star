import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
    return (
        <Navbar bg="light" expand="md">
            <Container fluid>
                <Navbar.Brand href="#">Rahbar Tri-$tar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"><Link className='nav-items' to="/">Home</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link className='nav-items' to="/">About</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link className='nav-items' to="/">Service</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link className='nav-items' to="/">Service</Link></Nav.Link>
                        <Nav.Link href="#action2"><Link className='nav-items' to="/">Project</Link></Nav.Link>
                        <div className='d-flex'>
                            <Nav.Link href="#" className='nav-items-icons' > <FontAwesomeIcon icon={faFacebookF} className='custom-icon-nav' /></Nav.Link>
                            <Nav.Link href="#" className='nav-items-icons' > <FontAwesomeIcon icon={faTwitter} className='custom-icon-nav' /></Nav.Link>
                            <Nav.Link href="#" className='nav-items-icons' > <FontAwesomeIcon icon={faLinkedinIn} className='custom-icon-nav' /></Nav.Link>
                            <Nav.Link href="#" className='nav-items-icons' > <FontAwesomeIcon icon={faInstagram} className='custom-icon-nav' /></Nav.Link>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
