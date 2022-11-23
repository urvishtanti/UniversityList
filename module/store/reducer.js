import {
  FETCHING_UNIVERSITY,
  FETCH_UNIVERSITY_FAILURE,
  FETCH_UNIVERSITY_SUCCESS,
} from "./type";

const initialState = {
  universities: [],
  isFetching: false,
  error: false,
};

export default function universityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_UNIVERSITY:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_UNIVERSITY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        universities: action.data,
      };
    case FETCH_UNIVERSITY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
