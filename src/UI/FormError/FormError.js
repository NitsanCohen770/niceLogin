import React from 'react';
import classes from './FormError.module.css';

const FormError = ({ children }) => {
  return <p className={classes.p}>{children}</p>;
};

FormError.propTypes = {};

export default FormError;
