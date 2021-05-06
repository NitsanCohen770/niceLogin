import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import FormError from '../../UI/FormError/FormError';
import classes from './Signup.module.css';
import { Fade } from '@material-ui/core';
import ClipLoader from 'react-spinners/ClipLoader';
import * as actions from '../../store/actions';
import axios from 'axios';
import { Redirect } from 'react-router';

const Signup = () => {
  const isLoading = useSelector(state => state.auth.isLoading);
  const userEmail = useSelector(state => state.auth.email);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = data => {
    dispatch(actions.onLoginInit);
    axios({
      method: 'post',
      url: 'http://localhost:3003/signup',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmedPassword: data.confirmedPassword,
      }),
    }).then(res => {
      console.log(res);
      dispatch(actions.onLoginSuccess(res.data));
    });
  };
  const spinner = isLoading && <ClipLoader color="blue" size={150} />;
  return (
    spinner || (
      <Fragment>
        {' '}
        <Fade in>
          <div className="container d-flex vh-100">
            <div className="m-auto align-self-center">
              <div className="card" style={{ width: '20rem' }}>
                <div className="card-body text-center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label for="inputEmail4">Email</label>
                      <input
                        {...register('email', {
                          required: 'true',
                        })}
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                        defaultValue={userEmail}
                        name="email"
                      />
                      {errors.email && (
                        <FormError>Enter a valid mail</FormError>
                      )}
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input
                          {...register('password', {
                            required: true,
                            minLength: 6,
                          })}
                          type="password"
                          name="password"
                          className=" form-control "
                          id="inputPassword4"
                          placeholder="Password"
                        />
                        {errors.password && (
                          <FormError>
                            A password must be at least 6 letters
                          </FormError>
                        )}
                      </div>

                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Confirm Password</label>
                        <input
                          {...register('confirmPassword', {
                            validate: value => value === watch('password'),
                          })}
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Password"
                          valid={errors.password && !errors.password}
                        />
                        {errors.confirmPassword && (
                          <FormError>Passwords must match</FormError>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Address</label>
                      <input
                        {...register('address', {
                          required: true,
                          minLength: 8,
                        })}
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        name="adress"
                      />
                      {errors.address && (
                        <FormError>Address must be at least 8 chars</FormError>
                      )}
                    </div>
                    <div className="form-group">
                      <label for="fullName">Full name</label>
                      <input
                        {...register('fullName', {
                          required: true,
                          pattern: /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/,
                        })}
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Your First and Last name"
                        name="fullName"
                      />
                      {errors.fullName && (
                        <FormError>
                          Full name must have first letter CAPS
                        </FormError>
                      )}
                    </div>

                    <div className="form-group">
                      <div className="form-check">
                        <input
                          {...register('checkbox', { required: true })}
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                          name="checkbox"
                        />
                        {errors.checkbox && (
                          <FormError>
                            Please agree to terms to continue
                          </FormError>
                        )}
                        <label className="form-check-label" for="gridCheck">
                          I agree to all site terms of use
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        {isLoggedIn && <Redirect to="/" />}
      </Fragment>
    )
  );
};

export default Signup;
