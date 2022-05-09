// NextJs
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

const Home: NextPage<NextPageContext> = (props: any) => {
  return (
    <div>
      <Head>
        <title>Role Over Rhymes</title>
        <meta name="description" content="Role Over Rhymes official site" />
        <meta name="google-site-verification" content="LzptzhkWiTnD7rA7wangYq6fTqRoiptdPGwco8gIibs" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      <main className="min-h-screen flex flex-col px-0 items-center text-2xl font-roboto">
        <section id="description" className="w-full flex-wrap md:flex-col md:w-full p-16 text-justify place-content-center">
          <div className="max-w-3xl m-auto leading-8" dangerouslySetInnerHTML={{__html: props.dictionary.description}}></div>
        </section>
        <section id="trailer" className="w-full flex-wrap md:flex-col md:w-full p-10 text-justify place-content-center bg-roleover">
          <iframe className="h-96 w-full m-auto" loading="lazy" width="60%" height="60%" src="https://player.vimeo.com/video/705165609?h=a253245fd0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allowFullScreen title="Book Trailer"></iframe>
        </section>
        <section id="available" className="w-full flex-wrap md:flex-col md:w-full p-10 text-justify place-content-center">
          <div className="max-w-3xl m-auto" dangerouslySetInnerHTML={{__html: props.dictionary.available}}></div>
        </section>
      </main>

      <footer className="h-content flex border-t p-4 px-5 md:items-center md:justify-between font-roboto" dangerouslySetInnerHTML={{__html: props.dictionary.footer.handmade}}></footer>
    </div>
  )
}

export default Home
