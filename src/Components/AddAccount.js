import React,{useState} from 'react';
import { BaseUrl } from '../BaseUrl';
import { NavLink,useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';


const validationSchema = yup.object({
  AccountholderName: yup
  .string('')
  .required('Account Holder Name is required'),
  BankName: yup
  .string('')
  .required('Bank Name Name is required'),
  AccountNumber: yup
  .string('Only Number Allowed')
  .matches(/^\+*[0-9]+$/,'Invaild Account Number')
  .required('Account Number is required'),
  IFSC_CODE: yup
  .string('')
  .required('IFSC_CODE is required'),
  });

const AddAccount = () => {
  const navigate = useNavigate()
  return (
    <div>
       <div className="container-fluid">
        <div className="row">
            <div className="col-sm-2 col-md-4">
            </div>
            <div className="col-sm-8 col-md-4">
            <Formik
               initialValues={{ AccountholderName:"", BankName:"", AccountNumber:"", IFSC_CODE:"" }}
                 validationSchema={validationSchema}
                   onSubmit={(values) => {
                    axios({
                    method: 'post',
                    url: `${BaseUrl.url}/api/addbankdetails`,
                    headers:{
                      'Authorization':`Bearer ${window.localStorage.getItem('refreshToken')}`
                    },
                    data:values
                  }).then((res)=>{
                    console.log(res.data)
                    navigate('/withdraw-to-bank')
                  })
                  .catch((err)=>{
                   console.log(err.message)
                  })
                  }}
                  >
                  {({ errors, touched }) => (
               <Form>
                <div className="section p-4 bg-white border shadow-lg rounded-3">
                <div className="logo text-center">
                    <img src="img/payoman-logo1.png" style={{width: 300}} />
                </div>
                <h4 className="form-heading my-4  text-center">Add Account</h4>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Account Holder Name</label>
                    <Field type="text" name="AccountholderName" className={`form-control  ${!errors.AccountholderName ? " " : "errBorder"}`} placeholder=" Enter Business Name" />
                    {errors.AccountholderName && touched.AccountholderName ? (
                    <div className='errorMsg'>{errors.AccountholderName}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Bank Name</label>
                    <Field type="text" name="BankName" className={`form-control  ${!errors.BankName ? " " : "errBorder"}`} placeholder="Enter Bank Name" />
                    {errors.BankName && touched.BankName ? (
                    <div className='errorMsg'>{errors.BankName}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Account Number</label>
                    <Field type="text" name="AccountNumber" className={`form-control  ${!errors.AccountNumber ? " " : "errBorder"}`} placeholder="xxxx xxxxx xxxx" />
                    {errors.AccountNumber && touched.AccountNumber ? (
                    <div className='errorMsg'>{errors.AccountNumber}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Swift Code</label>
                    <Field type="text" name="IFSC_CODE" className={`form-control  ${!errors.IFSC_CODE ? " " : "errBorder"}`} placeholder="xxxx xxxxx xxxx" />
                    {errors.IFSC_CODE && touched.IFSC_CODE ? (
                    <div className='errorMsg'>{errors.IFSC_CODE}</div>
                    ) : null}
                </div>
                <br />
                <button type="submit" className="btn btn-primary mb-3 text-white">Confirm&nbsp;<i className="fa-solid fa-arrow-right" /></button>
               </div>
            </Form>
            )}
            </Formik>
         </div>
      </div>
    </div>
 </div>
  )
}
export default AddAccount;
