import axios from "axios";
import KEYS from "../keys/keys";
export const FETCH_USER = "FETCH_USER";
const URL = "https://api.github.com/users/";

export function fetchUser(user) {
  const URL_FETCH = `${URL}${user}?client_id=${KEYS.CLIENT_ID}&client_secret=${KEYS.CLIENT_SECRET}`;
  const request = axios.get(`${URL_FETCH}`);

  return {
    type: FETCH_USER,
    payload: request
  };
}
