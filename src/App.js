import React, { useState, Fragment } from 'react';

function Formulario(){


const [cita, actualizarCita] = useState({
    mascota : '',
    propietario: '',
    fecha:'',
    hora: '',
    sintomas: '',
});

const actualizarState = e => {
  actualizarCita ({
    ...cita,
    [e.target.name] : e.target.value
  })
}


console.log(cita);

  return(
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
                  <label>Nombre Mascota</label>
                  <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                  />

                  <label>Nombre Dueño</label>
                  <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                  />

                  <label>Fecha</label>
                  <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                  />

                  <label>Hora</label>
                  <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                  />

                  <label>Sintomas</label>
                  <textarea
                    className="u-full-width"
                    name="sintomas"
                  ></textarea>

                  <button type="submit" className="button-primary u-full-width">Agregar</button>
          </form>
  </Fragment>
  )
}


function App() {
  //useState retorna 2 funciones (no func como tal, piezas)
  //El primero es el state acutal = this.state
  //El segundo es la func que actualiza el state (similar al this.setState());
  const [citas, guardarCita] = useState([]);

  console.log(citas);

  return(
    <Fragment>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario />
        </div>
        <div className="one-half column">

        </div>

      </div>
    </div>
    </Fragment>
  )
}

export default App;
