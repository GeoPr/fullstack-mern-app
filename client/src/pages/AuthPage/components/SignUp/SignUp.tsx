import React from 'react';
import { Loader } from '../../../../components/Loader/Loader';
import { useAuth } from '../../../../hooks/useAuth';
import { AuthForm } from '../../../../components/AuthForm/AuthForm';
import './SignUp.scss';

export const SignUp = () => {
  const { loading, signUp } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="signup auth-section">
      <div className="signup__container _container">
        <AuthForm authAction={signUp} type="signup" buttonText="Sign Up" redirectTo="/login" />
      </div>
    </section>
  );
};
