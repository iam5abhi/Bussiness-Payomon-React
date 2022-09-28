import React from 'react';
import { NavLink } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 col-md-4">
          </div>
          <div className="col-sm-8 col-md-4">
            <form>
              <div className="section p-4 bg-white border shadow-lg rounded-3">
                <div className="logo text-center">
                  <img
                    src="img/payoman-logo1.png"
                    style={{ width: 300 }}
                  />
                </div>
                <h4 className="form-heading mt-3  text-center">
                  Forgot Password ?
                </h4>
                <p className=" text-center">
                  Enter your email address you used to login to payoman
                </p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email address"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <NavLink to="/passwordreset" className="text-white">
                    Continue &nbsp;
                    <i className="fa-solid fa-arrow-right" />
                  </NavLink>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;