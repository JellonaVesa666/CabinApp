import React from "react";
import { ENDPOINTS, createAPIEndpoint } from "./api";

export default function LoginPage() {

  const Signin = () => {
    console.log("press");
    createAPIEndpoint(ENDPOINTS.users)
      .get()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{ marginBottom: 280 }}>
          <div className="p-5">

            <h2 className="mb-5 text-center" style={{ fontWeight: "300" }}>Login</h2>
            <h3 className="text-black-50 text-center" style={{ fontWeight: "300", marginBottom: "40px" }}>Have an account?</h3>

            <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
              <input type="email" placeholder="Username/Email" id="typeEmailX" className="form-control form-control-lg" style={{ padding: "25px 20px 25px 20px", height: "50px", color: "black !important", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "40px", background: "rgba(255, 255, 255, 0.9)" }} />
            </div>

            <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
              <input type="password" placeholder="Password" id="typePasswordX" className="form-control form-control-lg" style={{ padding: "25px 20px 25px 20px", height: "50px", color: "black !important", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "40px", background: "rgba(255, 255, 255, 0.9)" }} />
            </div>

            <div className="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
              <button
                type="submit"
                className="form-control text-uppercase"
                onClick={Signin}
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
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)"/* backgroundColor: "#7D91B1" */ }} />
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
                <a href="#!" className="" style={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: "500" }} >
                  Sign Up
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}