// Nextjs
import { useRouter } from 'next/router';
// React
import { FunctionComponent } from 'react';
// Components
import CookieConsent from 'react-cookie-consent';
// Contexts
import { useLanguage } from '@/contexts/LanguageContext';
import { useTracking } from '@/contexts/TrackingContext';

const Cookies: FunctionComponent<any> = (props: any) => {
  const {className} = props;
  const locale = useLanguage();
  const { updateAnalytics, logEvent } = useTracking();

  const accept = () => {
    updateAnalytics("initialize", true);
    logEvent({category: "consent", action: "click", name: "accept"});
  };

  const reject = () => {
    updateAnalytics("isDeclined", true);
  };

  return (
    <CookieConsent
      enableDeclineButton
      location="bottom"
      containerClasses="md:h-20 bg-white text-black items-center shadow-inner"
      buttonText={locale.dictionary.cookies.accept}
      declineButtonText={locale.dictionary.cookies.reject}
      onAccept={() => accept()}
      onDecline={() => reject()}
      buttonWrapperClasses="m-auto"
      buttonClasses="rounded shadow-lg"
      declineButtonClasses="bg-red-600 hover:bg-red-500 rounded shadow-lg"
    >
      {locale.dictionary.cookies.main}
      <p className="text-sm text-gray-400">{locale.dictionary.cookies.list}</p>
    </CookieConsent>
  )
}

export default Cookies
