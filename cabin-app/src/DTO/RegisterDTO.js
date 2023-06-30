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
    selected: "",
    errors: "",
    0: {
      value: "Admin",
    },
    1: {
      value: "Manager",
    },
    2: {
      value: "Supervisor",
    },
    3: {
      value: "Worker",
    },
  },
  termsOfService: {
    type: "checkbox",
    isActive: false,
    dropdown: true,
    selected: false,
    0: {
      value: "I agree to the terms and conditions of the Service",
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