import React, { useState } from 'react';

function App() {
  //useState retorna 2 funciones (no func como tal, piezas)
  //El primero es el state acutal = this.state
  //El segundo es la func que actualiza el state (similar al this.setState());
  const [citas, guardarCita] = useState([]);

  console.log(citas);

  return(
    <h1>Hola</h1>
  )
}

export default App;
