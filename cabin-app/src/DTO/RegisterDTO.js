export const registerDO = {
  fullName: {
    type: "text",
    value: "",
    errors: "",
  },
  username: {
    type: "text",
    value: "",
    errors: "",
  },
  email: {
    type: "email",
    value: "",
    errors: "",
  },
  emailConfirm: {
    type: "email",
    value: "",
    errors: "",
  },
  password: {
    type: "password",
    value: "",
    errors: "",
  },
  passwordConfirm: {
    type: "password",
    value: "",
    errors: "",
  },
  countryCode: {
    type: "tel",
    value: "+358",
    errors: "",
  },
  phone: {
    type: "tel",
    value: "",
    errors: "",
  },
  address: {
    type: "text",
    value: "",
    errors: "",
  },
  postalCode: {
    type: "text",
    value: "",
    errors: "",
  },
  role: {
    type: "option",
    value: "0",
    errors: "",
    0: {
      name: "Role",
    },
    1: {
      name: "Admin",
    },
    2: {
      name: "Manager",
    },
    3: {
      name: "Supervisor",
    },
    4: {
      name: "Worker",
    },
  },
  termsOfService: {
    type: "checkbox",
    isActive: false,
    value: false,
    0: {
      name: "I agree to the terms and conditions of the Service",
    },
  },
};


export const registerDTO = {
  fullName: "",
  username: "",
  email: "",
  emailConfirm: "",
  password: "",
  passwordConfirm: "",
  phone: "",
  address: "",
  postalCode: "",
  role: "",
  createdDate: "",
  modifiedDate: "",
  isActive: 0,
};