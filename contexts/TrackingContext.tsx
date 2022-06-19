// React
import React, { useState, useEffect } from  'react';
// Nextjs
import Router from 'next/router';
// GA
import ReactGA from 'react-ga4';
// Consent
import { getCookieConsentValue } from "react-cookie-consent";

interface ContextParameters {
  addTracker: (trackerName: string) => void,
  removeTracker: (trackerName: string) => void,
  logEvent: ({ category, action, name }: LogEventParameters) => void,
  updateAnalytics: (type: string, value: boolean) => void
};

interface LogEventParameters {
  category: string | undefined,
  action: string | undefined,
  name: string | undefined
};

const isEnv: Function = (env: string): Boolean => {
  return process.env.NODE_ENV === env
};
const TrackingID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "fake";
const TrackingContext = React.createContext<ContextParameters>({
  addTracker: (trackerName: string) => {},
  removeTracker: (trackerName: string) => {},
  logEvent: ({ category, action, name }: LogEventParameters) => {},
  updateAnalytics: (type: string, value: boolean) => {}
});

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
    ReactGA.send({ hitType: "pageview" });
  };

  const addTracker = (trackerName: string) => {
    if (analytics.isInitialized) {
      ReactGA.initialize([{
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

  const logEvent = (
    {category = "", action = "", name = ""}: LogEventParameters) => {

    if (analytics.isInitialized) {
      ReactGA.event(action, {
        category: category,
        name: name
      })
    }
  };

  const updateAnalytics = (type: string, value: boolean) => {
    setAnalytics((prev) => ({
      ...prev,
      [type]: value,
      isDeclined: !consent,
      isInitialized: value && !isEnv("development")
    }));
  };

  const initializeGA = (analyticState: any) => {
    const { isDeclined } = analyticState;

    if (consent) {
      ReactGA.initialize(TrackingID, {
        testMode: isEnv("development"),
        gaOptions: {
          titleCase: false,
          debug_mode: isEnv("development"),
          cookieFlags: "SameSite=None; Secure",
        }
      });
    }

    if (isDeclined) {
      const disabled: string = `ga-disable-${TrackingID}`;
      (window as any)[disabled] = true;

      ['_ga', '_gid', '_gat'].forEach ((cookieName: string) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure`;
      });
    } else {
      Router.events.on('routeChangeComplete', handleRouteChange);
    };
  }

  useEffect(() => {
    if (analytics.initialize && consent) initializeGA(analytics);
  }, [analytics]);

  return (
    <TrackingContext.Provider value={{ addTracker, removeTracker, logEvent, updateAnalytics }}>
      {children}
    </TrackingContext.Provider>
  )
};

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };
