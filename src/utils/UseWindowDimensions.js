import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export function useWindowSize(delay = 0) {
  const [windowDimensions, setWindowDimensions] = useState(useWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(useWindowDimensions());
    }
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [delay]);

  return windowDimensions;
}
export default useWindowDimensions;
