import { MutableRefObject, useEffect, useRef } from 'react';

/**
 * NOTE: A type-safe version of the `usePrevious` hook described in th docs here:
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */
export default function usePrevious<T>(
  value: T,
): MutableRefObject<T>['current'] {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
