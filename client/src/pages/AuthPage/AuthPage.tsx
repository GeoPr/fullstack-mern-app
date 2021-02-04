import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.scss';

const useStyles = makeStyles(() => ({
  root: { width: '100%' },
}));

export const AuthPage = () => {
  const styles = useStyles();

  return (
    <section className="auth">
      <div className="auth__container _container">
        <div className="auth__body">
          <div>
            <Typography variant="h2" component="h1">
              Do not enter your real data ❗❗❗
            </Typography>
            <Typography variant="h2" component="h1">
              Не вводите свои настоящие данные ❗❗❗
            </Typography>
          </div>
          <Typography variant="h3" component="h2">
            Hey here ✌
          </Typography>
          <div className="auth__buttons">
            <Link to="/login">
              <Button
                color="primary"
                variant="contained"
                className={styles.root}>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                color="primary"
                variant="contained"
                className={styles.root}>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
