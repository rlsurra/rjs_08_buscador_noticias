import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header titulo="Buscador de noticias"/>
      <div className="container whit">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
