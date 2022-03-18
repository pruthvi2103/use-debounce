import { useCallback } from "react";

export type IUseDebounce = (
  delay: number | undefined,
  callback: Function
) => (...args: any) => void;

export const useDebounce: IUseDebounce = (delay, callback) => {
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
