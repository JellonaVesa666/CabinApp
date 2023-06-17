import axios from "axios";

export const BASE_URL = "http://localhost:8000/";

export const ENDPOINTS = {
  login: "login",
  register: "register"
};

export const createAPIEndpoint = endpoint => {
  let url = BASE_URL + "api/" + endpoint + "/";
  return {
    get: () => axios.get(url),
    getById: id => axios.get(url + id),
    post: postData => axios.post(url, postData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }),
    put: (id, updateRecord) => axios.put(url + id, updateRecord),
    delete: id => axios.delete(url + id),
  }
}