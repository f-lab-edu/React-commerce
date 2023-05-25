import axios, { AxiosResponse } from 'axios';

const fetchData = <T>(url: string) => {
  return use<T>(axios(url));
};

function use<T>(promise: Promise<AxiosResponse<T>>) {
  let status = 'pending';
  let result: T;

  const suspender = promise.then(
    (resolve) => {
      status = 'success';
      result = resolve.data;
    },
    (reject) => {
      status = 'error';
      throw reject;
    }
  );

  return {
    read: (): T => {
      if (status === 'pending') throw suspender;
      return result;
    },
  };
}

export default fetchData;
