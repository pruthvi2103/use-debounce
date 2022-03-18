import { useCallback } from "react";
export const useDebounce = (delay: number | undefined, callback: Function) => {
  const debounce = function (d: number | undefined, fn: Function) {
    let timerId: NodeJS.Timeout | null;
    return function (...args: any) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, d);
    };
  };

  const debouncedCallback = useCallback(debounce(delay, callback), []);
  return debouncedCallback;
};

export default useDebounce;
