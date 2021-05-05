import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './Signup.css';

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container d-flex vh-100">
      <div className="m-auto align-self-center">
        <div className="card" style={{ width: '20rem' }}>
          <div className="card-body text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input
                    {...register('password', { required: true, minLength: 6 })}
                    type="password"
                    name="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                    valid={errors.password && !errors.password}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input
                  {...register('adress', { required: true })}
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  {...register('adress2', { required: true })}
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input
                    {...register('city', { required: true })}
                    type="text"
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select
                    {...register('state', { required: true })}
                    id="inputState"
                    className="form-control"
                  >
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input
                    {...register('zipcode', { required: true })}
                    type="text"
                    className="form-control"
                    id="inputZip"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    {...register('checkbox', { required: true })}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
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
  );
};

export default Signup;
