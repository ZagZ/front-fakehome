import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { Link } from "react-router-dom";
import AddCasa from "../Casas/AddCasa";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this)
    this.state = {
      isOpen: false,
      modal: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggle2() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Navbar className="navBar" dark expand="md">
          <NavbarBrand>
            <Link to="/" className="whiteLetter">
              FakeHome
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button className='button'>
                  <Link to="/casas" className="whiteLetter navButton">
                    {" "}
                    Ver Propiedades{" "}
                  </Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button className='button whiteLetter navButton' onClick={this.toggle2} >
                    Agregar Propiedad                  
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Modal isOpen={this.state.modal} toggle={this.toggle2} className={this.props.className}>
          <ModalHeader toggle={this.toggle2}>Agregar Propiedad</ModalHeader>
          <ModalBody>
            <AddCasa/>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle2}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
