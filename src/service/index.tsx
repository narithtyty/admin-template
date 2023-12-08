/* eslint-disable @typescript-eslint/no-explicit-any*/
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
class BaseService {
  private url: string;
  private api: any;

  constructor(baseurl?: string) {
    this.url = baseurl || BASE_URL;
    this.api = axios.create({
      baseURL: this.url,
      timeout: 60 * 5 * 1000 /** 5 Mins */,
      validateStatus: (status: number) => {
        return status >= 200 && status <= 600;
      },
      headers: {
        common: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    });
    this.api.interceptors.request.use((config: any) => {
      const configuration = {
        ...config,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      return new Promise((resolve) => resolve(configuration));
    });
    this.api.interceptors.response.use(
      (response: any) => {
        const data = response.data;
        if (data.status === 'fail') {
          console.error('error');
        }
        return Promise.resolve(response);
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  getJSON(endPoint: string, configs = {}): Promise<any> {
    return this.api.get(endPoint, configs);
  }

  postJSON(endPoint: string, params: any, configs = {}): Promise<any> {
    return this.api.post(endPoint, params, configs);
  }
}

// export const baseService = new BaseService()
export { BaseService };
