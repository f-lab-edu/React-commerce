import axios from 'axios';
import getErrorMessage from 'src/utils/getErrorMessage';

const client = axios.create({
  baseURL: 'https://yobimall.netlify.app',
});

const fetch = async <T>(url: string, method: string): Promise<T> => {
  try {
    const response = await client<T>({ url, method });
    return response.data;
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
};

export default fetch;
