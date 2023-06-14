import React from "react";
import { ENDPOINTS, createAPIEndpoint } from "../api";
import { LoginBody, Input, Checkbox } from "../styles/LoginStyle";

export default function LoginComponent(props) {

  const login = () => {
    console.log("press");
    createAPIEndpoint(ENDPOINTS.users)
      .get()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return (
    <LoginBody {...props} className="col-12 col-md-8 col-lg-6 col-xl-5">
      <div className="p-5">

        <h2 className="mb-5 text-center" style={{ fontWeight: "300" }}>Login</h2>
        <h3 className="text-black-50 text-center" style={{ fontWeight: "300", marginBottom: "40px" }}>Have an account?</h3>

        <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
          <Input type="email" placeholder="Username/Email" id="typeEmailX" className="form-control form-control-lg"/>
        </div>

        <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
          <Input type="password" placeholder="Password" id="typePasswordX" className="form-control form-control-lg"/>
        </div>

        <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
          <button
            type="submit"
            className="form-control text-uppercase"
            onClick={login}
            style={{
              height: "50px", color: "rgba(255, 255, 255, 1)",
              border: "2px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "40px",
              background: "black"
            }}
          >
            Sign In
          </button>
        </div>

        <div className=" row form-group d-md-flex" style={{ padding: "0px 20px 0px 20px" }}>
          <div className="w-50">
            <Checkbox className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label ps-2" htmlFor="flexCheckDefault" style={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: "500" }}>
              Remember Me
            </label>
          </div>
          <div className="w-50 text-end">
            <a href="http://localhost:3000/" className="" style={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: "500" }}>Forgot Password</a>
          </div>
        </div>

        <div className="d-flex justify-content-center text-center mt-5 pt-1">
          <p className="mb-0 text-center">Don't have an account?
            <a
              href="#!"
              className=""
              onClick={() => props.onShowRegister(1)}
              style={{
                color: "rgba(0, 0, 0, 0.5)",
                fontWeight: "500"
              }}
            >
              Sign Up
            </a>
          </p>
        </div>

      </div>
    </LoginBody>
  )
}