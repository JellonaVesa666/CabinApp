import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent"
import RegisterComponent from "../components/RegisterComponent"

export default function LoginPage() {

  const [show, setShow] = useState(0);

  const handleClick = (childProps) => {
    // 👇️ take the parameter passed from the Child component
    setShow(childProps);
  };

  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <LoginComponent onRegisterShow={(childProps) => handleClick(childProps)} show={show}/>
        <RegisterComponent onRegisterHide={(childProps) => handleClick(childProps)} show={show}/>
      </div>
    </div>
  )
}