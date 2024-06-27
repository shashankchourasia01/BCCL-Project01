import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">User Registration</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About-Us">About-Us</Nav.Link>
                        <Nav.Link href="#Features">Features</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header