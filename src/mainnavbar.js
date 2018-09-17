import React, { Component } from "react";
import {
  Input,
  Button,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      LoginModal: false,
      RegisterModal: false
    };
    this.onClick = this.onClick.bind(this);
  }
  toggleLogin = () => {
    this.setState({
      LoginModal: !this.state.LoginModal
    });
  };

  toggleRegister = () => {
    this.setState({
      RegisterModal: !this.state.RegisterModal
    });
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar
            color="elegant-color-dark
"
            dark
            expand="md"
            scrolling
          >
            <NavbarBrand href="/">
              <strong>Navbar</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem>
                  <form className="form-inline md-form mt-0">
                    <input
                      className="form-control mr-sm-2 mb-0 text-white"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem active>
                  <NavLink to="#">becaume Pro</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">becaume a seller</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.toggleLogin} to="#">
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button
                    onClick={this.toggleRegister}
                    size="sm"
                    color="dark-green"
                  >
                    Join
                  </Button>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
        </Router>

        {/* this is our login modal */}

        <Container>
          <Modal
            isOpen={this.state.LoginModal}
            toggle={this.toggleLogin}
            centered
          >
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggleLogin(1)}
            >
              Sign in
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <Input
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button onClick={() => this.toggleLogin(1)}>Login</Button>
            </ModalFooter>
          </Modal>
        </Container>

        <Container>
          <Modal
            isOpen={this.state.RegisterModal}
            toggle={this.toggleRegister}
            centered
          >
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggleRegister(1)}
            >
              Join Us
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <div className="grey-text">
                  <Input
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <Input
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <Input
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <Input
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button
                onClick={() => this.toggleLogin(1)}
                color="cyan"
                type="submit"
              >
                Register
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
        {/* this is our join modal */}
      </div>
    );
  }
}
export default MainNavBar;
