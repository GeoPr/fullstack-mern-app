import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: '2rem',
  },
}));

export const HomePage = () => {
  const styles = useStyles();

  return (
    <section className="home">
      <div className="home__container _container">
        <div className="home__body">
          <div>
            <Typography variant="h4" component="h1">
              That`s a simple auth app.
            </Typography>
            <Typography variant="h5" component="h2">
              Thanks u tested it 😉
            </Typography>
          </div>
          <Link to="/cude">
            <Button color="primary" variant="contained" className={styles.root}>
              Click here to enjoy the awesome 3d cude 🎲
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
