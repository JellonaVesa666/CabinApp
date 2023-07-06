import React, { useState } from "react";
import { RegisterBody, LinkH4, SubmitBtn, CloseBtn, Checkbox, Input, Select } from "../styles/RegisterStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function RegisterComponent(props) {

  const [showPassword1, setHidePassword1] = useState(false);
  const [showPassword2, setHidePassword2] = useState(false);

  const [data, setFormData] = useState();

  const formChange = (event) => {
    setFormData({ ...data, [event.target.id]: event.target.value });
  };

  const validateForm = () => {
    console.log(data);

    //Name
    /*     if (!fields["registerFullname"]) {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        } */

    /*     if (typeof fields["name"] !== "undefined") {
          if (!fields["name"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
          }
        }
    
        //Email
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
        if (typeof fields["email"] !== "undefined") {
          let lastAtPos = fields["email"].lastIndexOf("@");
          let lastDotPos = fields["email"].lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              fields["email"].indexOf("@@") == -1 &&
              lastDotPos > 2 &&
              fields["email"].length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }
    
        this.setState({ errors: errors });
        return formIsValid; */
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
        <div className="row gx-3">
          <div className="col-3">
            <Input
              type="tel"
              placeholder="+358"
              id="countryCode"
              onChange={(event) => formChange(event)}
              className="form-control form-control-d"
            />
          </div>
          <div className="col-9">
            <Input
              type="tel"
              placeholder=""
              id="phone"
              onChange={(event) => formChange(event)}
              className="form-control form-control-d"
            />
          </div>
        </div>

        <div className="row gx-3 mt-3 px-2">
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
          <div className="col-4">
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
          className="form-select"
          aria-label="Default select example"
          id="role"
          onChange={(event) => formChange(event)}
        >
          <option selected>Role</option>
          <option value="1">Admin</option>
          <option value="2">Manager</option>
          <option value="3">Supervisor</option>
          <option value="3">Maid</option>
        </Select>

        <div className="row gx-3 mt-3 mb-2">
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
        <div className="row gx-3 mb-5">
          <div className="col" style={{ position: "relative" }}>
            <Input
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              // id="typeEmailX"
              id="password"
              className="form-control form-control-d"
              onChange={(event) => formChange(event)}
            />
            {showPassword1 && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword1(false)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {showPassword2 && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword2(false)} style={{ position: "absolute", top: 12, left: 420 }} />}
            {!showPassword1 && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword1(true)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {!showPassword2 && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword2(true)} style={{ position: "absolute", top: 12, left: 420 }} />}
          </div>
          <div className="col">
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
            defaultValuevalue="false"
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