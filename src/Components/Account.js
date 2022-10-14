import React, { useEffect,useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";



const Account = () => {
  const navigate=useNavigate()
  const token = window.localStorage.getItem('refreshToken')
   const [showTransaction,setshowTransaction]=useState([])
   const [isLoading,setIsLoading]=useState(true)
   const [walletBlance,setwalletBlance]=useState()
   const [businessUserData,setbusinessUserData]=useState({
      name:"",
      BusinessPhonenumber:""
   })


   const GetTansaction =()=>{
      axios.get(`${BaseUrl.url}/api/checksendMoneyDetail`,
        {
          headers:{
            'Authorization':`Bearer ${token}`
          }
        }
      ).then((res)=>{
        setshowTransaction(res.data.recivePayment)
        setIsLoading(false)
      }).catch((err)=>{
        console.log(err.message)
      })
   }

   const GetProfileDetails=()=>{
    const config={
      method: 'get',
      url: `${BaseUrl.url}/api/checkprofile`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    }

    axios(config)
      .then(function (response) {
        setbusinessUserData((preSate)=>({
              ...preSate,
              name:response.data.user.name,
              BusinessPhonenumber:response.data.user.BusinessPhonenumber

        }))
      })
      .catch(function (error) {
        console.log(error);
      });
   }


   const LogoutHandler =()=>{
       window.localStorage.removeItem('refreshToken')
       navigate('/login')
   }

   const GetWalletBlance =()=>{
      const config ={
        method: 'get',
        url: `${BaseUrl.url}/api/checkwallet`,
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      }


    axios(config)
    .then(function (response) {
      setwalletBlance(response.data.wallet)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

   useEffect(()=>{
    GetWalletBlance()
    GetProfileDetails()
    GetTansaction()
   },[token])
  return (
    <>
       <div className="container-board">
        <div className="navbar-container">
          <div className="row ">
            <div className="col-sm-1 col-md-1 pt-2">
              <img
                src="img/avatar.webp"
                className="bankprofileAvatars"
                style={{ width: 60 }}
              />
            </div>
            <div className="col-sm-7 col-md-7 pt-2">          
              <ul className="list-unstyled ">
                <li>
                  <h4>
                    <strong>{businessUserData.name}</strong>
                    <p style={{"color":'grey',"fontSize":"16px"}}>{businessUserData.BusinessPhonenumber}</p>
                  </h4>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 pt-2">
              <ul className="list-unstyled">
                <li>
                  <span>Total Balance:</span>
                </li>
                <li>
                  <h4>
                    <strong> OMR +{walletBlance} </strong>
                  </h4>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 pt-4">
              <ul className="list-unstyled d-flex ">
                <li>
                  <NavLink to="/withdraw-to-bank">
                    <button type="submit" className="btn btn-primary add-money">
                      <img src="img/top-up.png" style={{ width: 20 }} />{" "}
                      &nbsp;To Bank
                    </button>
                  </NavLink>
                </li>
                &nbsp;
                <li>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  onClick={LogoutHandler}
                  >
                    <img src="img/turn-off.png" style={{ width: 16 }} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src="img/payobanner.png" className="d-block w-100" alt="..." />
        </div>
        <div className="container-board">
          <div className="row pt-3">
            <div className="col text-start">
              <h5>Recent Payments</h5>
            </div>
            <div className="col text-end">
              <NavLink to="/">
                <i className="fa-solid fa-arrows-rotate" />
              </NavLink>
            </div>
          </div>
           <div className="row pt-3">
          
             {
                (isLoading) ?<div></div>:
                <>
                  {
                    showTransaction.map((transaction)=>{
                        return(
                          <>
                             <div className="col-2 border pt-4 text-center" key={transaction._id}>
                                 <i className="fa-solid fa-building-columns " />
                                  
                             </div>
                             <div className="col-6 border pt-3">
                                <ul className="list-unstyled ">
                                <li>Money Received from {transaction.customerName}</li>
                                <li><span>{transaction.date}</span></li>
                                </ul>
                            </div>
                            <div className="col-4 border pt-3  text-end">
                            <strong>OMR</strong>&nbsp;+{transaction.amount}
                         </div>
                         <br /> 
                            
                          </>
                        )
                    })
                  }

                </>
             }
            </div>
           <div className="banner">
          <img src="img/payobanner.png" className="d-block w-100" alt="..." />
        </div>
       </div>
      </div>
    </>
  );
};

export default Account;
