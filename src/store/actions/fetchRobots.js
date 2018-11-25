import * as actionTypes from "./actionTypes";

export const requestRobots = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_ROBOTS_START });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>
      dispatch({ type: actionTypes.FETCH_ROBOTS_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: actionTypes.FETCH_ROBOTS_FAIL, payload: error })
    );
};

export const AddRobots = robot => ({
  type: actionTypes.ADD_ROBOT,
  payload: robot
});
