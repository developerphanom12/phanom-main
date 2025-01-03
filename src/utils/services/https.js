import axios from "axios";
import { ToastError } from "../../components/common/ToastMessage";


axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


export const formatUrl = (url, params) => {
  const param =
    params && Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : '';
  return `${url}${param}`;
};


export const httpPost = (url, data) =>
  new Promise((resolve) => {
    axios
      .post(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

  export const httpGet = async (url, params) =>
  new Promise((resolve) => {
    axios
      .get(formatUrl(url, params))
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        if(error?.response?.status===500){
          localStorage.setItem("token","");
        }else if (error?.message === "Network Error"){
          ToastError("Lost Internet Connection")
          localStorage.setItem("token","");
        }else{
          resolve(error.response);
        }
      });
  });

  export const scrollTopFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto',
  })
}