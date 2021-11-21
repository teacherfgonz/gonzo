import React from "react";
import { Outlet } from "react-router";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
} from "reactstrap";

function AppLayout() {
  return (
    <>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/" className="px-3">
          Gonzo
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
      </Navbar>
      <Container fluid>
        <Row>
          <Col
            tag="nav"
            id="sidebarMenu"
            md={3}
            lg={2}
            className="d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <Nav className="flex-column">
                <NavItem>
                  <NavLink href="#dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#dashboard">Orders</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#dashboard">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#dashboard">Customers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#dashboard">Reports</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#dashboard">Integrations</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col md={9} lg={10} className="p-md-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AppLayout;
