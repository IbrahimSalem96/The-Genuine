import ReactGA from 'react-ga4';
import { useEffect } from 'react';

const Analytics = () => {
  const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
  
  useEffect(() => {
    if (GA_TRACKING_ID) {
      ReactGA.initialize(GA_TRACKING_ID);  
    } else {
      console.error('GA_TRACKING_ID is not defined');  
    }
  }, [GA_TRACKING_ID]);

  return null;
};

export default Analytics;
