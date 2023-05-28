import React, { useState, useEffect } from 'react';
import fetch from 'src/api/fetch';

const useFetch = <T extends unknown>(url: string, method: string = 'GET') => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    fetch<T>(url, method).then((response: T) => {
      setData(response);
    });
  }, [url, method]);

  return data;
};

export default useFetch;
