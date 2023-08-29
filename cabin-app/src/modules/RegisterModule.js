/* React */
import React, { useState } from "react";
/* API */
import { ENDPOINTS, createAPIEndpoint } from "../api";
/* Redux */
import { useSelector } from "react-redux";
/* Helpers */
import { ChangeState } from "../helpers/HelperFunctions";
/* Modules */
import { CheckBox, Option, Password } from "./InputModules";
/* Styles */
import { colors } from "../styles/Colors";
import { InputStyle } from "../styles/InputStyle";
/* Data */
import { registerDO, registerDTO } from "../DTO/RegisterDTO";
import { LoadingSpinner } from "../styles/ModalStyle";
/* Images */
import logoDark from "../images/logo_Dark.png"
import iconSpinner from "../images/icon_spinner.png";
import iconChecked from "../images/icon_checked.png";
import iconRestricted from "../images/icon_restricted.png";

export const RegisterModule = (props) => {
  const language = useSelector(state => state.session.language);
  const [formData, setFormData] = useState(registerDO);
  const [isLoading, setIsLoading] = useState("");

  const Register = async () => {

    setIsLoading("loading");

    // Create post formData for request
    registerDTO.fullName = formData.fullName.value;
    registerDTO.username = formData.username.value;
    registerDTO.email = formData.email.value;
    registerDTO.password = formData.password.value;
    registerDTO.phone = formData.phone[0].value + formData.phone[1].value;
    registerDTO.address = formData.address.value;
    registerDTO.postalcode = formData.postalCode.value;
    registerDTO.role = 1;
    registerDTO.companyform = formData.companyForm.value;
    registerDTO.companyname = formData.companyName.value;
    registerDTO.businessid = formData.businessID.value;
    registerDTO.createddate = new Date(Date.now()).toISOString();
    registerDTO.modifieddate = new Date(Date.now()).toISOString();
    registerDTO.isActive = 1;

    createAPIEndpoint(ENDPOINTS.register)
      .post(registerDTO)
      .then(async response => {
        console.log(response);
        setIsLoading("success");
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading("");
        props.SetModalState("");
      })
      .catch(async error => {
        console.log(error);
        setIsLoading("fail");
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading("");
      });
  }

  const ValidateForm = () => {
    //console.log(formData);
    let isValid = true;

    // Reset errors before running check.
    Object.keys(formData).forEach(key => {
      if ([key].errors !== "") {
        setFormData(prevData => ({
          ...prevData, [key]: { ...prevData[key], errors: "" }
        }));
      }
    });

    //Fullname
    if (formData.fullName.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "fullName");
      isValid = false;
    }
    else {
      const fullNameRegex = /^\w+\s\w+$/gm;
      if (!fullNameRegex.test(formData.fullName.value)) {
        ChangeState(setFormData, "Wrong format ! make sure to type whole name", "errors", "fullName");
        isValid = false;
      }
    }
    //Username
    if (formData.username.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "username");
      isValid = false;
    }
    else {
      const usernameRegex = /^[a-zA-Z]+$/;
      if (!usernameRegex.test(formData.username.value)) {
        ChangeState(setFormData, "Only letters are accepted", "errors", "username");
        isValid = false;
      }
    }
    //Email
    if (formData.email.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "email");
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
        ChangeState(setFormData, "Email is not valid", "errors", "email");
        isValid = false;
      }
    }
    if (formData.emailConfirm.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "emailConfirm");
      isValid = false;
    }
    else {
      if (formData.email.value !== formData.emailConfirm.value) {
        ChangeState(setFormData, "Emails do not match", "errors", "emailConfirm");
        isValid = false;
      }
    }
    // Phone
    if (formData.phone[0].value.length <= 3 || formData.phone[1].value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "phone");
      isValid = false;
    }
    else {
      const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
      if (!phoneRegex.test(`${formData.phone[0].value}${formData.phone[1].value}`)) {
        ChangeState(setFormData, "Invalid phone number", "errors", "phone");
        isValid = false;
      }
    }
    // Address
    if (formData.address.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "address");
      isValid = false;
    }
    else {
      const adressRegex = /^\s*\S+(?:\s+\S+)/;
      if (!adressRegex.test(formData.address.value)) {
        ChangeState(setFormData, "Invalid Address", "errors", "address");
        isValid = false;
      }
    }
    // Postal Code
    if (formData.postalCode.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "postalCode");
      isValid = false;
    }
    else {
      const postalRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      if (!postalRegex.test(formData.postalCode.value)) {
        ChangeState(setFormData, "Invalid postal code", "errors", "postalCode");
        isValid = false;
      }
    }
    // Company Form
    if (formData.companyForm.value === 0) {
      ChangeState(setFormData, "Company form is required", "errors", "companyForm");
      isValid = false;
    }
    // Password
    if (formData.password.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "password");
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
        ChangeState(setFormData, "Password does not meet requirements", "errors", "password");
        isValid = false;
      }
    }
    if (formData.passwordConfirm.value.length === 0) {
      ChangeState(setFormData, "Cannot be empty", "errors", "passwordConfirm")
      isValid = false;
    }
    else {
      if (formData.password.value !== formData.passwordConfirm.value) {
        ChangeState(setFormData, "Passwords do not match", "errors", "passwordConfirm");
        isValid = false;
      }
    }
    // Terms of Service
    if (formData.termsOfService.value === 0) {
      ChangeState(setFormData, "Please agree the terms of Service", "errors", "termsOfService");
      isValid = false;
    }
    // Company name 
    if (formData.companyName.value === "") {
      ChangeState(setFormData, "Cannot be empty", "errors", "companyName");
      isValid = false;
    }
    // Business ID 
    if (formData.businessID.value === "") {
      ChangeState(setFormData, "Cannot be empty", "errors", "businessID");
      isValid = false;
    }
    else {
      const businessIDRegex = /(^[0-9]{6,7})-([0-9])/;
      if (!businessIDRegex.test(formData.businessID.value)) {
        ChangeState(setFormData, "Business ID is not valid", "errors", "businessID");
        isValid = false;
      }
    }

    console.log(formData);
    if (isValid)
      Register();
  }

  const Form = Object.keys(formData).map(item => {
    return (
      <div
        key={item}
        className="row col-12 d-flex justify-content-center align-items-center m-0 my-1"
        style={{ height: "3vh" }}
      >
        <div
          className="col-4 d-flex justify-content-start align-items-center m-0 p-0"
          style={{ height: "100%", fontSize: "calc(12px + 0.1vw)" }}
        >
          {formData[item]?.info?.header?.[language]}
        </div>
        {formData[item].static &&
          (formData[item].type === "text" || formData[item].type === "email") &&
          formData[item].context === "field" &&
          !formData[item].modal &&
          <div
            className="col-8 d-flex justify-content-center align-items-center m-0 p-0"
            style={{ height: "100%" }}
          >
            < InputStyle
              type={formData[item].type}
              width={"100%"}
              height={"100%"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 1rem"}
              textAlign={"left"}
              i={item}
              data={formData}
              placeholder={formData[item]?.placeholder[language]}
              value={formData[item].value}
              onChange={(event) => ChangeState(setFormData, event.target.value, "value", item)}
            />
          </div>
        }
        {formData[item].static &&
          formData[item].type === "password" &&
          formData[item].context === "field" &&
          !formData[item].modal &&
          <div
            className="col-8 d-flex justify-content-center align-items-center h-100 m-0 p-0"
          >
            <Password
              width={"85%"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 1rem"}
              textAlign={"left"}
              data={formData}
              i={item}
              placeholder={formData[item]?.placeholder[language]}
              changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
            />
          </div>
        }
        {formData[item].static &&
          formData[item].type === "tel" &&
          formData[item].context === "field" &&
          !formData[item].modal &&
          <div
            className="col-8 d-flex justify-content-center align-items-center h-100 m-0 p-0"
          >
            < InputStyle
              type={formData[item].type}
              width={"30%"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 1rem"}
              textAlign={"left"}
              i={item}
              data={formData}
              placeholder={formData[item]?.placeholder[language]}
              value={formData[item][0].value}
              onChange={(event) => {
                const input = event.target.value;
                event.target.value = "+" + input.substring(1);
                ChangeState(setFormData, event.target.value.slice(0, 4), "value", item, 0)
              }}
            />
            < InputStyle
              type={formData[item].type}
              width={"70%"}
              height={"100%"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 1rem"}
              textAlign={"left"}
              i={item}
              data={formData}
              placeholder={formData[item]?.placeholder[language]}
              value={formData[item][1].value}
              onChange={(event) => ChangeState(setFormData, event.target.value, "value", item, 1)}
            />
          </div>
        }
        {formData[item].static &&
          formData[item].type === "option" &&
          formData[item].context === "dropdown" &&
          !formData[item].multiSelect &&
          !formData[item].modal &&
          <div
            className="col-8 h-100 d-flex justify-content-center align-items-center m-0 p-0"
          >
            <Option
              width={"100%"}
              height={"100%"}
              radius={"0px"}
              padding={"0rem 0rem 0rem 1rem"}
              i={item}
              data={formData}
              language={language}
              changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
            />
          </div>
        }
        {formData[item].static &&
          formData[item].type === "checkbox" &&
          !formData[item].multiSelect &&
          !formData[item].modal &&
          <div
            className="col-8 d-flex justify-content-center align-items-center m-0 p-0"
          >
            <CheckBox
              key={item}
              i={item}
              data={formData}
              language={language}
              changeState={setFormData}
            />
          </div>
        }
      </div>
    )
  })

  return (
    <div
      className="row d-flex justify-content-center align-items-center m-0 p-0"
    >
      <img
        alt=""
        src={logoDark}
        style={{ height: "10vh", width: "auto" }}
      />
      <p
        className="m-0 pt-4"
        style={{ textAlign: "center", fontSize: "calc(16px + 0.1vw)", fontWeight: 500 }}
      >
        Rekisteröi Lapland Camping Tunnus
      </p>
      {isLoading !== "" &&
        <div
          className="row col-12 d-flex justify-content-center align-items-center pt-4"
        >
          <LoadingSpinner
            animation={isLoading === "loading" ? "1.5s linear infinite" : ""}
          >
            <img
              alt=""
              src={isLoading === "loading" ? iconSpinner : isLoading === "fail" ? iconRestricted : iconChecked}
              style={{ height: "50%", width: "auto", zIndex: 0 }}
            />
          </LoadingSpinner>
          <div
            className="col-12 d-flex justify-content-center align-items-center"
          >
          </div>
        </div>
      }
      {isLoading === "" &&
        <div
          className="row col-12 d-flex justify-content-center align-items-center pt-4"
        >
          {Form}
          <div
            className="row col-12 d-flex justify-content-center align-items-center pt-4"
          >
            <input
              type="button"
              value="Register"
              className="col-4 d-flex justify-content-center align-items-center"
              style={{ height: "3.5vh", fontSize: "calc(12px + 0.1vw)", fontWeight: 500, border: "1px solid grey" }}
              onClick={() => ValidateForm()}
            />
            <div
              className="row col-12 justify-content-center align-items-center m-0 mt-4 p-0"
              style={{ backgroundColor: colors.navy, height: "3.5vh" }}
            >
              <div
                className="row col-6 justify-content-center align-items-center m-0 pe-5"
              >
                <a
                  href="https://example.com/faq.html"
                  rel="noreferrer"
                  style={{ fontSize: "calc(14px + 0.1vw)", textAlign: "right", color: "white" }}
                >
                  Käyttöehdot
                </a>
              </div>
              <div
                className="row col-6 justify-content-center align-items-center m-0 ps-5"
              >
                <a
                  href="https://example.com/faq.html"
                  rel="noreferrer"
                  style={{ fontSize: "calc(14px + 0.1vw)", textAlign: "left", color: "white" }}
                >
                  Tietosuoja
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}