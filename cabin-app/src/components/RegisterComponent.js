import React, { useState } from "react";
import { RegisterBody, LinkH4, SubmitBtn, CloseBtn, Checkbox, Input, Select } from "../styles/RegisterStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function RegisterComponent(props) {

  const [showPassword1, setHidePassword1] = useState(false);
  const [showPassword2, setHidePassword2] = useState(false);

  return (
    <RegisterBody {...props} className="col-12 col-md-8 col-lg-6 col-xl-5 shadow-lg">
      <div className="p-5" style={{ position: "relative" }}>
        <CloseBtn
          onClick={() => props.onHideRegister(0)}
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
            type="email"
            placeholder="Fullname"
            id="typeEmailX"
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
            type="email"
            placeholder="Username"
            id="typeEmailX"
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
            id="typeEmailX"
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
            id="typeEmailX"
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
              type="email"
              placeholder="+358"
              id="typeEmailX"
              className="form-control form-control-d"
            />
          </div>
          <div class="col-9">
            <Input
              type="email"
              placeholder=""
              id="typeEmailX"
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
              type="email"
              placeholder="Address"
              id="typeEmailX"
              className="form-control form-control-d"
            />
          </div>
          <div class="col-4">
            <Input
              type="email"
              placeholder="Postal Code"
              id="typeEmailX"
              className="form-control form-control-d"
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
        >
          <option selected>Role</option>
          <option value="1">Admin</option>
          <option value="2">Manager</option>
          <option value="3">Supervisor</option>
          <option value="3">Maid</option>
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
              id="typeEmailX"
              className="form-control form-control-d"
            />
            {showPassword1 && < FontAwesomeIcon icon={faEye} onClick={() => setHidePassword1(false)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {showPassword2 && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword2(false)} style={{ position: "absolute", top: 12, left: 420 }} />}
            {!showPassword1 && < FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword1(true)} style={{ position: "absolute", top: 12, left: 190 }} />}
            {!showPassword2 && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword2(true)} style={{ position: "absolute", top: 12, left: 420 }} />}
          </div>
          <div class="col">
            <Input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              id="typeEmailX"
              className="form-control form-control-d"
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
            value="false"
            id="flexCheckDefault"
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
          onClick={() => props.onHideRegister(0)}
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