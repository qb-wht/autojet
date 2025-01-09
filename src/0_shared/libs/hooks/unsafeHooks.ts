import { useEffect, useLayoutEffect, useMemo } from 'react';

export const useUnsafeEffect = (callback: () => void, depth: Iterable<unknown>) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [...depth]);
};

export const useUnsafeLayoutEffect = (callback: () => void, depth: Iterable<unknown>) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(callback, [...depth]);
};

export const useUnsafeMemo = <T>(callback: () => T, depth: Iterable<unknown>): T =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo<T>(callback, [...depth]);
