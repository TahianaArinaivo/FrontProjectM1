import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

class APICLIENT<T> {
  endpoint: string;
  fn?: (cin: File) => FormData;

  constructor(endpoint: string, fn?: (cin: File) => FormData) {
    this.endpoint = endpoint;
    this.fn = fn;
  }

  postCin = (cin: File) => {
    if (this.fn) {
      this.fn(cin);
      return axiosInstance
        .post<T>(this.endpoint, this.fn(cin))
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
    } else {
      return axiosInstance.post<T>(this.endpoint).then((res) => res.data);
    }
  };

  post(data: any) {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }
}

export default APICLIENT;
