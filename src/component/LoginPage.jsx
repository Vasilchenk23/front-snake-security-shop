import React from 'react';

export const LoginPage = () => {
    return (
        <div className="login-page">
            <h2>Вход</h2>
            <form>
                <input type="text" placeholder="Имя пользователя" className="login-input" />
                <input type="password" placeholder="Пароль" className="login-input" />
                <button type="submit" className="login-button">Войти</button>
            </form>
            <a href="/forgot-password" className="forgot-password">Забыли пароль?</a>
        </div>
    );
}
