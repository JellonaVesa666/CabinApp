import React from "react";
import { LoginBody } from "../styles/LoginStyle";

export default function Login() {

  return (

    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5" style={{ marginBottom: 280 }}>
          <div class="p-5">

            <h2 class="mb-5 text-center" style={{ fontWeight: "300" }}>Login</h2>
            <h3 class="text-black-50 text-center" style={{ fontWeight: "300", marginBottom: "40px" }}>Have an account?</h3>

            <div class="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
              <input type="email" placeholder="Username/Email" id="typeEmailX" class="form-control form-control-lg" style={{ padding: "25px 20px 25px 20px", height: "50px", color: "black !important", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "40px", background: "rgba(255, 255, 255, 0.9)" }} />
            </div>

            <div class="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
              <input type="password" placeholder="Password" id="typePasswordX" class="form-control form-control-lg" style={{ padding: "25px 20px 25px 20px", height: "50px", color: "black !important", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "40px", background: "rgba(255, 255, 255, 0.9)" }} />
            </div>

            <div class="mb-4" style={{ padding: "0px 20px 0px 20px" }}>
              <button type="submit" class="form-control text-uppercase" style={{ height: "50px", color: "rgba(255, 255, 255, 1)", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "40px", background: "black" }} >Sign In</button>
            </div>

            <div class=" row form-group d-md-flex" style={{ padding: "0px 20px 0px 20px" }}>
              <div class="w-50">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)"/* backgroundColor: "#7D91B1" */ }} />
                <label class="form-check-label ps-2" for="flexCheckDefault" style={{  color: "rgba(0, 0, 0, 0.5)", fontWeight: "500" }}>
                  Remember Me
                </label>
              </div>
              <div class="w-50 text-end">
                <a href="#" className="" style={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: "500" }}>Forgot Password</a>
              </div>
            </div>

            <div class="d-flex justify-content-center text-center mt-5 pt-1">
              <p class="mb-0 text-center">Don't have an account?
                <a href="#!" class="" style={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: "500" }} >
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