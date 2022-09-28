import React from 'react'
import { NavLink } from 'react-router-dom';

const PasswordReset = () => {
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
                  Reset Password
                </h4>
                <p className=" text-center">Enter your new password below</p>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Confirm new password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <NavLink to="/login" className="text-white">
                    Reset Password &nbsp;
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

export default PasswordReset