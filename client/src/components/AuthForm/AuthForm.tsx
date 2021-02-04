import React, { FC } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import './AuthForm.scss';

interface IProps {
  authAction: (email: string, password: string) => any | void;
  redirectTo?: string;
  type?: 'login' | 'signup';
  buttonText: string;
}

interface IAuthData {
  email: string;
  password: string;
}

const authSchema = yup.object().shape({
  email: yup
    .string()
    .min(6, 'Min length is 6')
    .required('This is a required field'),
  password: yup.string().required('This is required field'),
});

export const AuthForm: FC<IProps> = props => {
  const { authAction, buttonText, redirectTo, type = 'login' } = props;
  const { register, handleSubmit, errors, reset } = useForm<IAuthData>({
    resolver: yupResolver(authSchema),
  });
  const history = useHistory();
  const isLoginType = type === 'login';
  const color = isLoginType ? 'primary' : 'secondary';
  const variant = isLoginType ? 'outlined' : 'filled';

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      await authAction(email, password);

      reset();

      if (redirectTo) {
        history.push(redirectTo);
      }
    } catch (e) {
      console.log(e.message)
    }
  });

  return (
    <form className="auth-form" noValidate onSubmit={onSubmit}>
      <TextField
        color={color}
        variant={variant}
        label="Email"
        autoComplete="off"
        inputRef={register}
        name="email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        color={color}
        variant={variant}
        label="Password"
        autoComplete="off"
        inputRef={register}
        name="password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" color={color} variant="contained">
        {buttonText}
      </Button>
    </form>
  );
};
