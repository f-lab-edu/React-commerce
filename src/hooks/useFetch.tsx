import React, { useState, useEffect } from 'react';
import fetch from 'src/api/fetch';
import getErrorMessage from 'src/utils/getErrorMessage';

// eslint-disable-next-line
const useFetch = <T extends unknown>(url: string, method: string = 'GET', other?: any) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    try {
      fetch<T>(url, method).then((response: T) => {
        setData(response);
      });
    } catch (e) {
      throw new Error(getErrorMessage(e));
    }
  }, [url, method, other]);

  return data;
};

export default useFetch;
