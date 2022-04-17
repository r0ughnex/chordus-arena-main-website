import { useEffect, useState } from 'react';
import { Breakpoint } from 'styles/variables';

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string) => {
    // Check to prevent issues with SSR.
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    /**
     * Triggered at the first client-side load,
     * and if the passed 'query' param changes.
     */
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export function useIsMediaMobile() {
  return useMediaQuery(`max-width: #{${Breakpoint.Mobile - 1}px`);
}

export function useIsMediaMobileUp() {
  return useMediaQuery(`(min-width: ${Breakpoint.Mobile}px)`);
}

export default useMediaQuery;
