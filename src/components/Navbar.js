import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import home from "../assets/images/home.png"
import "./Navbar.css";

const Navtop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="myNav" variant="dark">
            <Container>
                <Navbar.Brand >
                    <Link to={`/`} ><img className="logo__link" src={home} alt="Home Logo" /></Link>
                </Navbar.Brand>


                <Nav className="navbar__brand">
                    <Link className="navbar__brand" to={`/movies`}>
                        The Films
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navtop;

