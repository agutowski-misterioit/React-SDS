import { useAuth } from "../providers/auth";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export const MenuComponent = () => {
  const auth = useAuth();

  const logout = () => auth.logout();
  
  return(
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container >
        <Navbar.Brand href="/">Super Duper System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            <NavDropdown title={ auth.getUsername() } id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about">O programie</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>Wyloguj się</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}