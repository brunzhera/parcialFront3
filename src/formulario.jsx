import React, { useState } from 'react';

const Card = ({ nombre, email }) => {
  return (
    <div className="card">
      <h2>Información:</h2>
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
    </div>
  );
};

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorGeneral, setErrorGeneral] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
    setErrorNombre('');
    setErrorGeneral('');
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail('');
    setErrorGeneral('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '' || nombre[0] === ' ') {
      setErrorNombre('El nombre no puede estar vacío ni contener espacios en blanco al principio');
      setErrorGeneral('Por favor, verifica que la información sea correcta.');
      setMostrarCard(false);
      return;
    }

    if (email.length < 6) {
      setErrorEmail('El email debe tener al menos 6 caracteres');
      setErrorGeneral('Por favor, verifica que la información sea correcta.');
      setMostrarCard(false);
      return;
    }

    setErrorGeneral('');
    setMostrarCard(true);
  };

  return (
    <div>
      {errorGeneral && <p>{errorGeneral}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleChangeNombre}
          />
          {errorNombre && <p>{errorNombre}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
          {errorEmail && <p>{errorEmail}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {mostrarCard && <Card nombre={nombre} email={email} />}
    </div>
  );
};

export default Formulario;