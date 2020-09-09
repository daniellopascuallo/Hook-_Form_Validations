import React, { useState } from 'react';

const RegistrationForm = props => {
    const [ registration, setRegistration] = useState({
        fname: "",
        lname: "",
        email: "",
        pwd: "",
        cpwd: ""
    })

    const { fname, lname, email, pwd, cpwd } = registration;

    const handleRegistration = e => {
        setRegistration({
            ...registration,
            [e.target.name]: e.target.value
        });
    }

    const nameValid = name => {
        return (name.length <2 && name.length !==0 ? false : true);
    }

    const emailValid = email => {
        return (email.length <5 && email.length !==0 ? false : true);
    }

    const passwordValid = password => {
        return (
            password.length <8 && password.length !==0 && pwd !== cpwd ? false : true
        );
    }

    return(
        <div>
            <form className="container text-center">
                <div className="row">
                    <h1 className="col my-3">Registration Form</h1>
                </div>
                <div className="row my-2">
                    <label className="col-3 offset-3" htmlFor="firstName">First Name</label>
                    <input onChange={handleRegistration} className="col-3 ml-0" type="text" name="fname" id="firstName"/>
                </div>
                <div className="row">
                    {nameValid(fname) ? "" : <p className="col mx-auto text-danger">First Name must be at least 2 characters</p>}
                </div>
                <div className="row my-2">
                    <label className="col-3 offset-3" htmlFor="lastName">Last Name</label>
                    <input onChange={handleRegistration} className="col-3 ml-0" type="text" name="lname" id="lastName"/>
                </div>
                <div className="row">
                    {nameValid(lname) ? "" : <p className="col mx-auto text-danger">Last Name must be at least 2 characters</p>}
                </div>
                <div className="row my-2">
                    <label className="col-3 offset-3" htmlFor="email">Email</label>
                    <input onChange={handleRegistration} className="col-3 ml-0" type="text" name="email" id="email"/>
                </div>
                <div className="row">
                    {emailValid(email) ? "" : <p className="col mx-auto text-danger">Email must be at least 5 characters</p>}
                </div>
                <div className="row my-2">
                    <label className="col-3 offset-3" htmlFor="password">Password</label>
                    <input onChange={handleRegistration} className="col-3 ml-0" type="password" name="pwd" id="password"/>
                </div>
                <div className="row">
                    {passwordValid(pwd) ? "" : <p className="col mx-auto text-danger">Password must be at least 8 characters</p>}
                </div>
                <div className="row my-2">
                    <label className="col-3 offset-3" htmlFor="cpassword">Confirm Password</label>
                    <input onChange={handleRegistration} className="col-3 ml-0" type="password" name="cpwd" id="cpassword"/>
                </div>
                <div className="row">
                    {passwordValid(cpwd) ? "" : <p className="col mx-auto text-danger">Passwords must match</p>}
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;