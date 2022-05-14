// NextJs
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { default as PhotoSlider } from '@/components/Slider';

// Components
import Image from '@/components/shared/Image'

// Import Resources
import resources from "@/resources/index";

const Home: NextPage<NextPageContext> = (props: any) => {
  const { dictionary } = props;
  const { photoSrcs, bookTrailerVideoSrc, genieVideoSrc } : {
    photoSrcs: any;
    bookTrailerVideoSrc: string,
    genieVideoSrc: string
  } = resources;
  const photos =  Object.keys(photoSrcs).map( (key: string) => {
    return (
      <div key={key} className="relative">
        <Image key={`photo-${key}`} alt={`photo-${key}`} className="w-full md:h-96 h-auto" src={photoSrcs[key]} />
      </div>
    )
  });

  return (
    <div>
      <Head>
        <title>Role Over Rhymes</title>
        <meta name="description" content="Role Over Rhymes official site" />
        <meta name="google-site-verification" content="LzptzhkWiTnD7rA7wangYq6fTqRoiptdPGwco8gIibs" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      <main className="flex flex-col px-0 items-center text-2xl font-roboto">
        <section id="description" className="w-full flex-wrap md:flex-col md:w-full p-16 md:text-justify place-content-center">
          <div className="max-w-3xl m-auto leading-8" dangerouslySetInnerHTML={{__html: dictionary.description}}></div>
        </section>
        <section id="trailer" className="w-full flex-wrap md:flex-col md:w-full p-10 text-justify place-content-center bg-roleover">
          <h2 className="text-center text-white mb-6 font-rancho text-4xl">{dictionary.booktrailer}</h2>
          <iframe className="h-96 w-full m-auto" loading="lazy" width="60%" height="60%" src={bookTrailerVideoSrc} frameBorder="0" allowFullScreen title="Book Trailer"></iframe>
        </section>
        <section id="photos" className="w-full flex-wrap md:flex-col md:w-full p-16 md:text-justify place-content-center">
          <h2 className="text-center text-roleover mb-6 font-rancho text-4xl">{dictionary.gallery}</h2>
          <PhotoSlider styles={{width: "97%"}} slides={photos} />
        </section>
        <section id="available" className="w-full flex-wrap md:flex-col md:w-full p-10 text-justify place-content-center">
          <div className="max-w-3xl m-auto" dangerouslySetInnerHTML={{__html: dictionary.available}}></div>
        </section>
      </main>

      <footer className="h-content flex border-t p-4 px-5 md:items-center md:justify-between font-roboto" dangerouslySetInnerHTML={{__html: dictionary.footer.handmade}}></footer>
    </div>
  )
}

export default Home
