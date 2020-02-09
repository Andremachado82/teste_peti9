import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

import api from "../../services/api";

import { Container } from "./styles";

export default class Listar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosPet: [0]
    };
  }

  componentDidMount() {
    api.get(`http://localhost:3333/pets`).then(res => {
      const pets = res.data;
      this.setState({ dadosPet: pets });
    });
  }

  handlePopulateEdition(id) {
    api.get(`http://localhost:3333/pets/${id}`).then(res => {
      this.props.history.push({
        pathname: "/atualizar",
        state: {
          data: res.data
        }
      });
    });
  }

  handleDelete = id => {
    api.delete(`http://localhost:3333/pets/${id}`).then(() => {
      const data = this.state.dadosPet.filter(pet => {
        return pet.id !== id;
      });
      this.setState({
        dadosPet: data
      });
    });
  };

  render() {
    return (
      <Container className="container">
        <div className="btn_voltar">
          <Link to="/">Voltar</Link>
        </div>

        <div className="titulo_pagina">
          <h4>Pets Cadastrados</h4>
        </div>

        <table className="background_list">
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Porte</th>
            <th>Nascimeto</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>

          {this.state.dadosPet.map(pet => (
            <tr key={pet.id}>
              <td>{pet.nome}</td>
              <td>{pet.especie}</td>
              <td>{pet.porte}</td>
              <td>{pet.nascimento}</td>
              <td>{pet.status}</td>
              <td>
                <div className="icon">
                  <MdEdit
                    size={15}
                    onClick={id => this.handlePopulateEdition(pet.id)}
                  />
                </div>
                <div className="icon">
                  <MdDelete
                    size={15}
                    color={"red"}
                    onClick={() => this.handleDelete(pet.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </table>

        <div className="btn_cadastrar">
          <Link to="/cadastro">Novo Pet</Link>
        </div>
      </Container>
    );
  }
}
