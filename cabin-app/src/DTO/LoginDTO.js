export const LoginDO = {
  username: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    errors: "",
    info: {
      header: {
        fi:
          "Sähköposti / Käyttäjätunnus",
        en:
          "Email / Username",
      }
    },
  },
  password: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    errors: "",
    info: {
      header: {
        fi:
          "Salasana",
        en:
          "Password",
      }
    },
  },
};

export const LoginDTO = {
  username: "",
  email: "",
  password: "",
};