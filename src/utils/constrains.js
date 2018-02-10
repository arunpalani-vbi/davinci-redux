export default { login : {
    email: {
      format: {
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: '^Please enter a valid email'
      },
      presence: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 1,
        message: "^Please enter password"
      }
    }
  }
};