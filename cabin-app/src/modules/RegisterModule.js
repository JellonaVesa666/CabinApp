import React, { useState } from "react";
import { ENDPOINTS, createAPIEndpoint } from "../api";

/* Redux */
import { useSelector } from "react-redux";

import { ChangeState } from "../helpers/HelperFunctions";
import { Input, OptionSelect, CheckBox, PasswordField } from "./InputModules";
import { CardHeader } from "../styles/SearchBarStyle";
import { RegisterBody, CloseBtn, SubmitBtn, LinkH4 } from "../styles/RegisterStyle";
import { registerDO, registerDTO } from "../DTO/RegisterDTO";
import { colors } from "../styles/Colors";
import { Option, Password } from "./InputModules";
import { InputStyle } from "../styles/InputStyle";


export const RegisterModule = (props) => {
  const language = useSelector(state => state.session.language);
  const [formData, setFormData] = useState(registerDO);

  // Initialize Form Data
  /*   const [formData, setFormData] = useState(registerDO);
  
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
        registerDTO.phone = formData.countryCode.value + formData.phone.value;
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
  
    const validateForm = () => {
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
  
      //Name
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
        if (!formData.username.value.match(/^[a-zA-Z]+$/)) {
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
      if (formData.countryCode.value.length === 0 || formData.phone.value.length === 0) {
        ChangeState(setFormData, "Cannot be empty", "errors", "phone");
        isValid = false;
      }
      else {
        const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        if (!phoneRegex.test(formData.countryCode.value + formData.phone.value)) {
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
      // Role
      if (formData.role.value === "0") {
        ChangeState(setFormData, "Role is required", "errors", "role");
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
      if (formData.termsOfService.value === false) {
        ChangeState(setFormData, "Please agree the terms of Service", "errors", "termsOfService");
        isValid = false;
      }
  
      if (!isValid)
        return false;
      else
        return true;
    }
  
    const listItems = Object.keys(formData).map(item => {
      var header = item.split(/(?=[A-Z])(?=[A-Z])/);
      if (formData[item].type === "text" || formData[item].type === "email") {
        if (item === "address") {
          return (
            <div
              key={Object.keys(formData).indexOf(item)}
              style={{ width: "70%", display: "inline-block", padding: "4px", float: "left" }}
            >
              <CardHeader
                paddingleft={"2%"}
                size={0.95}
                weight={400}
              >
                {header[0]} {header[1]} {header[2]}
              </CardHeader>
              <Input
                width={"100%"}
                height={"40px"}
                data={formData}
                i={item}
                changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
              />
            </div>
          )
        }
        else if (item === "postalCode") {
          return (
            <div
              key={Object.keys(formData).indexOf(item)}
              style={{ width: "30%", display: "inline-block", padding: "4px", float: "left" }}
            >
              <CardHeader
                paddingleft={"2%"}
                size={0.95}
                weight={400}
              >
                {header[0]} {header[1]} {header[2]}
              </CardHeader>
              <Input
                width={"100%"}
                height={"40px"}
                data={formData}
                i={item}
                changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
              />
            </div>
          )
        }
        else {
          return (
            <div
              key={Object.keys(formData).indexOf(item)}
            >
              <CardHeader
                paddingleft={"2%"}
                size={0.95}
                weight={400}
              >
                {header[0]} {header[1]} {header[2]}
              </CardHeader>
              <Input
                width={"100%"}
                height={"40px"}
                data={formData}
                i={item}
                changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
              />
            </div>
          )
        }
      }
      if (formData[item].type === "option") {
        return (
          <div
            key={Object.keys(formData).indexOf(item)}
          >
            <CardHeader
              paddingleft={"2%"}
              size={0.95}
              weight={400}
            >
              {formData[item].name ? formData[item].name : item}
            </CardHeader>
            <OptionSelect
              width={"100%"}
              height={"40px"}
              radius={"40px"}
              padding={"0px 20px 0px 20px"}
              data={formData}
              i={item}
              changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
            />
          </div>
        )
      }
      if (formData[item].type === "password") {
        return (
          <div
            key={Object.keys(formData).indexOf(item)}
            style={{ position: "relative", width: "50%", display: "inline-block", padding: "4px", float: "left" }}
          >
            <CardHeader
              paddingleft={"2%"}
              size={0.95}
              weight={400}
            >
              {header[0]} {header[1]} {header[2]}
            </CardHeader>
            <PasswordField
              width={"100%"}
              height={"40px"}
              data={formData}
              i={item}
              changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
            />
          </div>
        )
      }
      if (formData[item].type === "tel") {
        if (item === "countryCode") {
          return (
            <div
              key={Object.keys(formData).indexOf(item)}
              style={{ width: "20%", display: "inline-block", padding: "4px", float: "left" }}
            >
              <CardHeader
                paddingleft={"2%"}
                size={0.95}
                weight={400}
              >
                Phone
              </CardHeader>
              <Input
                width={"100%"}
                height={"40px"}
                data={formData}
                i={item}
                changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
              />
            </div>
          )
        }
        else if (item === "phone") {
          return (
            <div
              key={Object.keys(formData).indexOf(item)}
              style={{ width: "80%", display: "inline-block", padding: "4px", float: "left" }}
            >
              <CardHeader
                paddingleft={"2%"}
                size={0.95}
                weight={400}
                style={{ opacity: 0 }}
              >
                {header[0]} {header[1]} {header[2]}
              </CardHeader>
              <Input
                width={"100%"}
                height={"40px"}
                data={formData}
                i={item}
                changeState={(event) => ChangeState(setFormData, event.target.value, "value", item)}
              />
            </div>
          )
        }
      }
      if (formData[item].type === "checkbox") {
        return (
          <CheckBox
            key={Object.keys(formData).indexOf(item)}
            data={formData}
            i={item}
            color={colors.navy}
            changeState={() => ChangeState(setFormData, formData[item].value, "value", item)}
          />
        )
      }
    }) */

  // Static filter items
  const staticFilters = Object.keys(formData).map(item => {
    return (
      <div
        key={item}
        className="row col-12 d-flex justify-content-center align-items-center m-0 py-2"
      >
        <div
          className="col-4 d-flex justify-content-start align-items-center m-0 p-0"
        >
          {formData[item]?.info?.header?.[language]}
        </div>
        {formData[item].static &&
          (formData[item].type === "text" || formData[item].type === "email") &&
          formData[item].context === "field" &&
          !formData[item].modal &&
          <div
            className="col-8 d-flex justify-content-center align-items-center m-0 p-0"
          >
            < InputStyle
              type={formData[item].type}
              width={"100%"}
              height={"45px"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 2rem"}
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
            className="position-relative col-8 d-flex justify-content-center align-items-center m-0 p-0"
          >
            <Password
              width={"100%"}
              height={"45px"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 2rem"}
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
            className="col-8 d-flex justify-content-center align-items-center m-0 p-0"
          >
            < InputStyle
              type={formData[item].type}
              width={"30%"}
              height={"45px"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 2rem"}
              textAlign={"left"}
              i={item}
              data={formData}
              placeholder={formData[item]?.placeholder[language]}
              value={`+${formData[item][0].value}`}
              onChange={(event) => ChangeState(setFormData, event.target.value, "value", item, 0)}
            />
            < InputStyle
              type={formData[item].type}
              width={"70%"}
              height={"45px"}
              radius={"0px"}
              border={"1px solid grey"}
              padding={"0rem 0rem 0rem 2rem"}
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
            className="col-8 d-flex justify-content-center align-items-center m-0 p-0"
          >
            <Option
              width={"100%"}
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
      className="row col-12 d-flex justify-content-center align-items-center pt-4"
    >
      {staticFilters}
      {/*       <div className="p-5" style={{ position: "relative" }}>
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
        {listItems}
        <div style={{ padding: "0px 20px 0px 20px" }}>
          <SubmitBtn
            onClick={register}
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
      </div> */}
    </div>
  )
}