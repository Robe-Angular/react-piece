import React from 'react';

import './assets/css/App.css';

import Router from './Router';

//Importar Componentes
/*
function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola, soy </h2>{nombre}
      <h3>Tengo {edad} años</h3>
    </div>
  );
  return presentacion;
}
*/
function App() {
  
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

