import React from 'react'

const PaymentProcess = () => {
  return (
    <div>
      <div className="container-screen bg-white vh-100">
        <div className="row">
          <div className="col text-center pt-4">
            <img
              src="img/avatar.webp"
              className="bankprofileAvatars"
              style={{ width: 60 }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <span>Sending money to</span>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4>Codesoftic Tech Private</h4>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <span>Bank A/C: xxxxxxxxxxx</span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-md-4">
            </div>
            <div className="col-sm-8 col-md-4">
              <form>
                <div className="input-group mb-3 pt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="addamount"
                    placeholder="Enter Amount"
                  />
                </div>
              </form>
              <form>
                <div className="input-group next-button">
                  <button type="submit" className="btn btn-primary swipe">
                    {" "}
                    <i className="fa-solid fa-arrow-right" />
                    <a href="account.html">g</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentProcess