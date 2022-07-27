import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
  USER_ERROR,
  START_FETCHING,
  CLEAR_USER,
} from "../actions/types";

const initialState = {
  users: [],
  loading: true,
  error: {},
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USER:
      return {
        ...state,
        users: [],
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
        loading: false,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
        loading: false,
      };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === payload.id) return payload;
          else return user;
        }),
        loading: false,
      };

    default:
      return state;
  }
}

export default userReducer;
