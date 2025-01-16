import axios from "axios";
import router from "../router";
import { AuthStore } from "../store/AuthStore";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}api`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.withCredentials) {
      const authStore = AuthStore();
      config.headers["Authorization"] = `Bearer ${authStore.token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response) {
      if (error.response.status === 403) {
      }

      if (error.response.status === 401) {
        const authStore = AuthStore();
        const status = await authStore.logoutUser();
        if (status) {
          router.replace({ path: "/login" });
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
