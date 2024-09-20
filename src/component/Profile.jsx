import React from "react";

export const Profile = () => {
  return (
    <div className="profile-container">
      <aside className="sidebar">
        <h2>Максим</h2>
        <nav>
          <ul>
            <li><a href="#account">Учетная запись</a></li>
            <li><a href="#password">Смена пароля</a></li>
            <li><a href="#orders">История заказов</a></li>
            <li><a href="#logout">Выйти</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h2>Личные данные</h2>
        <form>
          <label>
            ФИО:
            <input type="text" value="Максим" readOnly />
          </label>
          <label>
            Ваша почта:
            <input type="email" value="vasilchenko.maksim23@gmail.com" readOnly />
          </label>
          <label>
            Номер телефона:
            <input type="tel" placeholder="Введите номер телефона" />
          </label>
          <button type="submit" className="save-btn">Сохранить</button>
        </form>
      </main>
    </div>
  );
};

