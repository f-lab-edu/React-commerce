import { useEffect } from 'react';

const useDebounce = (callback: Function, ms: number) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, ms);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, ms]);
};

export default useDebounce;
