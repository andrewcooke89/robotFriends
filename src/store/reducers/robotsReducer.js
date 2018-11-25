import * as actionTypes from "../actions/actionTypes";

const initialState = {
  robots: [],
  isPending: false,
  error: null,
  robot: {
    robotName: "",
    robotEmail: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROBOTS_START:
      return {
        ...state,
        isPending: true
      };
    case actionTypes.FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false
      };
    case actionTypes.FETCH_ROBOTS_FAIL:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    case actionTypes.ADD_ROBOT:
      return {
        ...state,
        robots: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
