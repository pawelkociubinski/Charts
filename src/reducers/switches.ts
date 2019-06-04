const initialState = {
  switches: [],
  error: false,
  inProgress: false,
};

type State = typeof initialState;

interface Switch {
  (state: State, action : any): any
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SWITCHES_STARTED":
      return { ...state, inProgress: true }
    case "FETCH_SWITCHES_SUCCEEDED":
      return { ...state, error: false, switches: action.payload.switches }
    case "FETCH_SWITCHES_FINISHED":
      return { ...state, inProgress: false }
    case "FETCH_SWITCHES_FAILED":
      return { ...state, error: true, inProgress: false }
    default:
      return state
  }
};

