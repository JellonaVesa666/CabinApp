import React, { useState } from "react";
import { RegisterBody, LinkH4, SubmitBtn, CloseBtn, Checkbox, Input, InputTitle, Select, ErrorMessage } from "../styles/RegisterStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function RegisterComponent(props) {

  const [showPassword1, setHidePassword1] = useState(false);
  const [showPassword2, setHidePassword2] = useState(false);

  const initialData = {
    address: {
      value: "",
      errors: "",
    },
    countryCode: {
      value: "+358",
      errors: "",
    },
    email: {
      value: "",
      errors: "",
    },
    emailConfirm: {
      value: "",
      errors: "",
    },
    fullName: {
      value: "",
      errors: "",
    },
    password: {
      value: "",
      errors: "",
    },
    passwordConfirm: {
      value: "",
      errors: "",
    },
    phone: {
      value: "",
      errors: "",
    },
    postalCode: {
      value: "",
      errors: "",
    },
    role: {
      value: 0,
      errors: "",
    },
    termsOfService: {
      value: "",
      errors: "",
    },
    username: {
      value: "",
      errors: "",
    },
  };

  const [data, setFormData] = useState(initialData);

  const formChange = (event) => {
    setFormData({
      ...data,
      [event.target.id]: { ...data[event.target.id], value: event.target.value },
    });
  }

  const SetErrors = (property, errorMsg) => {
    setFormData(prevData => ({
      ...prevData, [property]: { ...prevData[property], errors: errorMsg }
    }));
  }


  const validateForm = () => {
    console.log(data);
    var formIsValid = true;

    Object.keys(data).forEach(key => {
      if ([key].errors !== "") {
        setFormData(prevData => ({
          ...prevData, [key]: { ...prevData[key], errors: "" }
        }));
      }
    });

    //Name
    if (data.fullName.value.length === 0) {
      formIsValid = false;
      SetErrors("fullName", "Cannot be empty");
    }
    else {
      if (!data.fullName.value.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        SetErrors("fullName", "Only letters are accepted");
      }
    }

    //Username
    if (data.username.value.length === 0) {
      formIsValid = false;
      SetErrors("username", "Cannot be empty");
    }
    else {
      if (!data.username.value.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        SetErrors("username", "Only letters are accepted");
      }
    }

    //Email
    if (data.email.value.length === 0) {
      formIsValid = false;
      SetErrors("email", "Cannot be empty");
      //errors["email"] = "Cannot be empty";
    }
    else {
      let lastAtPos = data.email.value.lastIndexOf("@");
      let lastDotPos = data.email.value.lastIndexOf(".");

      if (!(lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        data.email.value.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        data.email.value.length - lastDotPos > 2
      )) {
        formIsValid = false;
        SetErrors("email", "Email is not valid");
        //data.email = "Email is not valid";
      }
    }
    if (data.emailConfirm.value.length === 0) {
      formIsValid = false;
      SetErrors("emailConfirm", "Cannot be empty");
    }
    else {
      if (data.email.value !== data.emailConfirm.value) {
        SetErrors("emailConfirm", "Emails do not match");
      }
    }

    // Phone
    if (data.countryCode.value.length === 0 || data.phone.value.length === 0) {
      formIsValid = false;
      SetErrors("phone", "Cannot be empty");
    }
    else {
      const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      if (!phoneRegex.test(data.countryCode.value + data.phone.value)) {
        SetErrors("phone", "Invalid phone number");
      }
    }

    // Address
    if (data.address.value.length === 0) {
      formIsValid = false;
      SetErrors("address", "Cannot be empty");
    }
    else {
      const adressRegex = /^\s*\S+(?:\s+\S+)/;
      if (!adressRegex.test(data.address.value)) {
        formIsValid = false;
        SetErrors("address", "Invalid Address");
      }
    }

    // Postal Code
    if (data.postalCode.value.length === 0) {
      formIsValid = false;
      SetErrors("postalCode", "Cannot be empty");
    }
    else {
      const postalRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      if (!postalRegex.test(data.postalCode.value)) {
        formIsValid = false;
        SetErrors("postalCode", "Invalid postal code");
      }
    }

    // Role
    if (data.role.value === 0) {
      SetErrors("role", "Role is required");
      formIsValid = false;
    }

    // Password
    if (data.password.value.length === 0) {
      formIsValid = false;
      SetErrors("password", "Cannot be empty");
    }
    else {
      // At least one upper case English letter, (?=.*?[A-Z])
      // At least one lower case English letter, (?=.*?[a-z])
      // At least one digit, (?=.*?[0-9])
      // At least one special character, (?=.*?[#?!@$%^&*-])
      // Minimum eight in length .{8,} (with the anchors)
      const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!passwordRegex.test(data.password.value)) {
        formIsValid = false;
        SetErrors("password", "Password do not meet requirements");
      }
    }
    if (data.passwordConfirm.value.length === 0) {
      formIsValid = false;
      SetErrors("passwordConfirm", "Cannot be empty");
    }
    else {
      if (data.password.value !== data.passwordConfirm.value) {
        SetErrors("passwordConfirm", "Passwords do not match");
      }
    }

    // Terms of Service
    if (!data.termsOfService.value) {
      formIsValid = false;
      SetErrors("termsOfService", "Please agree the terms of Service");
    }

    console.log(data);
  }

  return (
    <RegisterBody show={props.show} className="col-12 col-md-8 col-lg-6 col-xl-5 shadow-lg">
      <div className="p-5" style={{ position: "relative" }}>
        <CloseBtn onClick={() => props.onRegisterHide(0)}>
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
          style={{ fontWeight: "300", }}
        >
          Register
        </h4>
        <div className="mb-4"
          style={{
            background: "grey", height: "2px", width: "100%"
          }}
        />
        <InputTitle className="px-2">Full name</InputTitle>
        <Input
          className={data.fullName.errors.length > 0 ? "invalid" : ""}
          type="text"
          placeholder="Fullname"
          id="fullName"
          onChange={(event) => formChange(event)}
        />
        <ErrorMessage className={data.fullName.errors.length > 0 ? "show1" : ""}>{data.fullName.errors}</ErrorMessage>
        <InputTitle className="px-2">Username</InputTitle>
        <Input
          className={data.username.errors.length > 0 ? "invalid" : ""}
          type="text"
          placeholder="Username"
          id="username"
          onChange={(event) => formChange(event)}
        />
        <ErrorMessage className={data.username.errors.length > 0 ? "show1" : ""}>{data.username.errors}</ErrorMessage>
        <InputTitle className="px-2">Email</InputTitle>
        <Input
          className={data.email.errors.length > 0 ? "invalid" : ""}
          type="email"
          placeholder="Email"
          id="email"
          onChange={(event) => formChange(event)}
        />
        <ErrorMessage className={data.email.errors.length > 0 ? "show1" : ""}>{data.email.errors}</ErrorMessage>
        <InputTitle className="px-2">Confirm email</InputTitle>
        <Input
          className={data.emailConfirm.errors.length > 0 ? "invalid" : ""}
          type="email"
          placeholder="Confirm email"
          id="emailConfirm"
          onChange={(event) => formChange(event)}
        />
        <ErrorMessage className={data.emailConfirm.errors.length > 0 ? "show1" : ""}>{data.emailConfirm.errors}</ErrorMessage>
        <div class="row">
          <div class="col-3" />
          <div class="col-9">
            <InputTitle className="px-2">Phone</InputTitle>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <Input
              className={data.phone.errors.length > 0 ? "invalid" : ""}
              type="tel"
              defaultValue="+358"
              id="countryCode"
              onChange={(event) => formChange(event)}
            />
          </div>
          <div class="col-9">
            <Input
              className={data.phone.errors.length > 0 ? "invalid" : ""}
              type="tel"
              placeholder=""
              id="phone"
              onChange={(event) => formChange(event)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3" />
          <div class="col-9">
            <ErrorMessage className={data.phone.errors.length > 0 ? "show1" : ""}>{data.phone.errors}</ErrorMessage>
          </div>
        </div>
        <div class="row px-2">
          <InputTitle className="col-8">Address</InputTitle>
          <InputTitle className="col-4 ps-3">Postal Code</InputTitle>
        </div>
        <div class="row gx-3">
          <div class="col-8">
            <Input
              className={data.address.errors.length > 0 ? "invalid" : ""}
              type="text"
              placeholder="Address"
              id="address"
              onChange={(event) => formChange(event)}
            />
          </div>
          <div class="col-4">
            <Input
              className={data.postalCode.errors.length > 0 ? "invalid" : ""}
              type="text"
              placeholder="Postal Code"
              id="postalCode"
              pattern="[0-9]{5}"
              onChange={(event) => formChange(event)}
            />
          </div>
        </div>
        <div class="row gx-3 ">
          <ErrorMessage className={data.address.errors.length > 0 ? "show1 col-8" : "col-8"}>{data.address.errors}</ErrorMessage>
          <ErrorMessage className={data.postalCode.errors.length > 0 ? "show2 col-4" : "col-4"}>{data.postalCode.errors}</ErrorMessage>
        </div>

        <InputTitle className="mt-3 px-2">Role</InputTitle>
        <Select
          className={data.role.errors.length > 0 ? "invalid" : ""}
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
        <ErrorMessage className={data.role.errors.length > 0 ? "show1 col-4" : "col-4"}>{data.role.errors}</ErrorMessage>
        <div class="row gx-3">
          <InputTitle className="col px-3">Password</InputTitle>
          <InputTitle className="col">Confirm password</InputTitle>
        </div>
        <div class="row gx-3">
          <div class="col" style={{ position: "relative" }}>
            <Input
              className={data.password.errors.length > 0 ? "invalid" : ""}
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              id="password"
              onChange={(event) => formChange(event)}
            />
            {showPassword1 && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword1(false)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {showPassword2 && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword2(false)} style={{ position: "absolute", top: 12, left: 420 }} />}
            {!showPassword1 && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword1(true)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {!showPassword2 && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword2(true)} style={{ position: "absolute", top: 12, left: 420 }} />}
          </div>
          <div class="col">
            <Input
              className={data.passwordConfirm.errors.length > 0 ? "invalid" : ""}
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              id="passwordConfirm"
              onChange={(event) => formChange(event)}
            />
          </div>
        </div>
        <div class="row gx-3 mb-5">
          <ErrorMessage className={data.password.errors.length > 0 ? "show1 col" : "col"}>{data.password.errors}</ErrorMessage>
          <ErrorMessage className={data.passwordConfirm.errors.length > 0 ? "show1 col" : "col"}>{data.passwordConfirm.errors}</ErrorMessage>
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
        <ErrorMessage className={data.termsOfService.errors.length > 0 ? "show1 col-4" : "col-4"}>{data.termsOfService.errors}</ErrorMessage>

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