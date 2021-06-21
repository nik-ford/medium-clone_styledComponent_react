/* THERE'S ANOTHER BRANCH THAT USE A MUCH DIFFERENT APPROACH TO SOLVE RESPONSIVE DESIGN IN PROGRESS... A DEAD SIMPLE APPROACH
    BUT FOR NOW, I WILL KEEP STYLED RESPONSIVE GRID TO BUILD UX.....
    ANYWAY, THIS HOOK WILL STAY INTO MASTER AS I HAVE PLANS ON HOW TO USE THIS INTO STYLED COMPONENT GRID */

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const resize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return windowDimensions;
}
export default useWindowDimensions