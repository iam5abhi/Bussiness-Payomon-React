import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const TransferBank = () => {
  const [showAccountDetail,setShowAccountDetail]=useState([]);
  
  console.log(showAccountDetail,'===================')
  useEffect(() => {
    GetAccountDetails();
  },[])
  const GetAccountDetails= async ()=>{
    try {
    const result = await axios.get("http://localhost:4000/account")
    setShowAccountDetail(result.data)
    } catch (error){
        console.log(error,"No Data Found")
    }}
  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-2 col-md-4">
          </div>
          <div className="col-sm-8 col-md-4">
            <form>
              <div className="section p-4 rounded-3 bg-white shadow-lg">
                <h4 className="form-heading mb-4 text-center">
                  Bank Details
                </h4>
                <div className="row py-2 pay">
                  <div className="col">
                    <h5>Transfer to</h5>
                  </div>
                </div>
                <div className="row py-2 pay">
                  {/* ------------------------start to map -----------------------*/}
                  <div className="container  border rounded">
                  {
                    showAccountDetail.map((data)=>{
                      return(
                  <NavLink to="/paymentprocess" className="text-dark" key={data.id}>
                    <div className="row p-2 pay ">
                      <div className="col-2">
                        <img
                          src="img/avatar.webp"
                          className="bankprofileAvatars"
                          style={{ width: 52 }}
                        />
                      </div>
                      <div className="col-8 ps-4">
                        <h6>  </h6>
                          <span></span>
                      </div>
                      <div className="col-2 pt-2">
                        <img
                          src="img/SBI-logo.svg.png"
                          className="bankprofileAvatars"
                          style={{ width: 35 }}
                        />
                      </div>
                    </div>
                    </NavLink>
                    )
                  })
                  }
                  </div> 
                </div>
                <div className="row mt-1">
                  <div className="col mt-2 pt-2 text-center">
                    <button type="submit" className="btn btn-primary">
                    <NavLink to="/addaccount" className="text-white">
                      <i className="fa-solid fa-building-columns transfer" />
                        &nbsp; Add New Account
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferBank;