import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:7001/" });
api.interceptors.request.use(
  async (config) => {
    // const token  = await localStorage.getItem('token');
    // token && (config.headers["Authorization"] = `Bearer ${token}` || "");
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log("data >>>",response.data)
    // const { status, data, message } = response.data;
    
    return response.data;
  },
  async (error) => {
     console.log("error >>>",error)
    return Promise.reject(error);
  }
);

export default api;
