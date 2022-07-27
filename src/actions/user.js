import api from "../API/api";
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
  USER_ERROR,
  START_FETCHING,
  CLEAR_USER,
} from "./types";

// Get all users
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: START_FETCHING,
    });

    const res = await api.get("/users");
    dispatch({
      type: CLEAR_USER,
    });
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: "error" },
    });
  }
};

// Create user
export const createUser = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: START_FETCHING,
    });

    const result = await api.post("/users", {
      name: formData.username,
      gender: formData.gender,
      age: formData.userage,
    });

    dispatch({
      type: ADD_USER,
      payload: result.data,
    });

    navigate("/");
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: "error" },
    });
  }
};

// update user
export const updateUser = (formData, navigate, userId) => async (dispatch) => {
  try {
    dispatch({
      type: START_FETCHING,
    });

    const result = await api.put(`/users/${userId}`, {
      name: formData.username,
      gender: formData.gender,
      age: formData.userage,
    });

    dispatch({
      type: UPDATE_USER,
      payload: result.data,
    });

    navigate("/");
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: "error" },
    });
  }
};

// delete user
export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: START_FETCHING,
    });

    await api.delete(`/users/${userId}`);

    dispatch({
      type: DELETE_USER,
      payload: userId,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: "error" },
    });
  }
};
