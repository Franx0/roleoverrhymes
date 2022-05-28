// NextJs
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { default as PhotoSlider } from '@/components/Slider';

// Components
import Image from '@/components/shared/Image'
import PositionedImages from '@/components/PositionedImages'

// Import Resources
import resources from "@/resources/index";

const Stars: Array<any> = [
  {
    url: "/images/star1.png",
    class: "star-1 top-20 left-36 animate-pulse-slow-3"
  },
  {
    url: "/images/star1.png",
    class: "star-1 top-56 right-48 animate-pulse-slow-4"
  },
  {
    url: "/images/star2.png",
    class: "star-2 top-80 left-80 animate-pulse"
  },
  {
    url: "/images/star2.png",
    class: "w-4 star-2 top-96 right-60 animate-pulse"
  },
  {
    url: "/images/star2.png",
    class: "star-2 top-24 right-80 animate-pulse"
  },
  {
    url: "/images/star3.png",
    class: "star-3 top-72 left-12 animate-pulse"
  },
  {
    url: "/images/star4.png",
    class: "w-10 star-4 top-3 left-96 animate-pulse-slow-3"
  },
  {
    url: "/images/star4.png",
    class: "star-4 top-3 right-10 animate-pulse-slow-4"
  }
];

const Home: NextPage<NextPageContext> = (props: any) => {
  const { dictionary }: { dictionary: any } = props;
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
        <meta property="twitter:url" content={dictionary.meta.url} />
        <meta name="twitter:image" content={dictionary.meta.imageUrl} key="twimage" />
        <meta name="twitter:title" content={dictionary.meta.title} key="twtitle" />
        <meta name="twitter:description" content={dictionary.meta.description} key="twdesc" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      <main className="flex flex-col px-0 items-center text-2xl font-roboto">
        {/* <section id="stars" className="w-full flex relative">
        </section> */}
        <section id="description" className="w-full relative flex-wrap flex-col w-full p-16 md:text-justify place-content-center">
          <PositionedImages images={Stars} />
          <div className="max-w-3xl m-auto leading-8" dangerouslySetInnerHTML={{__html: dictionary.description}}></div>
        </section>
        <section id="trailer" className="w-full flex-wrap flex-col w-full mt-3 p-2 md:p-6 text-justify place-content-center bg-roleover">
          <h2 className="text-center text-white pt-2 md:pt-0 my-2 md:mb-6 font-rancho text-4xl">{dictionary.booktrailer}</h2>
          <iframe className="h-60 md:h-96 w-full m-auto" loading="lazy" width="60%" height="30%" src={bookTrailerVideoSrc} frameBorder="0" allowFullScreen title="Book Trailer"></iframe>
        </section>
        <section id="photos" className="w-full flex-wrap flex-col w-full mt-3 p-2 md:p-6 md:text-justify place-content-center">
          <h2 className="text-center text-roleover pt-2 pb-4 md:pt-0 my-2 md:mb-6 font-rancho text-4xl">{dictionary.gallery}</h2>
          <PhotoSlider styles={{width: "97%"}} slides={photos} />
        </section>
        <section id="available" className="w-full flex-wrap flex-col w-full mt-3 p-2 md:p-6 text-justify place-content-center">
          <div className="flex md:flex-row flex-col md:max-w-3xl md:w-full sm:w-1/2 content-justify content-center text-center m-auto " dangerouslySetInnerHTML={{__html: dictionary.available}}></div>
        </section>
        <section id="genie-tale" className="w-full flex-wrap flex-col w-full mt-3 p-2 md:p-6 text-justify place-content-center bg-complementary">
          <h2 className="text-center text-white pt-2 md:pt-0 my-2 md:mb-6 font-rancho text-4xl">{dictionary.genieTale}</h2>
          <div className="flex-wrap md:flex-row flex-col">
            <iframe className="h-60 md:h-96 w-full" loading="lazy" width="60%" height="30%" src={genieVideoSrc} frameBorder="0" allowFullScreen title="Genie Trailer"></iframe>
          </div>
        </section>
      </main>

      <footer className="flex border-t p-4 px-5 md:items-center md:justify-between font-roboto" dangerouslySetInnerHTML={{__html: dictionary.footer.handmade}}></footer>
    </div>
  )
}

export default Home
