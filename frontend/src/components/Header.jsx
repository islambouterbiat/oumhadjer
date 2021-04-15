import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Oum Hadjer World</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Panier
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> S'identifier
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light" className="py-1 " sticky="top">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="/">
              <i className="fas fa-home"></i> Accueil
            </Nav.Link>
            <Nav.Link href="/sheets">Draps</Nav.Link>
            <Nav.Link href="/babies">Bébés</Nav.Link>
            <Nav.Link href="/fullset">Ensemble</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
