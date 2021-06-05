import axios from "axios";

const api = (token: string | null) => {
  const apiConfigObj: any = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const apiConfig = axios.create(apiConfigObj);
  apiConfig.interceptors.response.use(
    (response: any) => {
      const modifiedResponse: any = {
        status: response.status,
        data: response.data,
      };
      return modifiedResponse;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return apiConfig;
};

export default api;
