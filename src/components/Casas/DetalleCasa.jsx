import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditCasa from "./EditCasa";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class DetalleCasa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getSingleCasa();
  }

  getSingleCasa = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/casas/${params.id}`)
      .then(responseFromApi => {
        const unaCasa = responseFromApi.data;
        this.setState(unaCasa);
      })
      .catch(err => console.log(err));
  };

  renderEditForm = () => {
    if (!this.state.dirEstado) {
      this.getSingleCasa();
    } else {
      return (
        <EditCasa unaCasa={this.state} getSingleCasa={this.getSingleCasa} />
      );
    }
  };

  deleteCasa = (id) => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:5000/api/casas/${params.id}`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.props.history.push("/casas");
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="divMain">
        <div className="leftCard">
          <Link
            className="backList"
            style={{ textDecoration: "none" }}
            to={"/casas"}
          >
            &larr; Regresar al Listado de Inmuebles{" "}
          </Link>
          <Card key={this.state._id} className="card">
            <CardImg
              top
              width="100%"
              src={this.state.photo}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="precioCard">
                ${this.state.precio} MXN
              </CardTitle>
              <CardSubtitle className="directionCard">
                <img
                  style={{ width: "15px" }}
                  src="https://image.flaticon.com/icons/png/512/58/58960.png"
                  alt="lugar"
                />
                &nbsp;&nbsp;&nbsp;{this.state.dirCalle} #
                {this.state.dirExterior}, {this.state.dirColonia}
                <br />
                {this.state.dirMunicipio}, {this.state.dirCiudad}
              </CardSubtitle>
              <CardText className="propCard">
                <br />
                <img
                  src="https://image.flaticon.com/icons/png/128/63/63699.png"
                  alt="propietario"
                  style={{ width: "15px" }}
                />
                &nbsp;&nbsp;&nbsp;{this.state.propNombre}{" "}
                {this.state.propApellido}
                <br />
                <img
                  src="https://image.flaticon.com/icons/png/128/13/13936.png"
                  alt="telefono"
                  style={{ width: "15px" }}
                />
                &nbsp;&nbsp;&nbsp;{this.state.propTelefono} <br />
                <img
                  src="https://image.flaticon.com/icons/png/128/37/37572.png"
                  alt="email"
                  style={{ width: "15px" }}
                />{" "}
                &nbsp;&nbsp;&nbsp;{this.state.propCorreo}
                <br />
                <Button className="trashButton" color="danger" onClick={this.toggle}>
                  {" "}
                  <img
                    className="trashSteps"
                    src="https://www.iconsdb.com/icons/preview/white/trash-2-xxl.png"
                    alt="trash"
                  />{" "}
                </Button>
              </CardText>
            </CardBody>
          </Card>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Eliminar Propiedad</ModalHeader>
            <ModalBody>
              <h2> Estas seguro de querer eliminar esta propiedad ? </h2>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={()=> this.deleteCasa(this.state.id)}>
                Eliminar
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <div className="rigthForm"> {this.renderEditForm()} </div>
      </div>
    );
  }
}

export default DetalleCasa;
