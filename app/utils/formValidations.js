const emailValidation = (value) => {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(value)) {
    return {
      message: "Email invalido",
    };
  }
  return true;
};

const emptyField = (value) => {
  if (value === "") {
    return {
      message: "Campo vacío",
    };
  }
  return true;
};

export { emailValidation, emptyField };
