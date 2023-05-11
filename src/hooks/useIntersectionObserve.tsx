import React, { RefObject, useEffect, useState } from 'react';

const useIntersectionObserve = (
  targetRef: RefObject<Element>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const isIntersecting = entry?.isIntersecting;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setEntry(entries[0]);
    }, options);
    if (!isIntersecting && targetRef?.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, [targetRef, options, isIntersecting]);

  return entry;
};

export default useIntersectionObserve;
