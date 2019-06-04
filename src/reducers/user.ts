const initialState = {
  user: null,
  error: false,
  inProgress: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATION_USER_STARTED":
      return { ...state, inProgress: true }

    case "AUTHENTICATION_USER_SUCCEEDED":
      return { ...state, error: false, user: action.payload.user }

    case "AUTHENTICATION_USER_FINISHED":
      return { ...state, inProgress: false }

    case "AUTHENTICATION_USER_FAILED":
      return { ...state, error: true, inProgress: false }

    case "AUTHENTICATION_USER_RESET":
      return initialState

    default:
      return state
  }
};
