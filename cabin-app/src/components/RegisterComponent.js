import React, { useState } from "react";
import { RegisterBody, LinkH4, SubmitBtn, CloseBtn, Checkbox, Input, Select } from "../styles/RegisterStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function RegisterComponent(props) {

  const [showPassword1, setHidePassword1] = useState(false);
  const [showPassword2, setHidePassword2] = useState(false);

  const initialData = {
    address: "",
    countryCode: "+358",
    email: "",
    emailConfirm: "",
    fullName: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    postalCode: "",
    role: 0,
    termsOfService: "",
    username: ""
  };

  const [data, setFormData] = useState(initialData);

  const formChange = (event) => {
    setFormData({ ...data, [event.target.id]: event.target.value });
  };

  const validateForm = () => {
    console.log(data);
    var formIsValid = true;

    //Name
    if (data.fullName.length === 0) {
      formIsValid = false;
      console.log("Fullname cannot be empty")
      //errors["name"] = "Cannot be empty";
    }
    else {
      if (!data.fullName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        console.log("Only letters")
        //errors["name"] = "Only letters";
      }
    }

    //Username
    if (data.fullName.length === 0) {
      formIsValid = false;
      console.log("Fullname cannot be empty")
      //errors["name"] = "Cannot be empty";
    }
    else {
      if (!data.fullName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        console.log("Only letters")
        //errors["name"] = "Only letters";
      }
    }

    //Email
    if (data.email.length === 0) {
      formIsValid = false;
      console.log("Email cannot be empty")
      //errors["email"] = "Cannot be empty";
    }
    else {
      let lastAtPos = data.email.lastIndexOf("@");
      let lastDotPos = data.email.lastIndexOf(".");

      if (!(lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        data.email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        data.email.length - lastDotPos > 2
      )) {
        formIsValid = false;
        console.log("Email is not valid")
        //data.email = "Email is not valid";
      }
    }
    if (data.emailConfirm.length === 0) {
      formIsValid = false;
      console.log("Confirm email cannot be empty")
    }
    else {
      if (data.email !== data.emailConfirm) {
        console.log("Email do not match")
      }
    }

    // Phone
    if (data.countryCode.length === 0 || data.phone.length === 0) {
      formIsValid = false;
      console.log("Phone cannot be empty")
    }
    else {
      const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      if (!phoneRegex.test(data.countryCode + data.phone)) {
        console.log("Invalid phone number")
      }
    }

    // Address
    if (data.address.length === 0) {
      formIsValid = false;
      console.log("Address cannot be empty")
    }
    else {
      const adressRegex = /^\s*\S+(?:\s+\S+)/;
      if (!adressRegex.test(data.address)) {
        formIsValid = false;
        console.log("Invalid Address")
      }
    }

    // Postal Code
    if (data.postalCode.length === 0) {
      formIsValid = false;
      console.log("Postal code cannot be empty")
    }
    else {
      const postalRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      if (!postalRegex.test(data.postalCode)) {
        formIsValid = false;
        console.log("Invalid postal code")
      }
    }

    // Role
    if (data.role === 0) {
      console.log("Role is required")
      formIsValid = false;
    }

    // Password
    if (data.password.length === 0) {
      formIsValid = false;
      console.log("Password cannot be empty")
    }
    else {
      // At least one upper case English letter, (?=.*?[A-Z])
      // At least one lower case English letter, (?=.*?[a-z])
      // At least one digit, (?=.*?[0-9])
      // At least one special character, (?=.*?[#?!@$%^&*-])
      // Minimum eight in length .{8,} (with the anchors)
      const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!passwordRegex.test(data.password)) {
        formIsValid = false;
        console.log("Password do not meet requirements")
      }
    }
    if (data.passwordConfirm.length === 0) {
      formIsValid = false;
      console.log("Confirm password cannot be empty")
    }
    else {
      if (data.password !== data.passwordConfirm) {
        console.log("Passwords do not match")
      }
    }

    // Terms of Service
    if (!data.termsOfService) {
      formIsValid = false;
      console.log("Please agree the terms of Service")
    }
  }

  return (
    <RegisterBody show={props.show} className="col-12 col-md-8 col-lg-6 col-xl-5 shadow-lg">
      <div className="p-5" style={{ position: "relative" }}>
        <CloseBtn
          onClick={() => props.onRegisterHide(0)}
        >
          <p className="text-center" style=
            {{
              marginTop: 8,
              textTransform: "uppercase"
            }}
          >
            close
          </p>
        </CloseBtn>
        <h4 className="mb-4 mt-2 text-center"
          style=
          {{
            fontWeight: "300",
          }}
        >
          Register
        </h4>

        <div
          className="mb-4"
          style={{
            background: "grey", height: "2px", width: "100%"
          }}
        />

        <div
          className="px-2"
          style=
          {{
            color: "black",
            fontWeight: "400",
            fontSize: "0.95rem"
          }}
        >
          Full name
        </div>
        <div
          className="mb-2"
        >
          <Input
            type="text"
            placeholder="Fullname"
            id="fullName"
            onChange={(event) => formChange(event)}
            className="form-control form-control-d"
          />
        </div>

        <div
          className="mt-3 px-2"
          style=
          {{
            color: "black",
            fontWeight: "400",
            fontSize: "0.95rem"
          }}
        >
          Username
        </div>
        <div
          className="mb-2"

        >
          <Input
            type="text"
            placeholder="Username"
            id="username"
            onChange={(event) => formChange(event)}
            className="form-control form-control-d"
          />
        </div>

        <div
          className="mt-3 px-2"
          style=
          {{
            color: "black",
            fontWeight: "400",
            fontSize: "0.95rem"
          }}
        >
          Email
        </div>
        <div
          className="mb-2"
        >
          <Input
            type="email"
            placeholder="Email"
            id="email"
            onChange={(event) => formChange(event)}
            className="form-control form-control-d"
          />
        </div>

        <div
          className="mt-3 px-2"
          style=
          {{
            color: "black",
            fontWeight: "400",
            fontSize: "0.95rem"
          }}
        >
          Confirm Email
        </div>
        <div
          className="mb-2"
        >
          <Input
            type="email"
            placeholder="Confirm email"
            id="emailConfirm"
            onChange={(event) => formChange(event)}
            className="form-control form-control-d"
          />
        </div>

        <div
          className="mt-3 px-2"
          style=
          {{
            color: "black",
            fontWeight: "400",
            fontSize: "0.95rem"
          }}
        >
          Phone
        </div>
        <div class="row gx-3">
          <div class="col-3">
            <Input
              type="tel"
              defaultValue="+358"
              id="countryCode"
              onChange={(event) => formChange(event)}
              className="form-control form-control-d"
            />
          </div>
          <div class="col-9">
            <Input
              type="tel"
              placeholder=""
              id="phone"
              onChange={(event) => formChange(event)}
              className="form-control form-control-d"
            />
          </div>
        </div>

        <div class="row gx-3 mt-3 px-2">
          <div
            className="col-8"
            style={{
              color: "black",
              fontWeight: "400",
              fontSize: "0.95rem"
            }}
          >
            Address
          </div>
          <div
            className="col-4 ps-3"
            style={{
              color: "black",
              fontWeight: "400",
              fontSize: "0.95rem"
            }}
          >
            Postal Code
          </div>
        </div>
        <div class="row gx-3">
          <div class="col-8">
            <Input
              type="text"
              placeholder="Address"
              id="address"
              className="form-control form-control-d"
              onChange={(event) => formChange(event)}
            />
          </div>
          <div class="col-4">
            <Input
              type="text"
              placeholder="Postal Code"
              id="postalCode"
              pattern="[0-9]{5}"
              className="form-control form-control-d"
              onChange={(event) => formChange(event)}
            />
          </div>
        </div>

        <div
          className="mt-3 px-2"
          style={{
            color: "black",
            fontWeight: "400",
            fontSize: "0.95rem"
          }}
        >
          Role
        </div>
        <Select
          class="form-select"
          aria-label="Default select example"
          id="role"
          onChange={(event) => formChange(event)}
        >
          <option selected>Role</option>
          <option value="1">Admin</option>
          <option value="2">Manager</option>
          <option value="3">Supervisor</option>
          <option value="3">Worker</option>
        </Select>

        <div class="row gx-3 mt-3 mb-2">
          <div
            className="col px-3"
            style={{ color: "black" }}>
            Password
          </div>
          <div
            className="col"
            style={{ color: "black" }}>
            Confirm password
          </div>
        </div>
        <div class="row gx-3 mb-5">
          <div class="col" style={{ position: "relative" }}>
            <Input
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              id="password"
              className="form-control form-control-d"
              onChange={(event) => formChange(event)}
            />
            {showPassword1 && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword1(false)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {showPassword2 && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword2(false)} style={{ position: "absolute", top: 12, left: 420 }} />}
            {!showPassword1 && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword1(true)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {!showPassword2 && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword2(true)} style={{ position: "absolute", top: 12, left: 420 }} />}
          </div>
          <div class="col">
            <Input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              id="passwordConfirm"
              className="form-control form-control-d"
              onChange={(event) => formChange(event)}
            />
          </div>
        </div>


        <div class="mb-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Checkbox
            className="form-check-input"
            id="termsOfService"
            onChange={(event) => formChange(event)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault"
            style={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "500",
              paddingLeft: 15,
            }}
          >
            I agree to the terms and conditions of the Service
          </label>
        </div>


        <div className="mb-4 mt-4" style={{ padding: "0px 20px 0px 20px" }}>
          <SubmitBtn
            onClick={() => validateForm()}
            className="form-control text-uppercase"
          >
            Submit
          </SubmitBtn>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={() => props.onRegisterHide(0)}
        >
          <LinkH4 className="mt-2"
          >
            Cancel
          </LinkH4>
        </div>

      </div>
    </RegisterBody>
  )
}