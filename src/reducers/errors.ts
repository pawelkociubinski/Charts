const initialState = {
  errors: [],
};

type State = typeof initialState;

interface Companies {
  (state: State, action: any): any;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES_STARTED':
      return {...state, inProgress: true};
    case 'FETCH_COMPANIES_SUCCEEDED':
      return {...state, error: false, companies: action.payload.companies};
    case 'FETCH_COMPANIES_FINISHED':
      return {...state, inProgress: false};
    case 'FETCH_COMPANIES_FAILED':
      return {...state, error: true, inProgress: false};
    default:
      return state;
  }
};
