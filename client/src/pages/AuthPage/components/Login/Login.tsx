import React from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { AuthForm } from '../../../../components/AuthForm/AuthForm';
import { Loader } from '../../../../components/Loader/Loader';
import './Login.scss';

export const Login = () => {
  const { loading, login } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="login auth-section">
      <div className="login__container _container">
        <AuthForm authAction={login} buttonText="Login" redirectTo="/" />
      </div>
    </section>
  );
};
