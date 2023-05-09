import { useEffect } from 'react';

const useDebounce = <T extends unknown>(callback: Function, time: number, deps: T[]) => {
  // let timer: ReturnType<typeof setTimeout>;
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, time);

    return () => clearTimeout(timer);
  }, [callback, time, ...deps]);
};

export default useDebounce;
