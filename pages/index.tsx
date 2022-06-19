// NextJs
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { default as PhotoSlider } from '@/components/Slider';

// Context
import { useTracking } from '@/contexts/TrackingContext';

// Components
import Image from '@/components/shared/Image';
import PositionedImages from '@/components/PositionedImages';
import Cookies from '@/components/Cookies';

// Import Resources
import resources from "@/resources/index";

const Stars = [
  {
    url: "/images/star1.png",
    class: "star-1 top-1 left-4 md:top-20 lg:left-36 animate-pulse-slow-3 z-0"
  },
  {
    url: "/images/star1.png",
    class: "star-1 right-2 top-56 md:right-48 animate-pulse-slow-4 z-0"
  },
  {
    url: "/images/star2.png",
    class: "star-2 left-24 bottom-4 md:left-80 2xl:top-80 animate-pulse z-0"
  },
  {
    url: "/images/star2.png",
    class: "w-4 star-2 bottom-0 lg:top-96 right-10 md:right-24 xl:right-60 animate-pulse z-0"
  },
  {
    url: "/images/star2.png",
    class: "star-2 top-44 right-36 lg:top-24 lg:right-80 animate-pulse z-0"
  },
  {
    url: "/images/star3.png",
    class: "star-3 top-96 lg:top-72 left-0 lg:left-12 animate-pulse z-0"
  },
  {
    url: "/images/star4.png",
    class: "w-10 star-4 top-3 left-36 lg:left-96 animate-pulse-slow-3 z-0"
  },
  {
    url: "/images/star4.png",
    class: "star-4 top-3 right-10 animate-pulse-slow-4 z-0"
  }
];

