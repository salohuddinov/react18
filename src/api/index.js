import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://fakestoreapi.com"
})

mainUrl.interceptors.request.use((req) => {
  let token = localStorage.getItem("token")
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default mainUrl

