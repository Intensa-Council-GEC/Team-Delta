import axios from "axios";

export const productionUrl = "Add production url here";
export const developmentUrl = "http://192.168.0.161:8000/";

axios.defaults.baseURL = developmentUrl;

export const authAxios = axios.create({
  baseURL: developmentUrl,
});

export const publicAxios = axios.create({
  baseURL: developmentUrl,
});

authAxios.interceptors.request.use(function (req) {
  const user = localStorage.getItem("user");
  if (user) {
    const { token } = JSON.parse(localStorage.getItem("user"));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
