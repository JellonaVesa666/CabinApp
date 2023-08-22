export const registerDO = {
  fullName: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Koko nimi",
        en:
          "Fullname",
      }
    },
    placeholder: {
      fi:
        "Koko nimi",
      en:
        "Fullname",
    },
    errors: "",
  },
  username: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Käyttäjä nimi",
        en:
          "Username",
      },
    },
    placeholder: {
      fi:
        "Käyttäjä nimi",
      en:
        "Username",
    },
    errors: "",
  },
  email: {
    type: "email",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Sähköposti",
        en:
          "Email",
      },
    },
    placeholder: {
      fi:
        "Sähköposti",
      en:
        "Email",
    },
    errors: "",
  },
  emailConfirm: {
    type: "email",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Sähköposti varmennus",
        en:
          "Email confirm",
      },
    },
    placeholder: {
      fi:
        "Sähköposti",
      en:
        "Email",
    },
    errors: "",
  },
  password: {
    type: "password",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Salasana",
        en:
          "Password",
      },
    },
    placeholder: {
      fi:
        "Salasana",
      en:
        "Password",
    },
    errors: "",
  },
  passwordConfirm: {
    type: "password",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Salasana varmennus",
        en:
          "Password confirm",
      },
    },
    placeholder: {
      fi:
        "Salasana",
      en:
        "Password",
    },
    errors: "",
  },
  phone: {
    type: "tel",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Puhelinnumero",
        en:
          "Phone number",
      },
    },
    placeholder: {
      fi:
        "xxxxxxxxx",
      en:
        "xxxxxxxxx",
    },
    0: {
      value: "+358"
    },
    1: {
      value: ""
    },
    errors: "",
  },
  address: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Katuosoite",
        en:
          "Street Address",
      },
    },
    placeholder: {
      fi:
        "Testikatu 1 A1",
      en:
        "Test Street 1 A1",
    },
    errors: "",
  },
  postalCode: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Postinumero",
        en:
          "Postal Code",
      },
    },
    placeholder: {
      fi:
        "xxxxx",
      en:
        "xxxxx",
    },
    errors: "",
  },
  companyForm: {
    type: "option",
    context: "dropdown",
    static: true,
    modal: false,
    multiSelect: false,
    rows: 0,
    value: 0,
    info: {
      header: {
        fi:
          "Yritysmuoto",
        en:
          "Company form",
      },
    },
    placeholder: {
      fi:
        "xxxxx",
      en:
        "xxxxx",
    },
    0: {
      fi:
        "Kiinteistö yritys",
      en:
        "Property company",
    },
    1: {
      fi:
        "Yksityisyritys",
      en:
        "Private Company",
    },
    errors: "",
  },
  companyName: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Yritys",
        en:
          "Company",
      },
    },
    placeholder: {
      fi:
        "",
      en:
        "",
    },
    errors: "",
  },
  companyId: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    info: {
      header: {
        fi:
          "Y-tunnus",
        en:
          "Business ID",
      },
    },
    placeholder: {
      fi:
        "",
      en:
        "",
    },
    errors: "",
  },
  termsOfService: {
    type: "checkbox",
    static: true,
    modal: false,
    multiSelect: false,
    value: 0,
    rows: 1,
    info: {
      header: {
        fi:
          "Käyttöehdot",
        en:
          "Terms and conditions",
      },
    },
    1: {
      fi:
        "Hyväksyn Palvelun ehdot",
      en:
        "I agree to the terms and conditions of the Service",
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