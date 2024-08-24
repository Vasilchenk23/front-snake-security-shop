import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    const toggleCatalog = () => {
        setIsCatalogOpen(!isCatalogOpen);
    };

    return (
        <>
            <header>
                <img src="../img/logo.png" alt="" className="logo" />
                <div className="catalog" onClick={toggleCatalog}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-category-plus">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6" />
                    </svg>
                    Каталог
                </div>
                {isCatalogOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li>Запчасти для ПК</li>
                            <ul>
                                <li>Оперативная память</li>
                                <li>Процессоры</li>
                                <li>Жесткие диски</li>
                                <li>Материнские платы</li>
                            </ul>
                            <li>Телефоны</li>
                            <ul>
                                <li>Б/У телефоны</li>
                                <li>Кабели</li>
                                <li>Батареи</li>
                                <li>Зарядные устройства</li>
                            </ul>
                            <li>Аксессуары для ПК</li>
                            <ul>
                                <li>Коврики</li>
                                <li>Мышки</li>
                                <li>Клавиатуры</li>
                                <li>Колонки</li>
                            </ul>
                            <li>Аксессуары для телефонов</li>
                            <ul>
                                <li>Чехлы</li>
                                <li>Защитные стекла</li>
                                <li>Наушники</li>
                                <li>Держатели</li>
                            </ul>
                        </ul>
                    </div>
                )}
                <div className="search-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <input className="search" type="text" placeholder="Поиск товаров на сайте" />
                </div>
                <div className="setting">
                    <Link to="/login" style={{ color: 'inherit' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-basket">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z" />
                        <path d="M17 10l-2 -6" />
                        <path d="M7 10l2 -6" />
                    </svg>
                </div>
            </header>
        </>
    );
};
