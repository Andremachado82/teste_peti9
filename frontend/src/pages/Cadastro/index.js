import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import api from "../../services/api";

export default function Cadastro({history}) {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('')
  const [porte, setPorte] = useState('')
  const [nascimento, setNascimento] = useState('')

  async function handleSubmit(e) {  
    e.preventDefault();
        
    
    const response = await api.post('/pets', {
      nome,
      especie,
      porte, 
      nascimento
    });      
    
    const { _id } = response.data;  
    
    history.push(`/listar/${_id}`);
  }

  return (
    <Container>
      <form className="cadastro" onSubmit={handleSubmit} >
        <div className="btn_voltar">
          <Link to="/">Voltar</Link>
        </div>
        <div className="form_background">
          <h3>Cadastrar Pet</h3>
          <div className="input">
            <label className="label-input" htmlFor="nome">
              Nome do pet
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              required
              onChange={e => setNome(e.target.value)}
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
              onChange={e => setEspecie(e.target.value)}
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
              onChange={e => setPorte(e.target.value)}
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
              onChange={e => setNascimento(e.target.value)}
            />
          </div>
          <input className="btn" type="submit" value="Cadastrar" />
        </div>
      </form>
    </Container>
  );
}

