import axios, { AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000',
});

const fetch = async <T>(url: string, method: string): Promise<T> => {
  const response = await client({ url, method });
  return response.data;
};

export default fetch;
