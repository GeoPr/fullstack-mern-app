import { GradientSnake } from './../pages/HomePage/components/GradientSnake/GradientSnake';
import { Cude } from './../pages/HomePage/components/Cude/Cude';
import { HomePage } from './../pages/HomePage/HomePage';
import { Login } from './../pages/AuthPage/components/Login/Login';
import { SignUp } from './../pages/AuthPage/components/SignUp/SignUp';
import { AuthPage } from './../pages/AuthPage/AuthPage';

export interface IRoute {
  path: string;
  title: string;
  component: () => JSX.Element;
}

export const authRoutes: IRoute[] = [
  { path: '/', component: AuthPage, title: 'Auth page' },
  { path: '/signup', component: SignUp, title: 'Sign Up' },
  { path: '/login', component: Login, title: 'Login' },
];

export const privateRoutes: IRoute[] = [
  { path: '/', component: HomePage, title: 'Home page' },
  { path: '/cude', component: Cude, title: '3D Cude' },
  { path: '/snake', component: GradientSnake, title: 'Gradient Snake' },
];
