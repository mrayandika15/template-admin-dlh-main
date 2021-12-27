import axios from "axios";

const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:2m-NZcsR/";

const TIMEOUT = 2000;

const HEADERS = {
  "Content-type": "application/json",
  Accept: "application/json",
};

class ApiService {
  constructor(baseURL = BASE_URL, timeout = TIMEOUT, headers = HEADERS) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
    });

    client.interceptors.response.use(this.handleSuccess, this.handdleError);

    this.client = client;
  }

  handleSuccess(response) {
    return Promise.resolve(response);
  }

  handdleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(({ data }) => data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then(({ data }) => data);
  }
  put(path, payload) {
    return this.client.put(path, payload).then(({ data }) => data);
  }
  delete(path, payload) {
    return this.client.delete(path, payload).then(({ data }) => data);
  }
}

export default ApiService;
