import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

class ListCasas extends Component {
  state = {
    listCasas: []
  };

  getAllCasas = () => {
    axios.get("http://localhost:5000/api/casas").then(responseFromApi => {
      this.setState({
        listCasas: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllCasas();
  }

  render() {
    return (
      <div>
        <div className="divCard">
          {this.state.listCasas.map((casa, index) => {
            return (
              <Card key={casa._id} className="card">
                <Link
                  to={`/casas/${casa._id}`}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <CardImg
                    top
                    width="100%"
                    src={casa.photo}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="precioCard">
                      ${casa.precio} MXN
                    </CardTitle>
                    <CardSubtitle className="directionCard">
                      <img
                        style={{ width: "15px" }}
                        src="https://image.flaticon.com/icons/png/512/58/58960.png"
                        alt="lugar"
                      />
                      &nbsp;&nbsp;&nbsp;{casa.dirCalle} #{casa.dirExterior},{" "}
                      {casa.dirColonia}
                      <br />
                      {casa.dirMunicipio}, {casa.dirCiudad}
                    </CardSubtitle>
                    <CardText className="propCard">
                      <br />
                      <img
                        src="https://image.flaticon.com/icons/png/128/63/63699.png"
                        alt="propietario"
                        style={{ width: "15px" }}
                      />
                      &nbsp;&nbsp;&nbsp;{casa.propNombre} {casa.propApellido}
                      <br />
                      <img
                        src="https://image.flaticon.com/icons/png/128/13/13936.png"
                        alt="telefono"
                        style={{ width: "15px" }}
                      />
                      &nbsp;&nbsp;&nbsp;{casa.propTelefono}{" "}
                      <br />
                      <img
                        src="https://image.flaticon.com/icons/png/128/37/37572.png"
                        alt="email"
                        style={{ width: "15px" }}
                      />{" "}
                      &nbsp;&nbsp;{casa.propCorreo}
                    </CardText>
                  </CardBody>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListCasas;
