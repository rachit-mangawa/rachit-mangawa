import { useSyncExternalStore } from 'react';

let globalLenis = null;
const listeners = new Set();

export const setGlobalLenis = (instance) => {
  globalLenis = instance;
  listeners.forEach((listener) => listener());
};

export const getLenis = () => globalLenis;

export const useLenis = () => {
  return useSyncExternalStore(
    (callback) => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
    () => globalLenis,
    () => null
  );
};

export default useLenis;
