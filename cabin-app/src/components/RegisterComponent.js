import React, { useState, createRef } from "react";
import { ENDPOINTS, createAPIEndpoint } from "../api";
import { ChangeState } from "../helpers/HelperFunctions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TextField, OptionSelect, CheckBox } from "./InputComponents";
import { CardHeader } from "../styles/SearchCardStyle";
import { RegisterBody, CloseBtn, SubmitBtn, LinkH4 } from "../styles/RegisterStyle";
import { registerDO, registerDTO } from "../DTO/RegisterDTO";


export default function RegisterComponent(props) {

  const [showPassword1, setHidePassword1] = useState(false);
  const [showPassword2, setHidePassword2] = useState(false);

  const [formData, setFormData] = useState(registerDO);
  // Initialize refrences
  const ref = {};
  Object.keys(formData).map(key => {
    ref[key] = createRef();
  });

  const register = async () => {
    let isValid = validateForm();

    if (isValid) {
      // Create post formData for request
      registerDTO.fullName = formData.fullName.value;
      registerDTO.username = formData.username.value;
      registerDTO.email = formData.email.value;
      registerDTO.emailConfirm = formData.emailConfirm.value;
      registerDTO.password = formData.password.value;
      registerDTO.passwordConfirm = formData.passwordConfirm.value;
      registerDTO.phone = formData.phone.value;
      registerDTO.address = formData.address.value;
      registerDTO.postalCode = formData.postalCode.value;
      registerDTO.role = formData.role.value;
      registerDTO.createdDate = Date.now;
      registerDTO.modifiedDate = Date.now;
      registerDTO.isActive = 1;


      createAPIEndpoint(ENDPOINTS.register)
        .post(registerDTO)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }

  const SetErrors = (property, errorMsg) => {
    setFormData(prevData => ({
      ...prevData, [property]: { ...prevData[property], errors: errorMsg }
    }));
  }



/*   export const ChangeState = (State, initValues, newValue, property, index1, index2) => {
    if (index2 === null || index2 === undefined)
      State( formData => ({{
        ...initValues,
        [index1]: { ...initValues[index1], [property]: newValue },
      });
    else
      State({
        ...initValues,
        [index1]: {
          ...initValues[index1],
          [index2]: {
            ...initValues[index1][index2],
            [property]: !newValue
          },
        },
      });
    console.log(initValues);
  }
 */


  const validateForm = () => {


    Object.keys(formData).map(key => {
      //console.log(ref[key].current.value);
      ChangeState(setFormData, formData, ref[key].current.value, "value", key);
    });

    console.log(ref);

    let isValid = true;

    // Reset errors before running check.
    /*     Object.keys(formData).forEach(key => {
          if ([key].errors !== "") {
            setFormData(prevData => ({
              ...prevData, [key]: { ...prevData[key], errors: "" }
            }));
          }
        }); */

    //Name
    /*     if (formData.fullName.value.length === 0) {
          SetErrors("fullName", "Cannot be empty");
          isValid = false;
        }
        else {
          const fullNameRegex = /^\w+\s\w+$/gm;
    
          if (!fullNameRegex.test(formData.fullName.value)) {
            SetErrors("fullName", "Only letters are accepted");
            isValid = false;
          }
        } */
    /* //Username
    if (formData.username.value.length === 0) {
      SetErrors("username", "Cannot be empty");
      isValid = false;
    }
    else {
      if (!formData.username.value.match(/^[a-zA-Z]+$/)) {
        SetErrors("username", "Only letters are accepted");
        isValid = false;
      }
    }
    //Email
    if (formData.email.value.length === 0) {
      SetErrors("email", "Cannot be empty");
      isValid = false;
    }
    else {
      let lastAtPos = formData.email.value.lastIndexOf("@");
      let lastDotPos = formData.email.value.lastIndexOf(".");
  
      if (!(lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        formData.email.value.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        formData.email.value.length - lastDotPos > 2
      )) {
        SetErrors("email", "Email is not valid");
        isValid = false;
      }
    }
    if (formData.emailConfirm.value.length === 0) {
      SetErrors("emailConfirm", "Cannot be empty");
      isValid = false;
    }
    else {
      if (formData.email.value !== formData.emailConfirm.value) {
        SetErrors("emailConfirm", "Emails do not match");
        isValid = false;
      }
    }
    // Phone
    if (formData.countryCode.value.length === 0 || formData.phone.value.length === 0) {
      SetErrors("phone", "Cannot be empty");
      isValid = false;
    }
    else {
      const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      if (!phoneRegex.test(formData.countryCode.value + formData.phone.value)) {
        SetErrors("phone", "Invalid phone number");
        isValid = false;
      }
    }
    // Address
    if (formData.address.value.length === 0) {
      SetErrors("address", "Cannot be empty");
      isValid = false;
    }
    else {
      const adressRegex = /^\s*\S+(?:\s+\S+)/;
      if (!adressRegex.test(formData.address.value)) {
        SetErrors("address", "Invalid Address");
        isValid = false;
      }
    }
    // Postal Code
    if (formData.postalCode.value.length === 0) {
      SetErrors("postalCode", "Cannot be empty");
      isValid = false;
    }
    else {
      const postalRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      if (!postalRegex.test(formData.postalCode.value)) {
        SetErrors("postalCode", "Invalid postal code");
        isValid = false;
      }
    }
    // Role
    if (formData.role.value === 0) {
      SetErrors("role", "Role is required");
      isValid = false;
    }
    // Password
    if (formData.password.value.length === 0) {
      SetErrors("password", "Cannot be empty");
      isValid = false;
    }
    else {
      // At least one upper case English letter, (?=.*?[A-Z])
      // At least one lower case English letter, (?=.*?[a-z])
      // At least one digit, (?=.*?[0-9])
      // At least one special character, (?=.*?[#?!@$%^&*-])
      // Minimum eight in length .{8,} (with the anchors)
      const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!passwordRegex.test(formData.password.value)) {
        SetErrors("password", "Password do not meet requirements");
        isValid = false;
      }
    }
    if (formData.passwordConfirm.value.length === 0) {
      SetErrors("passwordConfirm", "Cannot be empty");
      isValid = false;
    }
    else {
      if (formData.password.value !== formData.passwordConfirm.value) {
        SetErrors("passwordConfirm", "Passwords do not match");
        isValid = false;
      }
    }
    // Terms of Service
    if (formData.termsOfService.value === false) {
      SetErrors("termsOfService", "Please agree the terms of Service");
      isValid = false;
    } */
    /* 
        if (!isValid)
          return false;
        else
          return true; */
  }

  console.log(formData);

  const Card = (props) => {
    var header = props.filter.split(/(?=[A-Z])(?=[A-Z])/);
    if (formData[props.filter].type === "text" || formData[props.filter].type === "email") {
      if (props.filter === "address") {
        return (
          <div style={{ width: "70%", display: "inline-block", padding: "4px", float: "left" }}>
            <CardHeader
              paddingleft={"2%"}
              size={0.95}
              weight={400}
            >
              {header[0]} {header[1]} {header[2]}
            </CardHeader>
            <TextField
              width={"100%"}
              height={"40px"}
              data={formData}
              i={props.filter}
              ref={ref[props.filter]}
            />
          </div>
        )
      }
      else if (props.filter === "postalCode") {
        return (
          <div style={{ width: "30%", display: "inline-block", padding: "4px", float: "left" }}>
            <CardHeader
              paddingleft={"2%"}
              size={0.95}
              weight={400}
            >
              {header[0]} {header[1]} {header[2]}
            </CardHeader>
            <TextField
              width={"100%"}
              height={"40px"}
              data={formData}
              i={props.filter}
              ref={ref[props.filter]}
            />
          </div>
        )
      }
      else {
        return (
          <>
            <CardHeader
              paddingleft={"2%"}
              size={0.95}
              weight={400}
            >
              {header[0]} {header[1]} {header[2]}
            </CardHeader>
            <TextField
              width={"100%"}
              height={"40px"}
              data={formData}
              i={props.filter}
              ref={ref[props.filter]}
            />
          </>
        )
      }
    }
    if (formData[props.filter].type === "option") {
      return (
        <>
          <CardHeader
            paddingleft={"2%"}
            size={0.95}
            weight={400}
          >
            {formData[props.filter].name ? formData[props.filter].name : props.filter}
          </CardHeader>
          <OptionSelect
            width={"100%"}
            height={"40px"}
            radius={"40px"}
            padding={"0px 20px 0px 20px"}
            data={formData}
            i={props.filter}
            ref={ref[props.filter]}
          />
        </>
      )
    }
    if (formData[props.filter].type === "password") {
      return (
        <div style={{ width: "50%", display: "inline-block", padding: "4px", float: "left" }}>
          <CardHeader
            paddingleft={"2%"}
            size={0.95}
            weight={400}
          >
            {header[0]} {header[1]} {header[2]}
          </CardHeader>
          <TextField
            width={"100%"}
            height={"40px"}
            data={formData}
            i={props.filter}
            ref={ref[props.filter]}
          />
        </div>
      )
    }
    if (formData[props.filter].type === "tel") {
      if (props.filter === "countryCode") {
        return (
          <div style={{ width: "20%", display: "inline-block", padding: "4px", float: "left" }}>
            <CardHeader
              paddingleft={"2%"}
              size={0.95}
              weight={400}
            >
              Phone
            </CardHeader>
            <TextField
              width={"100%"}
              height={"40px"}
              data={formData}
              i={props.filter}
              ref={ref[props.filter]}
            />
          </div>
        )
      }
      else if (props.filter === "phone") {
        return (
          <div style={{ width: "80%", display: "inline-block", padding: "4px", float: "left" }}>
            <CardHeader
              paddingleft={"2%"}
              size={0.95}
              weight={400}
              style={{ opacity: 0 }}
            >
              {header[0]} {header[1]} {header[2]}
            </CardHeader>
            <TextField
              width={"100%"}
              height={"40px"}
              data={formData}
              i={props.filter}
              ref={ref[props.filter]}
            />
          </div>
        )
      }
    }
    if (formData[props.filter].type === "checkbox") {
      return (
        <CheckBox
          data={formData}
          i={props.filter}
          ref={ref[props.filter]}
        />
      )
    }
  }

  return (
    <RegisterBody show={props.show} className="col-12 col-md-8 col-lg-6 col-xl-5 shadow-lg">
      <div className="p-5" style={{ position: "relative" }}>
        <CloseBtn onClick={() => props.onRegisterHide(0)}>
          <p className="m-auto p-auto" style={{ textTransform: "uppercase" }}>
            close
          </p>
        </CloseBtn>
        <h4 className="mb-4 mt-2 text-center"
          style={{
            fontWeight: "300",
          }}
        >
          Register
        </h4>
        <div className="mb-4"
          style={{
            background: "grey", height: "2px", width: "100%"
          }}
        />
        {Object.keys(formData).map((filter, index) => <Card key={index} filter={filter} />)}
        <div style={{ padding: "0px 20px 0px 20px" }}>
          <SubmitBtn
            onClick={validateForm}
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
          <LinkH4 className="mt-4"
          >
            Cancel
          </LinkH4>
        </div>
      </div>
    </RegisterBody >
  )
}