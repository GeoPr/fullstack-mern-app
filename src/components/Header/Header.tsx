import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <nav className="header__nav">
          <ul className="header__menu menu">
            <li className="menu__item">
              <NavLink
                exact
                to="/"
                className="menu__link"
                activeClassName="menu__link_active">
                Home page
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                exact
                to="/cude"
                className="menu__link"
                activeClassName="menu__link_active">
                Cude
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                exact
                to="/snake"
                className="menu__link"
                activeClassName="menu__link_active">
                Gradient snake
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
