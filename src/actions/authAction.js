export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (decodedAuthToken) => {

  return {
    type: SET_CURRENT_USER,
    payload: decodedAuthToken
  };
};