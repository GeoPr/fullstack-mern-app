import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useContextValue } from '../../context/context';
import { authRoutes, privateRoutes } from '../../routes/routes';
import { renderRoutes } from '../../utils/renderRoutes';

export const Routes = () => {
  const {
    userInfo: { token },
  } = useContextValue();

  return (
    <Switch>
      {renderRoutes(token ? privateRoutes : authRoutes, (route, idx) => {
        return (
          <Route
            exact
            path={route.path}
            component={route.component}
            key={idx}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
};
