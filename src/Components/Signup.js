import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "./LoadingSpinner";
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { BaseUrl } from '../BaseUrl';
import './Signup.css'

const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Name is required')
      .matches(/^[a-zA-Z_ ]{2,}$/,'Enter Vaild Name'),
    BusinessName: yup
        .string('Enter Your Business Name')
        .matches(/^[a-zA-Z_ ]{2,}$/,'Enter vaild Business Name')
        .required('Business Name is required'),
    BusinessEmail: yup
      .string('Enter Your Business Email')
      .required('Business Email is required')
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid Email Format"),
    BusinessPhonenumber: yup
        .string('Only Number Allowed')
        .required('Phone Number is required')
        .matches(/^\+*[0-9]+$/,'Invaild Phone Number'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
    confirmpassword: yup
        .string('Enter your Confirm Password')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    });

const Signup = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword,setShowPassword]=useState(false)
  const [showConfirmpassowrd,setShowConfirmpassowrd]=useState(false)

const eye_Password=()=>{
  if(!showPassword){
    setShowPassword(true)
  }else{
    setShowPassword(false)
  }
}
const eye_Confirmpassowrd=()=>{
  if(!showConfirmpassowrd){
    setShowConfirmpassowrd(true)
  }else{
    setShowConfirmpassowrd(false)
  }
}
  return (
    <>      
           {isLoading ? <LoadingSpinner /> : <>
            <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-2 col-md-4">
                  </div>
                  <div className="col-sm-8 col-md-4">
                  <Formik
                initialValues={{ name:"", BusinessName:"", BusinessEmail:"", BusinessPhonenumber:"", password:"", confirmpassword:""}}
                 validationSchema={validationSchema}
                   onSubmit={(values) => {
                    axios({
                      method: 'POST',
                      url: `${BaseUrl.url}/api/signup`,
                      data:{
                        name:values.name,
                        BusinessName:values.BusinessName,
                        BusinessPhonenumber:values.BusinessPhonenumber,
                        BusinessEmail:values.BusinessEmail,
                        password:values.password,
                        confirmpassword:values.confirmpassword,
                      }
                    }).then((res)=>{
                        setIsLoading(true)
                      toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme:'colored'
                      });
                      setTimeout(() => {
                        // setIsLoading(true)
                        // setBtnDisable(true)
                        navigate('/login')
                    },3000);
                    })
                    .catch((err)=>{
                      // setIsLoading(true)
                      // setBtnDisable(true)
                      setTimeout(() => {
                        // setIsLoading(false)
                        // setBtnDisable(false)
                      },3000);
                      toast.error(err.response.data.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme:'colored'
                        });
                    })
                  }}
                  >
                  {({ errors, touched }) => (
                  <Form>
                          <div className="section p-4 rounded-3 bg-white border shadow-lg rounded-3">
                              <div className="logo text-center">
                                  <img src="img/payoman-logo1.png" style={{ width: 300 }} />
                              </div>
                              <h5 className="form-heading mb-4 p-2 text-center">Register your account</h5>
                              <div className="">
                                  <Field type="text" name='name' className={`form-control  ${!errors.name ? " " : "errBorder"}`} id="exampleInputName" aria-describedby="nameHelp" placeholder="Your name" />
                                  {errors.name && touched.name ? (
                                   <div className='errorMsg mb-1'>{errors.name}</div>
                                  ) : null}
                              </div>
        
                              <div className="">
                                  <Field type="text" name='BusinessName' className={`form-control  ${!errors.BusinessName ? " " : "errBorder"}`} id="exampleInputName" aria-describedby="nameHelp" placeholder="Business Name" />
                                   {errors.BusinessName && touched.BusinessName ? (
                                   <div className='errorMsg mb-1'>{errors.BusinessName}</div>
                                   ) : null}
                              </div>
                              <div className="">
                                  <Field type="email" name='BusinessEmail' className={`form-control  ${!errors.BusinessEmail ? " " : "errBorder"}`} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" />
                                  {errors.BusinessEmail && touched.BusinessEmail ? (
                                   <div className='errorMsg mb-1'>{errors.BusinessEmail}</div>
                                  ) : null}
                              </div>
                              <div className="">
                                  <Field type="text" maxLength={10} name='BusinessPhonenumber' className={`form-control  ${!errors.BusinessPhonenumber ? " " : "errBorder"}`} id="exampleInputNumber" placeholder="Phone number" />
                                  {errors.BusinessPhonenumber && touched.BusinessPhonenumber ? (
                                   <div className='errorMsg mb-1'>{errors.BusinessPhonenumber}</div>
                                  ) : null}
                              </div>
                              <div className="password-eye">
                                  <Field type={!showPassword ? "password" : "text"} name='password' className={`form-control  ${!errors.password ? " " : "errBorder"}`} id="exampleInputPassword" placeholder="Password" />
                                  <span className="d-flex justify-content-end">{!showPassword ? <i onClick={eye_Password} className="fa-sharp fa-solid fa-eye-slash"></i> : <i onClick={eye_Password} className="fa-solid fa-eye"></i>}</span>
                                  {errors.password && touched.password ? (
                                   <div className='errorMsg mb-1'>{errors.password}</div>
                                  ) : null}
                              </div>
                              <div className="password-eye">
                                  <Field type={!showConfirmpassowrd ? "password" : "text"} name='confirmpassword' className={`form-control  ${!errors.confirmpassword ? " " : "errBorder"}`} id="exampleInputPassword1" placeholder="Confirm Password" />
                                  <span className="d-flex justify-content-end">{!showConfirmpassowrd ? <i onClick={eye_Confirmpassowrd} className="fa-sharp fa-solid fa-eye-slash"></i> : <i onClick={eye_Confirmpassowrd} className="fa-solid fa-eye"></i>}</span>
                                  {errors.confirmpassword && touched.confirmpassword ? (
                                   <div className='errorMsg mb-1'>{errors.confirmpassword}</div>
                                  ) : null}
                              </div>
                              <button type="submit" className="btn btn-primary mt-2" disabled={isLoading} >Register&nbsp; <i className="fa-solid fa-arrow-right" /></button>
                              <ToastContainer />
                              <div className="row mt-1">
                                  <div className="col mt-2 text-center">
                                      Already have account?  <NavLink  to="/login" className="bottom-text">Login</NavLink>
                                  </div>
                              </div>
                          </div>
                      </Form>
                      )}
                  </Formik>
                  </div>
              </div>
          </div>
       </>}
    </>
  )
}
export default Signup