import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: 'yyRmol1lp-VRtTYEcpNy8o0Aty4Q_mAl3EuZCDZszAU'
  }
});

class APIClient<T> {
  enpoint: string;

  constructor(enpoint: string) {
    this.enpoint = enpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance.get<T>(this.enpoint, config).then((res) => res.data);
}

export default APIClient;
