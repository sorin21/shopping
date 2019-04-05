import { SET_CURRENT_USER } from '../actions/authAction';

const users = [
  {
    "id": "1",
    "name": "Coca Cola",
    "since": "2014-06-28",
    "revenue": "492.12"
  },
  {
    "id": "2",
    "name": "Teamleader",
    "since": "2015-01-15",
    "revenue": "1505.95"
  },
  {
    "id": "3",
    "name": "Jeroen De Wit",
    "since": "2016-02-11",
    "revenue": "0.00"
  }
]

const initialState = {
  authUser: users[Math.floor(Math.random() * users.length)]
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        authUser: state.authUser
      }

    default:
      return state;
  }
};

export default authUserReducer;