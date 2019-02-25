import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class AddCasa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dirEstado: "",
      dirCiudad: "",
      dirMunicipio: "",
      dirColonia: "",
      dirCalle: "",
      dirExterior: "",
      dirInterior: "",
      photo: "",
      propNombre: "",
      propApellido: "",
      propTelefono: "",
      propCorreo: "",
      precio: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
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

    if (
      !dirEstado ||
      !dirCiudad ||
      !dirMunicipio ||
      !dirColonia ||
      !dirCalle ||
      !dirExterior ||
      !propNombre ||
      !propCorreo ||
      !propTelefono ||
      !precio
    ) {
      return alert("Debes llenar todos los campos con *");
    }

    axios
      .post("http://localhost:5000/api/casas", {
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
        this.props.getData();
        this.setState({
          dirEstado: "",
          dirCiudad: "",
          dirMunicipio: "",
          dirColonia: "",
          dirCalle: "",
          dirExterior: "",
          dirInterior: "",
          photo: "",
          propNombre: "",
          propApellido: "",
          propTelefono: "",
          propCorreo: "",
          precio: ""
        });
      })
      .catch(err => console.log(err));

    this.reloadPage();
  };

  reloadPage = () => {
    window.location.reload();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="add-casa">
        <Form>
          <FormGroup>
            <h2> Datos de la propiedad </h2>
            <Label htmlFor=""> * Estado: </Label>
            <Input
              type="text"
              name="dirEstado"
              value={this.state.dirEstado}
              onChange={e => this.handleChange(e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Ciudad: </Label>
            <Input
              type="text"
              name="dirCiudad"
              value={this.state.dirCiudad}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Municipio </Label>
            <Input
              type="text"
              name="dirMunicipio"
              value={this.state.dirMunicipio}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Colonia: </Label>
            <Input
              type="text"
              name="dirColonia"
              value={this.state.dirColonia}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Calle: </Label>
            <Input
              type="text"
              name="dirCalle"
              value={this.state.dirCalle}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Exterior: </Label>
            <Input
              type="text"
              name="dirExterior"
              value={this.state.dirExterior}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor=""> Interior: </Label>
            <Input
              type="text"
              name="dirInterior"
              value={this.state.dirInterior}
              onChange={e => this.handleChange(e)}
            />
            <FormText color="muted">
              Se generara una foto automatica de portada del inmueble, sin
              embargo, puedes modificarla al editar en detalle la Propiedad
            </FormText>
          </FormGroup>
          <FormGroup>
            <h2>Datos del propietario</h2>
            <Label htmlFor="">* Nombre: </Label>
            <Input
              type="text"
              name="propNombre"
              value={this.state.propNombre}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Apellidos: </Label>
            <Input
              type="text"
              name="propApellido"
              value={this.state.propApellido}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Correo: </Label>
            <Input
              type="text"
              name="propCorreo"
              value={this.state.propCorreo}
              onChange={e => this.handleChange(e)}
            />
            <FormText color="muted">
              La dirección de correo debe ser del tipo algo@correo.com
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Teléfono: </Label>
            <Input
              type="text"
              name="propTelefono"
              value={this.state.propTelefono}
              onChange={e => this.handleChange(e)}
            />
            <FormText color="muted">Ingresa únicamente números</FormText>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="">* Precio: </Label>
            <Input
              type="text"
              name="precio"
              value={this.state.precio}
              onChange={e => this.handleChange(e)}
            />
            <FormText color="muted">Separa el número con comas</FormText>
          </FormGroup>
          <Button
            onClick={this.handleFormSubmit}
            type="submit"
            value="Submit"
            color="success"
          >
            Guardar Nueva Propiedad
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default AddCasa;
