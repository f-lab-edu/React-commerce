import { useEffect } from 'react';

const useDebounce = (callback: Function, time: number) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, time]);
};

export default useDebounce;