const Home: NextPage<NextPageContext> = (props: any) => {
  const { dictionary }: { dictionary: any } = props;
  const { logEvent } = useTracking();
  const { photoSrcs, bookTrailerVideoSrc, genieVideoSrc } : {
    photoSrcs: any;
    bookTrailerVideoSrc: string,
    genieVideoSrc: string
  } = resources;
  const photos: Array<any> =  Object.keys(photoSrcs).map( (key: string) => {
    return (
      <div key={key} className="relative">
        <Image key={`photo-${key}`} alt={`photo-${key}`} className="w-full md:h-96 h-auto" src={photoSrcs[key]} />
      </div>
    )
  });
  const availableButtons = dictionary.available.buttons;
  const handleClick = (name: string) => {
    logEvent({category: "available", action: "click_button", name: name});
  };

  return (
    <div>
      <Head>
        <title>Role Over Rhymes</title><meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Francisco Moya" />
        <meta name="description" content={dictionary.meta.description} />
        <meta name="keywords" content={dictionary.meta.keywords} />
        <meta name="robots" content="index,follow" />

        {/* Google */}
        <meta name="google-site-verification" content="LzptzhkWiTnD7rA7wangYq6fTqRoiptdPGwco8gIibs" />
        <meta itemProp="name" content={dictionary.meta.title} key="title" />
        <meta itemProp="description" content={dictionary.meta.description} key="desc" />
        <meta itemProp="image" content={dictionary.meta.imageUrl} key="image" />

        {/* Open Graph */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content={dictionary.meta.url} key="ogurl" />
        <meta property="og:image" content={dictionary.meta.imageUrl} key="ogimage" />
        <meta property="og:title" content={dictionary.meta.title} key="ogtitle" />
        <meta property="og:description" content={dictionary.meta.description} key="ogdesc" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content="@Franxo06" key="twcreator" />
        <meta name="twitter:title" content={dictionary.meta.title} key="twtitle" />
        <meta name="twitter:text:title" content={dictionary.meta.title} key="twtexttitle" />
        <meta name="twitter:description" content={dictionary.meta.description} key="twdesc" />
        <meta name="twitter:image" content={dictionary.meta.imageUrl} key="twimage" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      <main className="flex flex-col px-0 items-center text-2xl font-roboto">
        <section id="description" className="w-full relative flex-wrap flex-col p-16 md:text-justify place-content-center">
          <PositionedImages images={Stars} />
          <div className="max-w-3xl m-auto leading-8 z-10 relative" dangerouslySetInnerHTML={{__html: dictionary.description}}></div>
        </section>
        <section id="available" className="w-full flex-wrap flex-col mb-4 p-2 md:p-6 text-justify place-content-center">
          <div className="flex lg:flex-row flex-col w-full m-auto justify-center content-center align-middle items-center text-center z-10">
           <span className="flex mr-4 my-2 whitespace-nowrap">{dictionary.available.title}</span>
             <div className="flex lg:flex-row flex-col items-center">
              {
                Object.keys(availableButtons).map((name: string) => {
                  return (
                    <span key={availableButtons[name]["name"]} className="m-1 px-3 button available" onClick={(e) => handleClick(availableButtons[name]["name"])} >
                      <a href={availableButtons[name]["src"]} rel="noreferrer" target="_blank" title={availableButtons[name]["name"]}>
                        {availableButtons[name]["name"]}
                      </a>
                    </span>
                  )
                })
              }
             </div>
          </div>
        </section>
        <section id="trailer" className="w-full flex-wrap flex-col mt-3 p-2 md:p-6 text-justify place-content-center bg-roleover shadow-lg">
          <h2 className="text-center text-white pt-2 md:pt-0 my-2 md:mb-6 font-rancho text-4xl z-10 relative">{dictionary.booktrailer}</h2>
          <iframe className="h-60 md:h-96 w-full m-auto z-10 relative" loading="lazy" width="60%" height="30%" src={bookTrailerVideoSrc} frameBorder="0" allowFullScreen title="Book Trailer"></iframe>
        </section>
        <section id="photos" className="w-full flex-wrap flex-col mt-3 p-2 md:p-6 md:text-justify place-content-center">
          <h2 className="text-center text-roleover pt-2 pb-4 md:pt-0 my-2 md:mb-6 font-rancho text-4xl z-10 relative">{dictionary.gallery}</h2>
          <PhotoSlider className="z-10 relative" styles={{width: "97%"}} slides={photos} />
        </section>
        <section id="genie-tale" className="w-full flex-wrap flex-col mt-3 p-2 md:p-6 text-justify place-content-center bg-complementary shadow-lg">
          <h2 className="text-center text-white pt-2 md:pt-0 my-2 md:mb-6 font-rancho text-4xl z-10 relative">{dictionary.genieTale}</h2>
          <div className="flex-wrap md:flex-row flex-col z-10 relative">
            <iframe className="h-60 md:h-96 w-full" loading="lazy" width="60%" height="30%" src={genieVideoSrc} frameBorder="0" allowFullScreen title="Genie Trailer"></iframe>
          </div>
        </section>
        <section id="contact" className="w-full relative flex-wrap flex-col overflow-hidden mt-3 p-2 md:p-6 text-justify place-content-center">
          <PositionedImages images={Stars} />
          <div className="w-1/2 h-full m-auto flex leading-8 font-rancho">
            <Image id="genie-image" alt="genie" className="w-60 hidden md:flex" src="/images/genie.png" />
            <div className="flex flex-col my-2 p-1 bg-white justify-center aling-center z-10">
              <p className="flex text-4xl">{resources.contact.name}</p>
              <p className="flex text-2xl">{resources.contact.mobile_number}</p>
              <p className="flex text-3xl">{resources.contact.email}</p>
            </div>
          </div>
        </section>
      </main>

      <Cookies className="cookies-container" />

      <footer className="flex border-t p-4 px-5 md:items-center md:justify-between font-roboto z-10 relative" dangerouslySetInnerHTML={{__html: dictionary.footer.handmade}}></footer>
    </div>
  )
}

export default Home
