import axios from "axios";

const csrfClient = axios.create({ withCredentials: true });

// Intercept all axios requests to add csrf token
axios.interceptors.request.use(async (config) => {
  const response = await csrfClient.get(
    "http://localhost:4200/api/get-csrf-token"
  );
  const token = response.data.csrfToken;

  config.headers["X-CSRF-TOKEN"] = token;
  return config;
});

export const getData = async (url: string) => {
  const response = await axios.get(url, {
    withCredentials: true,
  });
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postData = async (url: string, body: any) => {
  const response = await axios.post(url, body, {
    withCredentials: true,
  });
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const putData = async (url: string, body: any) => {
  const response = await axios.put(url, body, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteData = async (url: string) => {
  const response = await axios.delete(url, {
    withCredentials: true,
  });
  return response.data;
};
