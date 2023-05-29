import fetch from 'src/api/fetch';

const fetchData = <T>(url: string, method = 'GET') => {
  return use<T>(fetch(url, method));
};

function use<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;

  const suspender = promise.then(
    (resolve) => {
      status = 'success';
      result = resolve;
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
