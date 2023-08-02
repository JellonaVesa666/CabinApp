import React, { useState } from "react";
import { ENDPOINTS, createAPIEndpoint } from "../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { LoginBody, Input, Checkbox, Link, SignInBtn } from "../styles/LoginStyle";
import { LoginDO, LoginDTO } from "../DTO/LoginDTO";

export default function LoginComponent(props) {

  const [showPassword, setHidePassword] = useState(false);
  const [data, setFormData] = useState(LoginDO);

  const login = () => {
    // Create post data for request
    LoginDTO.username = data.loginEmail.value;
    LoginDTO.email = data.loginEmail.value;
    LoginDTO.password = data.loginPassword.value;

    createAPIEndpoint(ENDPOINTS.login)
      .post(LoginDTO)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  const formChange = (event) => {
    const targetValue = event.target.value === "on" ? event.target.checked : event.target.value

    setFormData({
      ...data,
      [event.target.id]: { ...data[event.target.id], value: targetValue },
    });
    console.log(data);
  }

  return (
    <LoginBody show={props.show} className="col-12 col-md-8 col-lg-6 col-xl-5">
      <div className="p-5">

        <h2 className="mb-5 text-center" style={{ fontWeight: "300" }}>Login</h2>
        <h3 className="text-black-50 text-center" style={{ fontWeight: "300", marginBottom: "40px" }}>Have an account?</h3>

        <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
          <Input
            type="email"
            placeholder="Username/Email"
            id="loginEmail"
            className="form-control form-control-md"
            onChange={(event) => formChange(event)}
          />
        </div>

        <div className="mb-4" style={{ position: "relative", padding: "0px 20px 0px 20px" }}>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="loginPassword"
            className="form-control form-control-md"
            onChange={(event) => formChange(event)}
          />
          {showPassword && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword(false)} style={{ position: "absolute", top: 18, left: 380 }} />}
          {!showPassword && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword(true)} style={{ position: "absolute", top: 18, left: 380 }} />}
        </div>

        <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
          <SignInBtn
            type="submit"
            className="form-control text-uppercase"
            onClick={login}
          >
            Sign In
          </SignInBtn>
        </div>

        <div className=" row form-group d-md-flex" style={{ padding: "0px 20px 0px 20px" }}>
          <div className="w-50">
            <Checkbox className="form-check-input" id="flexCheckDefault" />
            <label className="form-check-label ps-2" htmlFor="flexCheckDefault" style={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: "500" }}>
              Remember Me
            </label>
          </div>
          <div className="w-50 text-end">
            <Link
              href="http://localhost:3000/"
              className="">
              Forgot Password
            </Link>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center mt-5 pt-1">
          <p className="mb-0 text-center">Don't have an account?
            <Link
              href="#!"
              className=""
              onClick={() => props.onRegisterShow(1)}
            >
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </LoginBody>
  )
}