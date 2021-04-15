import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Oum Hadjer World</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Panier
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> S'identifier
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light" className="py-1 " sticky="top">
        <Container>
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <i className="fas fa-home"></i> Accueil
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sheets">
              <Nav.Link>Draps</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/babies">
              <Nav.Link>Bébés</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/fullset">
              <Nav.Link>Ensemble</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
