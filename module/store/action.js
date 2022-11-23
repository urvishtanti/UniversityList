import {getData} from '../services/client';
import {
  FETCHING_UNIVERSITY,
  FETCH_UNIVERSITY_FAILURE,
  FETCH_UNIVERSITY_SUCCESS,
} from './type';

export const fetchUniversity = () => {
  return async dispatch => {
    dispatch(getUniversity());
    try {
      const res = await getData();
      return dispatch(getUniversitySuccess(res?.data));
    } catch (err) {
      dispatch(getUniversityFailure(err));
    }
  };
};

function getUniversity() {
  return {
    type: FETCHING_UNIVERSITY,
  };
}

function getUniversitySuccess(data) {
  return {
    type: FETCH_UNIVERSITY_SUCCESS,
    data,
  };
}

function getUniversityFailure() {
  return {
    type: FETCH_UNIVERSITY_FAILURE,
  };
}
