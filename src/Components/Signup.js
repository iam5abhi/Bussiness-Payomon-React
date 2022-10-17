import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "./LoadingSpinner";
import axios from 'axios'
import { BaseUrl } from '../BaseUrl';
const Signup = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const[name,setName]=useState('')
    const[emailErrorMsg,setEmailErrorMsg]=useState('')
    const[pinErrMsg,setPinErrMsg]=useState('')
    const[businessErrorMsg,setBusinessErrorMsg]=useState('')
    const[phoneErrorMsg,setPhoneErrorMsg]=useState('')
    const[passwordErrorMsg,setPasswordErrorMsg]=useState('')
    const[confirmPasswordErrorMsg,setConfirmPasswordErrorMsg]=useState('')
    const[ragisterData,setragisterData]=useState({
        name:"",
        BusinessName:"",
        BusinessEmail:"",
        BusinessPhonenumber:"",
        password:"",
        confirmpassword:"",
    })
    const signupFromSubmit =(e)=>{
        e.preventDefault();
        if(!ragisterData.name || !ragisterData.BusinessName || !ragisterData.BusinessEmail || 
            !ragisterData.BusinessPhonenumber || !ragisterData.password || !ragisterData.confirmpassword || !ragisterData.pin){
            setName("enter your name")
            setBusinessErrorMsg("enter your business name");
            setEmailErrorMsg('enter your email address')
            setPhoneErrorMsg('enter your number')
            setPasswordErrorMsg('enter your password')
            setConfirmPasswordErrorMsg('enter confirm password')
            setPinErrMsg("enter pincode")
        }
        let regEmail = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let regphone = /^[0-9]{10}$/;
        let regname = /^[a-zA-Z ]{2,30}$/;
        let regPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let reqBusinessName=/^[a-zA-Z0-9]/;
        let regpin = /^[0-9]{4}$/;
        
        if (!regname.test(ragisterData.name)){
            setName("Number and Special charcter is not allpwed")
            return;
        }if (regname.test(ragisterData.name)){
            setName(" ")
        }if (!reqBusinessName.test(ragisterData.BusinessName)) {
            setBusinessErrorMsg("enter vaild businessName");
            return;
        }if (reqBusinessName.test(ragisterData.BusinessName)){
            setBusinessErrorMsg(" ");
        }if (!regEmail.test(ragisterData.BusinessEmail)) {
            setEmailErrorMsg("enter vaild email address");
            return;
        }if (regEmail.test(ragisterData.BusinessEmail)){
            setEmailErrorMsg(" ");
        }if (!regphone.test(ragisterData.BusinessPhonenumber)) {
            setPhoneErrorMsg("Phone Number should be 10 digit");
            return;
        }if (regphone.test(ragisterData.BusinessPhonenumber)) {
            setPhoneErrorMsg("");
        }if(!regPass.test(ragisterData.password)){
            setPasswordErrorMsg("enter vaild password");
            return;
        }if(regPass.test(ragisterData.password)){
            setPasswordErrorMsg(" ");
        }if (ragisterData.password !== ragisterData.confirmpassword) {
            setConfirmPasswordErrorMsg("password not match");
            return;
        }if (ragisterData.password === ragisterData.confirmpassword) {
            setConfirmPasswordErrorMsg("");
        }    
        setIsLoading(true)
        const config={
            method: 'post',
            url:`${BaseUrl.url}/api/signup`,
           data:ragisterData   
        }
        axios(config)
        .then(function (response) {
            navigate('/login')
        
        })
        .catch(function (error) {
        console.log(error);
        }); 
    };
    const handleChange=(event)=>{
        setragisterData((prev)=>({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
  return (
    <>      
           {isLoading ? <LoadingSpinner /> : <>
            <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-2 col-md-4">
                  </div>
                  <div className="col-sm-8 col-md-4">
                      <form>
                          <div className="section p-4 rounded-3 bg-white border shadow-lg rounded-3">
                              <div className="logo text-center">
                                  <img src="img/payoman-logo1.png" style={{ width: 300 }} />
                              </div>
                              <h5 className="form-heading mb-4 p-2 text-center">Register your account</h5>
                              <div className="input-group">
                                  <input type="text" name='name' onChange={handleChange} className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your name" />
                              </div>
                              <span className='errorMsg '>{name}</span >
                              <div className="input-group">
                                  <input type="text" name='BusinessName' onChange={handleChange} className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Business Name" />
                              </div>
                              <span className='errorMsg '>{businessErrorMsg}</span >
                              <div className="input-group">
                                  <input type="email" name='BusinessEmail' onChange={handleChange} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" />
                              </div>
                              <span className='errorMsg '>{emailErrorMsg}</span >
                              <div className="input-group">
                                  <input type="text" maxLength={10} name='BusinessPhonenumber' onChange={handleChange} className="form-control" id="exampleInputNumber" placeholder="Phone number" />
                              </div>
                              <span className='errorMsg '>{phoneErrorMsg}</span >
                              <div className="input-group">
                                  <input type="password" name='password' onChange={handleChange} className="form-control" id="exampleInputPassword" placeholder="Password" />
                              </div>
                              <span className='errorMsg '>{passwordErrorMsg}</span >
                              <div className="input-group">
                                  <input type="password" name='confirmpassword' onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                              </div>
                              <span className='errorMsg '>{confirmPasswordErrorMsg}</span >
                              <button type="button" className="btn btn-primary mt-2" onClick={signupFromSubmit} disabled={isLoading} >Register&nbsp; <i className="fa-solid fa-arrow-right" /></button>
                              <ToastContainer />
                              <div className="row mt-1">
                                  <div className="col mt-2 text-center">
                                      Already have account?  <NavLink  to="/login" className="bottom-text">Login</NavLink>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
       </>}
    </>
  )
}
export default Signup
