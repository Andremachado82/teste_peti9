import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
// import api from "../../services/api";

function Atualizar(props) {
  const { nome, especie, porte, nascimento, status } = (props.location.state.data);
  console.log(nascimento)
  useEffect(() => {

  },[])

  async function handleSubmit(e) {
    e.preventDefault();    
  }

  return (
    <Container>
      <form className="atualizar" onSubmit={handleSubmit}>
        <div className="btn_voltar">
          <Link to="/">Voltar</Link>
        </div>
        <div className="form_background">
          <h3>Atualizar Pet</h3>
          <div className="input">
            <label className="label-input" htmlFor="nome">
              Nome do pet
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              required
              onChange={e => nome(e.target.value)}
            />
          </div>

          <div className="input">
            <label className="label-input" htmlFor="especie">
              Espécie
            </label>
            <input
              id="especie"
              type="text"
              value={especie}
              required
              onChange={e => especie(e.target.value)}
            />
          </div>

          <div className="input">
            <label className="label-input" htmlFor="porte">
              Porte
            </label>
            <input
              id="porte"
              type="text"
              value={porte}
              required
              onChange={e => porte(e.target.value)}
            />
          </div>

          <div className="input">
            <label className="label-input" htmlFor="nascimento">
              Data Nascimento
            </label>
            <input
              id="nascimento"
              type="date"
              value={nascimento}
              required
              onChange={e => nascimento(e.target.value)}
            />
          </div>

          <div className="status">
            <div>
              <label className="label-status" htmlFor="ativo">
                Ativo
              </label>

              <input
                className="input-status"
                type="radio"
                id="ativo"
                name="ativo"
                value={status}
              />
            </div>
            <div>
              <label className="label-status" htmlFor="Inativo">
                Inativo
              </label>
              <input
                className="input-status"
                type="radio"
                id="inativo"
                name="inativo"
                value={status}
              />
            </div>
          </div>

          <input className="btn" type="submit" value="Atualizar" />
        </div>
      </form>
    </Container>
  );
}

export default Atualizar;
