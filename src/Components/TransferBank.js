import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {BaseUrl} from '../BaseUrl'

const TransferBank = () => {
  const [showAccountDetail,setShowAccountDetail]=useState();


  const GetAccountDetails= async ()=>{
    axios({
      method: 'get',
      url:`${BaseUrl.url}/api/added/bankdetail`,
      headers:{
        'Authorization':`Bearer ${window.localStorage.getItem('refreshToken')}`
      }
    }).then((res)=>{
      setShowAccountDetail(res.data.data)
    })
    .catch((err)=>{
     console.log(err.message)
    })
  }

  
  useEffect(() => {
    GetAccountDetails();
  },[window.localStorage.getItem('refreshToken')])
 
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
                  {!showAccountDetail?null:
                    showAccountDetail.map((data)=>{
                      return(
                  <NavLink to="/paymentprocess" className="text-dark" key={data._id}>
                    <div className="row p-2 pay ">
                      <div className="col-2">
                      </div>
                      <div className="col-8 ps-4">
                        <h6>{data.IFSC_CODE}</h6>
                          <span>{data.AccountNumber}</span>
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
