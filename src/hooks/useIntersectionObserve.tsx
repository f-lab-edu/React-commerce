import React, { RefObject, useEffect, useState } from 'react';

const useIntersectionObserve = (targetRef: RefObject<Element>, options: IntersectionObserverInit, isLast: boolean) => {
  const [isIntersecting, setIsIntersectiong] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersectiong(true);
      }
    }, options);
    if (!isIntersecting && isLast && targetRef?.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [targetRef, options]);

  return isIntersecting;
};

export default useIntersectionObserve;
