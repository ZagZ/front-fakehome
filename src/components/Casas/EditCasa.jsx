import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import classnames from "classnames";

class EditCasa extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      dirEstado: this.props.unaCasa.dirEstado,
      dirCiudad: this.props.unaCasa.dirCiudad,
      dirMunicipio: this.props.unaCasa.dirMunicipio,
      dirColonia: this.props.unaCasa.dirColonia,
      dirCalle: this.props.unaCasa.dirCalle,
      dirExterior: this.props.unaCasa.dirExterior,
      dirInterior: this.props.unaCasa.dirInterior,
      photo: this.props.unaCasa.photo,
      propNombre: this.props.unaCasa.propNombre,
      propApellido: this.props.unaCasa.propApellido,
      propTelefono: this.props.unaCasa.propTelefono,
      propCorreo: this.props.unaCasa.propCorreo,
      precio: this.props.unaCasa.precio,
      activeTab: "1",
      modal: false
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      this.renderSteps();
    }
  }

  toggle2() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleFormSubmit = event => {
    const {
      dirEstado,
      dirCiudad,
      dirMunicipio,
      dirColonia,
      dirCalle,
      dirExterior,
      dirInterior,
      photo,
      propNombre,
      propApellido,
      propCorreo,
      propTelefono,
      precio
    } = this.state;

    event.preventDefault();

    axios
      .put(`http://localhost:5000/api/casas/${this.props.unaCasa._id} `, {
        dirEstado,
        dirCiudad,
        dirMunicipio,
        dirColonia,
        dirCalle,
        dirExterior,
        dirInterior,
        photo,
        propNombre,
        propApellido,
        propCorreo,
        propTelefono,
        precio
      })
      .then(() => {
        this.props.getSingleCasa();
      })
      .catch(err => console.log(err));
    this.toggle2();
  };

  handleChangeEstado = event => {
    this.setState({
      dirEstado: event.target.value
    });
  };

  handleChangeCiudad = event => {
    this.setState({
      dirCiudad: event.target.value
    });
  };

  handleChangeMunicipio = event => {
    this.setState({
      dirMunicipio: event.target.value
    });
  };

  handleChangeColonia = event => {
    this.setState({
      dirColonia: event.target.value
    });
  };

  handleChangeCalle = event => {
    this.setState({
      dirCalle: event.target.value
    });
  };

  handleChangeExterior = event => {
    this.setState({
      dirExterior: event.target.value
    });
  };

  handleChangeInterior = event => {
    this.setState({
      dirInterior: event.target.value
    });
  };

  handleChangePhoto = event => {
    this.setState({
      photo: event.target.value
    });
  };

  handleChangeNombre = event => {
    this.setState({
      propNombre: event.target.value
    });
  };

  handleChangeApellido = event => {
    this.setState({
      propApellido: event.target.value
    });
  };

  handleChangeCorreo = event => {
    this.setState({
      propCorreo: event.target.value
    });
  };

  handleChangeTelefono = event => {
    this.setState({
      propTelefono: event.target.value
    });
  };

  handleChangePrecio = event => {
    this.setState({
      precio: event.target.value
    });
  };

  renderSteps = () => {
    if (this.state.activeTab === "1") {
      return (
        <div>
          <h2> 1) Actualiza datos del inmueble </h2>
          <img
            className="imgSteps"
            src="https://i.ibb.co/fSmRxjs/recovery-1.png"
            alt="recovery-1"
          />
        </div>
      );
    } else if (this.state.activeTab === "2") {
      return (
        <div>
          <h2> 2) Actualiza datos del propietario </h2>
          <img
            className="imgSteps"
            src="https://i.ibb.co/DYNTRDr/recovery-1-2.png"
            alt="recovery-1-2"
          />
        </div>
      );
    } else if (this.state.activeTab === "3") {
      return (
        <div>
          <h2>3) Actualiza el precio y confirma Actualizar Inmueble</h2>
          <img
            className="imgSteps"
            src="https://i.ibb.co/k5DQs0N/recovery-1-2-3.png"
            alt="recovery-1-2-3"
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="instructionsEdit"> {this.renderSteps()} </div>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
            >
              Editar Dirección del Inmueble
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
            >
              Editar Datos del Propietario
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
            >
              Editar Precio
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className='colSteps'>
                <Form className="formSteps">
                  <FormGroup>
                    <Label htmlFor=""> Estado: </Label>
                    <Input
                      type="text"
                      name="dirEstado"
                      value={this.state.dirEstado}
                      onChange={e => this.handleChangeEstado(e)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Ciudad: </Label>
                    <Input
                      type="text"
                      name="dirCiudad"
                      value={this.state.dirCiudad}
                      onChange={e => this.handleChangeCiudad(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Municipio </Label>
                    <Input
                      type="text"
                      name="dirMunicipio"
                      value={this.state.dirMunicipio}
                      onChange={e => this.handleChangeMunicipio(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Colonia: </Label>
                    <Input
                      type="text"
                      name="dirColonia"
                      value={this.state.dirColonia}
                      onChange={e => this.handleChangeColonia(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Calle: </Label>
                    <Input
                      type="text"
                      name="dirCalle"
                      value={this.state.dirCalle}
                      onChange={e => this.handleChangeCalle(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> No. Exterior: </Label>
                    <Input
                      type="text"
                      name="dirExterior"
                      value={this.state.dirExterior}
                      onChange={e => this.handleChangeExterior(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> No. Interior: </Label>
                    <Input
                      type="text"
                      name="dirInterior"
                      value={this.state.dirInterior}
                      onChange={e => this.handleChangeInterior(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Foto Principal: </Label>
                    <Input
                      type="text"
                      name="photo"
                      value={this.state.photo}
                      onChange={e => this.handleChangePhoto(e)}
                    />
                    <FormText color="muted">
                      Aqui puedes pegar el enlace a la foto que quieras poner de
                      principal del inmueble
                    </FormText>
                  </FormGroup>
                </Form>
                <Button
                  color="warning"
                  className="buttonSteps"
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  {" "}
                  Siguiente Paso &rarr;
                </Button>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12" className='colSteps'>
                <Form className="formSteps">
                  <FormGroup>
                    <Label htmlFor=""> Nombre: </Label>
                    <Input
                      type="text"
                      name="propNombre"
                      value={this.state.propNombre}
                      onChange={e => this.handleChangeNombre(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Apellidos: </Label>
                    <Input
                      type="text"
                      name="propApellido"
                      value={this.state.propApellido}
                      onChange={e => this.handleChangeApellido(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Correo: </Label>
                    <Input
                      type="text"
                      name="propCorreo"
                      value={this.state.propCorreo}
                      onChange={e => this.handleChangeCorreo(e)}
                    />
                    <FormText color="muted">
                      La dirección de correo debe ser del tipo algo@correo.com
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor=""> Teléfono: </Label>
                    <Input
                      type="text"
                      name="propTelefono"
                      value={this.state.propTelefono}
                      onChange={e => this.handleChangeTelefono(e)}
                    />
                    <FormText color="muted">
                      Ingresa únicamente números
                    </FormText>
                  </FormGroup>
                </Form>
                <Button
                  color="warning"
                  className="buttonSteps"
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  &larr;Paso Anterior
                </Button>
                <Button
                  color="warning"
                  className="buttonSteps"
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Siguiente Paso &rarr;
                </Button>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col sm="12" className='colSteps'>
                <Form className="formSteps">
                  <FormGroup>
                    <Label htmlFor=""> Precio: </Label>
                    <Input
                      type="text"
                      name="precio"
                      value={this.state.precio}
                      onChange={e => this.handleChangePrecio(e)}
                    />
                    <FormText color="muted">
                      Separa el número con comas
                    </FormText>
                  </FormGroup>
                  <Button
                    color="warning"
                    className="buttonSteps"
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    &larr;Paso Anterior
                  </Button>
                  <Button
                    onClick={this.handleFormSubmit}
                    type="submit"
                    value="Submit"
                    color="success"
                    className="buttonSteps"
                  >
                    Actualizar Inmueble
                  </Button>{" "}
                </Form>
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle2}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle2}>Listo !</ModalHeader>
          <ModalBody>
            <img
              className="gifSteps"
              src="https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif"
              alt="done"
            />
            <h4 className='modalh4'>
              {" "}
              Haz actualizado correctamente el Inmueble, ahora puedes volver al
              Listado de Inmuebles{" "}
            </h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle2}>
              OK !{" "}
              <span role="img" aria-label="manita">
                👍
              </span>
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditCasa;
