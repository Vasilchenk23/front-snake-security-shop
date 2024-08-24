import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('https://backend-snake-security-shop-production.up.railway.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/');
    } else {
    }
  };
  return (
    <div className="center-wrapper">
      <div className="login">
        <h2>Вход</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Войти</button>
        </form>
        <div className="no-account">
          <p>Нет аккаунта? <a href="/register">Создайте его</a></p>
        </div>
      </div>
    </div>
  );
};
