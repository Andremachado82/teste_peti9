import React,  {Component} from 'react';

import { Container  } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  changePage = (page) => {
    this.props.history.push(page)
  };
  render() {
    return (
      <Container>
        <h1>Cadastro de Pets</h1>
        <div>
          <button 
          type="button" 
          onClick={() => this.changePage("/cadastro")}>Cadastrar  
          </button>
  
          <button type="button" 
          onClick={() => this.changePage("/listar")}>Listar Pets
          
          </button>
        </div>
      </Container>
    );
  }
}
