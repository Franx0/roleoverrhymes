// React
import React, { useState, useEffect } from  'react';
// Nextjs
import Router, { useRouter } from 'next/router';
// GA
import ReactGA from 'react-ga';
// Consent
import { getCookieConsentValue } from "react-cookie-consent";

const TrackingID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "fake";
const TrackingContext = React.createContext(null);
const isEnv: Function = (env: string): Boolean => {
  return process.env.NODE_ENV === env
};

const TrackingProvider = ({ children }: any) => {
  const consent: boolean = getCookieConsentValue() === "true";
  const [analytics, setAnalytics] = useState({
    initialize: false,
    isInitialized: false,
    isDeclined: !consent,
    trackers: []
  });

  const handleRouteChange = (url: string) => {
    ReactGA.set({ page:  url });
    ReactGA.pageview(url);
  };

  const addTracker = (trackerName: string) => {
    if (analytics.isInitialized) {
      ReactGA.addTrackers([{
        trackingId: TrackingID,
        gaOptions: {
          name:  trackerName
        }
      }]);

      setAnalytics((prev: any) => ({ ...prev, trackers: [...prev.trackers, trackerName] }));
    }
  };

  const removeTracker = (trackerName: string) => {
    if (analytics.isInitialized) {
      setAnalytics((prev) => ({
        ...prev,
        trackers: prev.trackers.filter((tracker) => tracker !== trackerName)
      }))
    }
  };

  const logEvent = ({category = "", action = "", label = ""}) => {
    if (analytics.isInitialized) {
      ReactGA.event({category, action, label})
    }
  };

  const updateAnalytics = (type: string, value: boolean) => {
    setAnalytics((prev) => ({
      ...prev, [type]: value
    }));
  };

  const initializeGA = (analyticState: any) => {
    const { isDeclined } = analyticState;

    if (consent) {
      ReactGA.initialize(TrackingID, {
        debug: isEnv("development"),
        testMode: isEnv("development"),
        titleCase: false,
        gaOptions: {
          cookieFlags: "SameSite=None; Secure",
        }
      });

      setAnalytics(prev => ({...prev, isDeclined: !consent, isInitialized: isEnv("development") }));
    }

    if (isDeclined) {
      const disabled: string = `ga-disable-${TrackingID}`;

      window[disabled] = true;
      ['_ga', '_gid', '_gat'].forEach ((cookieName: string) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
    } else {
      Router.events.on('routeChangeComplete', handleRouteChange);
    };
  }

  useEffect(() => {
    initializeGA(analytics);
  }, [analytics.initialize, analytics.isInitialized, analytics.isDeclined]);

  return (
    <TrackingContext.Provider value={{ addTracker, removeTracker, logEvent, updateAnalytics }}>
      {children}
    </TrackingContext.Provider>
  )
};

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };
