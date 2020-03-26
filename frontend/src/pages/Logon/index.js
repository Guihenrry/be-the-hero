import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
  const history = useHistory();
  const [id, setId] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', {
        id
      });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.ong.name);
      history.push('/profile');
    } catch {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Sua ID"
            value={id}
            onChange={event => setId(event.target.value)}
          />
          <button className="button" type="submit">Entar</button>

          <Link to="/register" className="back-link"> 
            <FiLogIn size={16} color="#E02041"/> 
            Nâo tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="Heroes" />
    </div>
  );
}
