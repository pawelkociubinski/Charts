export const authenticate = (email, password) => ({
  type: "AUTHENTICATION_USER_REQUESTED",
  payload: {
    email,
    password
  }
});

