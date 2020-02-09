import React from 'react';
import { BrowserRouter, Switch ,Route  } from 'react-router-dom';

import Main from './pages/Main'
import Listar from './pages/Listar'
import Cadastro from './pages/Cadastro'
import Atualizar from './pages/Atualizar'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/listar" component={Listar} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/atualizar" component={Atualizar} />
      </Switch>
    </BrowserRouter>
  );
}

