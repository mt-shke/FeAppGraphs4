import axios from "redaxios";
// export const API_URL = "https://product-feedback-api-vspp.onrender.com/api/v1";
// export const API_URL = "http://localhost:5000/api/v1/";
export const API_URL = "http://localhost:5002/api/v1";

export const authAxios = axios.create({
   baseURL: API_URL,
   withCredentials: true, // + app.use(cors(frontAppURL)) in app.js(back-end) to avoid cors!!
});

export const postApi = async (url: string, params: any) => {
   const data = JSON.stringify(params);
   return await authAxios.post(url, data, {
      headers: { "Content-Type": "application/json" },
   });
};
