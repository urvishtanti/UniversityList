import axios from "axios";

const BaseURL = `http://universities.hipolabs.com`;

axios.defaults.baseURL = BaseURL;
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

const getData = () => {
  return axios.get(`/search`);
};

export { getData };
