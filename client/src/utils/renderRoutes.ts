import { IRoute } from '../routes/routes';

export const renderRoutes = (
  routes: IRoute[],
  renderFunction: (route: IRoute, idx: any, array: IRoute[]) => JSX.Element,
) => {
  return routes.map((route, idx, array) => {
    return renderFunction(route, idx, array);
  });
};
