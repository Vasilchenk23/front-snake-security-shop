import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <h3> Про нас</h3>
          <p>Ми пропонуємо широкий асортимент камер відеоспостереження та аксесуарів. Наші продукти допоможуть вам забезпечити безпеку.</p>
        </div>
        <div className="footer-section links">
          <h3>Корисні посилання</h3>
          <ul>
          <Link to="/" style={{ textDecoration:'none'}}><li>Головна</li></Link>
          <Link to="/about" style={{ textDecoration:'none'}}><li>Про нас</li></Link>
          <Link to="/privacy" style={{ textDecoration:'none'}}><li>Політика конфіденційності</li></Link> 
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Контактна інформація</h3>
          <p>Телефон: +38 (068) 592-98-20</p>
          <p>Email: snkscrtshp@gmail.com</p>
        </div>
        {/* <div className="footer-section social">
          <h3>Мы в социальных сетях</h3>
          <a className="social-icon">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
          </a>
          <a className="social-icon">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
          </a>
          <a className="social-icon">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>
          </a>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Snake Security Shop. Усі права захищені.</p>
      </div>
    </footer>
  );
};

