import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

class APICLIENT<T> {
  endpoint: string;
  fn?: (cin: File) => void;

  constructor(endpoint: string, fn?: (cin: File) => void) {
    this.endpoint = endpoint;
    this.fn = fn;
  }

  post = (cin: File) => {
    if (this.fn) {
      console.log("CIN", cin);

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
}

export default APICLIENT;
