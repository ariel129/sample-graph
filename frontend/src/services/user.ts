import axios from "axios";
import apiProtected from "../config/api";

export async function signIn(username: string, password: string) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/user/signin`, {
      username,
      password,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {
        status: 400,
        data: [],
        message: err,
      };
    });
}

export async function signUp(username: string, password: string) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/user/signup`, {
      username,
      password,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {
        status: 400,
        data: [],
        message: err,
      };
    });
}

export async function refresh(token: string) {
  return apiProtected(token)
    .get(`/user/refresh`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {
        status: 400,
        data: [],
        message: err,
      };
    });
}
