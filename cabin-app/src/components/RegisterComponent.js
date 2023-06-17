import React, { useState } from "react";
import { ENDPOINTS, createAPIEndpoint } from "../api";
import { RegisterBody, LinkH4, SubmitBtn, CloseBtn, Checkbox, Input, InputTitle, Select, ErrorMessage, TermsContainer } from "../styles/RegisterStyle";
import { registerDO, registerDTO } from "../DTO/RegisterDTO";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function RegisterComponent(props) {

  const [showPassword1, setHidePassword1] = useState(false);
  const [showPassword2, setHidePassword2] = useState(false);

  const [data, setFormData] = useState(registerDO);

  const register = async () => {

    let isValid = validateForm();

    if (isValid) {

      // Create post data for request
      registerDTO.fullName = data.fullName.value;
      registerDTO.username = data.username.value;
      registerDTO.email = data.email.value;
      registerDTO.emailConfirm = data.emailConfirm.value;
      registerDTO.password = data.password.value;
      registerDTO.passwordConfirm = data.passwordConfirm.value;
      registerDTO.phone = data.phone.value;
      registerDTO.address = data.address.value;
      registerDTO.postalCode = data.postalCode.value;
      registerDTO.role = data.role.value;
      registerDTO.createdDate = Date.now;
      registerDTO.modifiedDate = Date.now;
      registerDTO.isActive = 1;


      createAPIEndpoint(ENDPOINTS.register)
        .post(registerDTO)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }

  const formChange = (event) => {
    const targetValue = event.target.value === "on" ? event.target.checked : event.target.value;

    setFormData({
      ...data,
      [event.target.id]: { ...data[event.target.id], value: targetValue },
    });
  }

  const SetErrors = (property, errorMsg) => {
    setFormData(prevData => ({
      ...prevData, [property]: { ...prevData[property], errors: errorMsg }
    }));
  }

  const validateForm = () => {
    // Reset errors before running check.
    Object.keys(data).forEach(key => {
      if ([key].errors !== "") {
        setFormData(prevData => ({
          ...prevData, [key]: { ...prevData[key], errors: "" }
        }));
      }
    });
    //Name
    if (data.fullName.value.length === 0) {
      SetErrors("fullName", "Cannot be empty");
      return false;
    }
    else {
      const fullNameRegex = /^\w+\s\w+$/gm;

      if (!fullNameRegex.test(data.fullName.value)) {
        SetErrors("fullName", "Only letters are accepted");
        return false;
      }
    }
    //Username
    if (data.username.value.length === 0) {
      SetErrors("username", "Cannot be empty");
      return false;
    }
    else {
      if (!data.username.value.match(/^[a-zA-Z]+$/)) {
        SetErrors("username", "Only letters are accepted");
        return false;
      }
    }
    //Email
    if (data.email.value.length === 0) {
      SetErrors("email", "Cannot be empty");
      return false;
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
        SetErrors("email", "Email is not valid");
        return false;
      }
    }
    if (data.emailConfirm.value.length === 0) {
      SetErrors("emailConfirm", "Cannot be empty");
      return false;
    }
    else {
      if (data.email.value !== data.emailConfirm.value) {
        SetErrors("emailConfirm", "Emails do not match");
        return false;
      }
    }
    // Phone
    if (data.countryCode.value.length === 0 || data.phone.value.length === 0) {
      SetErrors("phone", "Cannot be empty");
      return false;
    }
    else {
      const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      if (!phoneRegex.test(data.countryCode.value + data.phone.value)) {
        SetErrors("phone", "Invalid phone number");
        return false;
      }
    }
    // Address
    if (data.address.value.length === 0) {
      SetErrors("address", "Cannot be empty");
      return false;
    }
    else {
      const adressRegex = /^\s*\S+(?:\s+\S+)/;
      if (!adressRegex.test(data.address.value)) {
        SetErrors("address", "Invalid Address");
        return false;
      }
    }
    // Postal Code
    if (data.postalCode.value.length === 0) {
      SetErrors("postalCode", "Cannot be empty");
      return false;
    }
    else {
      const postalRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      if (!postalRegex.test(data.postalCode.value)) {
        SetErrors("postalCode", "Invalid postal code");
        return false;
      }
    }
    // Role
    if (data.role.value === 0) {
      SetErrors("role", "Role is required");
      return false;
    }
    // Password
    if (data.password.value.length === 0) {
      SetErrors("password", "Cannot be empty");
      return false;
    }
    else {
      // At least one upper case English letter, (?=.*?[A-Z])
      // At least one lower case English letter, (?=.*?[a-z])
      // At least one digit, (?=.*?[0-9])
      // At least one special character, (?=.*?[#?!@$%^&*-])
      // Minimum eight in length .{8,} (with the anchors)
      const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!passwordRegex.test(data.password.value)) {
        SetErrors("password", "Password do not meet requirements");
        return false;
      }
    }
    if (data.passwordConfirm.value.length === 0) {
      SetErrors("passwordConfirm", "Cannot be empty");
      return false;
    }
    else {
      if (data.password.value !== data.passwordConfirm.value) {
        SetErrors("passwordConfirm", "Passwords do not match");
        return false;
      }
    }
    // Terms of Service
    if (data.termsOfService.value === false) {
      SetErrors("termsOfService", "Please agree the terms of Service");
      return false;
    }

    return true;
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
        {/* <ErrorMessage className={data.fullName.errors.length > 0 ? "show1" : ""}>{data.fullName.errors}</ErrorMessage> */}
        <InputTitle className="px-2">Username</InputTitle>
        <Input
          className={data.username.errors.length > 0 ? "invalid" : ""}
          type="text"
          placeholder="Username"
          id="username"
          onChange={(event) => formChange(event)}
        />
        {/* <ErrorMessage className={data.username.errors.length > 0 ? "show1" : ""}>{data.username.errors}</ErrorMessage> */}
        <InputTitle className="px-2">Email</InputTitle>
        <Input
          className={data.email.errors.length > 0 ? "invalid" : ""}
          type="email"
          placeholder="Email"
          id="email"
          onChange={(event) => formChange(event)}
        />
        {/* <ErrorMessage className={data.email.errors.length > 0 ? "show1" : ""}>{data.email.errors}</ErrorMessage> */}
        <InputTitle className="px-2">Confirm email</InputTitle>
        <Input
          className={data.emailConfirm.errors.length > 0 ? "invalid" : ""}
          type="email"
          placeholder="Confirm email"
          id="emailConfirm"
          onChange={(event) => formChange(event)}
        />
        {/* <ErrorMessage className={data.emailConfirm.errors.length > 0 ? "show1" : ""}>{data.emailConfirm.errors}</ErrorMessage> */}
        <div className="row gx-3">
          <InputTitle className="col px-3">Password</InputTitle>
          <InputTitle className="col">Confirm password</InputTitle>
        </div>
        <div className="row gx-3">
          <div className="col" style={{ position: "relative" }}>
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
          <div className="col">
            <Input
              className={data.passwordConfirm.errors.length > 0 ? "invalid" : ""}
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              id="passwordConfirm"
              onChange={(event) => formChange(event)}
            />
          </div>
        </div>
        <div className="row gx-3">
          {/* <ErrorMessage className={data.password.errors.length > 0 ? "show1 col" : "col"}>{data.password.errors}</ErrorMessage> */}
          {/* <ErrorMessage className={data.passwordConfirm.errors.length > 0 ? "show1 col" : "col"}>{data.passwordConfirm.errors}</ErrorMessage> */}
        </div>
        <div className="row">
          <div className="col-3">
            <InputTitle className="px-2">Phone</InputTitle>
          </div>
          <div className="col-9" />
        </div>
        <div className="row">
          <div className="col-3">
            <Input
              className={data.phone.errors.length > 0 ? "invalid" : ""}
              type="tel"
              defaultValue="+358"
              id="countryCode"
              onChange={(event) => formChange(event)}
            />
          </div>
          <div className="col-9">
            <Input
              className={data.phone.errors.length > 0 ? "invalid" : ""}
              type="tel"
              placeholder=""
              id="phone"
              onChange={(event) => formChange(event)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3" />
          <div className="col-9">
            {/* <ErrorMessage className={data.phone.errors.length > 0 ? "show1" : ""}>{data.phone.errors}</ErrorMessage> */}
          </div>
        </div>
        <div className="row px-2">
          <InputTitle className="col-8">Address</InputTitle>
          <InputTitle className="col-4 ps-3">Postal Code</InputTitle>
        </div>
        <div className="row gx-3">
          <div className="col-8">
            <Input
              className={data.address.errors.length > 0 ? "invalid" : ""}
              type="text"
              placeholder="Address"
              id="address"
              onChange={(event) => formChange(event)}
            />
          </div>
          <div className="col-4">
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
        <div className="row gx-3 ">
          {/* <ErrorMessage className={data.address.errors.length > 0 ? "show1 col-8" : "col-8"}>{data.address.errors}</ErrorMessage> */}
          {/* <ErrorMessage className={data.postalCode.errors.length > 0 ? "show2 col-4" : "col-4"}>{data.postalCode.errors}</ErrorMessage> */}
        </div>

        <InputTitle className="px-2">Role</InputTitle>
        <Select
          className={data.role.errors.length > 0 ? "invalid form-select" : " form-select"}
          aria-label="Default select example"
          id="role"
          defaultValue="Role"
          onChange={(event) => formChange(event)}
        >
          <option value="Role" disabled>Role</option>
          <option value="1">Admin</option>
          <option value="2">Manager</option>
          <option value="3">Supervisor</option>
          <option value="3">Worker</option>
        </Select>
        {/* <ErrorMessage className={data.role.errors.length > 0 ? "show1 col-4" : "col-4"}>{data.role.errors}</ErrorMessage> */}
        <TermsContainer className={data.termsOfService.errors.length > 0 ? "invalid mb-2 mt-4" : "mb-2 mt-4"}>
          <Checkbox
            className="form-check-input my-auto"
            id="termsOfService"
            onChange={(event) => formChange(event)}
          />
          <label className="form-check-label my-auto" htmlFor="flexCheckDefault"
            style={{
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "500",
              paddingLeft: 15,
            }}
          >
            I agree to the terms and conditions of the Service
          </label>
        </TermsContainer>
        {/* <ErrorMessage className={data.termsOfService.errors.length > 0 ? "show1 col-4" : "col-4"}>{data.termsOfService.errors}</ErrorMessage> */}
        <div className="mb-4 mt-4" style={{ padding: "0px 20px 0px 20px" }}>
          <SubmitBtn
            onClick={() => register()}
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