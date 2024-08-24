import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('https://backend-snake-security-shop-production.up.railway.app/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });
  
    if (response.ok) {
      navigate('/login');
    } else {
    }
  };

  return (
    <div className="center-wrapper">
      <div className="register">
        <h2>Регистрация</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Почта пользователя"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};