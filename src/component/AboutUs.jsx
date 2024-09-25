import React from 'react';

export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="logo-section">
        <img src="./img/logo.png" alt="Логотип компанії" className="company-logo" />
      </div>
      <div className="about-text-section">
        <h2 className="about-title">Про нас</h2>
        <p className="about-description">
          Ми спеціалізуємось на системах відеоспостереження з передачею даних на телефон для квартир та приватних будинків.
          Наші консультанти допоможуть вам безкоштовно вибрати камеру, виходячи з ваших потреб, і нададуть вичерпну інформацію.
        </p>
      </div>

      <div className="advantages-section">
        <h3 className="advantages-title">Наші переваги:</h3>
        <ul className="advantages-list">
          <li>Безкоштовне відвідування та демонстрація роботи камер у клієнта.</li>
          <li>Персоналізоване обслуговування: ми ставимо питання та підбираємо ідеальне рішення, адаптоване до ваших потреб.</li>
          <li>Клієнти бачать, як камери працюють у реальних умовах.</li>
          <li>Фокус на нішевих ринках: унікальні рішення для вашого дому або квартири.</li>
          <li>Підписка за 50 грн кожні 4 місяці на перевірку та обслуговування камер.</li>
        </ul>
      </div>
    </div>
  );
};
