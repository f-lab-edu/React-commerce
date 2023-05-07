import { useEffect } from 'react';

const useDebounce = <T extends unknown>(callback: Function, time: number, deps: T[]) => {
  let timer: ReturnType<typeof setTimeout>;
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback();
    }, time);

    return () => clearTimeout(timer);
  }, [...deps]);
};

export default useDebounce;
