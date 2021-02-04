import React from 'react';
import './Loader.scss';

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="loader__item"></div>
        <div className="loader__item"></div>
        <div className="loader__item"></div>
        <div className="loader__item"></div>
      </div>
    </div>
  );
};
