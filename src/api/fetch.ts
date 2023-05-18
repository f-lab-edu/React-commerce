import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000',
});

const fetch = async <T>(url: string, method: string): Promise<T> => {
  const response = await client<T>({ url, method });
  return response.data;
};

export default fetch;
