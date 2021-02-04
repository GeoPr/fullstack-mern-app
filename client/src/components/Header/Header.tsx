import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useContextValue } from '../../context/context';
import { useAuth } from '../../hooks/useAuth';
import { authRoutes, privateRoutes, IRoute } from '../../routes/routes';
import { renderRoutes } from '../../utils/renderRoutes';
import './Header.scss';

const Item: FC<{ route: IRoute }> = ({ route }) => {
  return (
    <li className="menu__item">
      <NavLink
        exact
        to={route.path}
        className="menu__link"
        activeClassName="menu__link_active">
        {route.title}
      </NavLink>
    </li>
  );
};

export const Header = () => {
  const {
    userInfo: { token },
  } = useContextValue();
  const { logout } = useAuth();

  return (
    <header className="header">
      <div className="header__body">
        <nav className="header__nav">
          <ul className="header__menu menu">
            {renderRoutes(token ? privateRoutes : authRoutes, (route, idx) => {
              return <Item route={route} key={idx} />;
            })}
          </ul>
        </nav>
        {token && (
          <Button color="secondary" variant="contained" onClick={logout}>
            Log Out
          </Button>
        )}
      </div>
    </header>
  );
};
