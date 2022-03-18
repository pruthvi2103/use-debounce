export declare type IUseDebounce = (delay: number | undefined, callback: Function) => (...args: any) => void;
export declare const useDebounce: IUseDebounce;
