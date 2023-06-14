import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent"
import RegisterModal from "../components/RegisterComponent"

export default function LoginPage() {

  const [show, setShow] = useState(0);

  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <LoginComponent onShowRegister={(childProps) => setShow(childProps)} show={show}/>
        <RegisterModal onHideRegister={(childProps) => setShow(childProps)} show={show}/>
      </div>
    </div>
  )
}