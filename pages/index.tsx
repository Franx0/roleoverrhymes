// NextJs
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { default as PhotoSlider } from '@/components/Slider';

// Components
import Image from '@/components/shared/Image'
import PositionedImages from '@/components/PositionedImages'

// Import Resources
import resources from "@/resources/index";
import Stars from "@/resources/stars";

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
        <section id="description" className="w-full relative flex-wrap flex-col p-16 md:text-justify place-content-center">
          <PositionedImages images={Stars} />
          <div className="max-w-3xl m-auto leading-8 z-10 relative" dangerouslySetInnerHTML={{__html: dictionary.description}}></div>
        </section>
        <section id="available" className="w-full flex-wrap flex-col mb-4 p-2 md:p-6 text-justify place-content-center">
          <div className="flex 2xl:flex-row flex-col w-1/2 relative m-auto content-justify content-center align-middle items-center text-center z-10" dangerouslySetInnerHTML={{__html: dictionary.available}}></div>
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

      <footer className="flex border-t p-4 px-5 md:items-center md:justify-between font-roboto z-10 relative" dangerouslySetInnerHTML={{__html: dictionary.footer.handmade}}></footer>
    </div>
  )
}

export default Home
