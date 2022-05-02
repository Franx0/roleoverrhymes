import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage<NextPageContext> = (props: any) => {
  return (
    <div className={styles.title}>
      <Head>
        <title>Role Over Rhymes</title>
        <meta name="description" content="Role Over Rhymes official site" />
        <meta name="google-site-verification" content="LzptzhkWiTnD7rA7wangYq6fTqRoiptdPGwco8gIibs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Role Over Rhymes
        </h1>

        <div className={styles.grid}>
          <div className={styles.description}>
            <p>
              <span className='font-rancho'>Role Over Rhymes</span>, a book that puts a spin on the fairy-tale classics!
            </p>
            <br />
            <p>
              Suzanne Sasse and June Laurie&#39;s brand-new rhyming book for children teaches empowerment and acceptance.
            </p>
            <br />
            <p>
              <span className='font-rancho'>Role Over Rhymes</span> is a collection of ten, alternative fairy-tale rhymes that include revamped characters, plot twists, humour, present day settings and plenty of magic! Suzanne Sasse and illustrator, June Laurie, bring these classic tales up to date for young readers.
            </p>
          </div>
          <div className={styles.purchase}>
            Available at:&nbsp;
            <span>
              <a href="https://www.troubador.co.uk/bookshop/picture-books/role-over-rhymes" rel="noreferrer" target="_blank">Troubador</a>
            </span>
            &nbsp;
            <span>
              <a href="https://www.waterstones.com/book/role-over-rhymes/suzanne-sasse/june-laurie/9781803130828" rel="noreferrer" target="_blank">WaterStones</a>
            </span>
            &nbsp;
            <span>
              <a href="https://www.amazon.co.uk/Role-Over-Rhymes-Suzanne-Sasse/dp/1803130822/ref=sr_1_1?crid=1OVXAC088XPDA&keywords=role+over+rhymes&qid=1651523488&sprefix=role+over+rhymes%2Caps%2C200&sr=8-1" rel="noreferrer" target="_blank">Amazon UK</a>
            </span>
            &nbsp;
            <span>
              <a href="https://www.amazon.es/Role-Over-Rhymes-Suzanne-Sasse/dp/1803130822/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3U41N1KJRGDGW&keywords=Role+Over+Rhymes&qid=1651523446&sprefix=role+over+rhyme%2Caps%2C827&sr=8-1" rel="noreferrer" target="_blank">Amazon ES</a>
            </span>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
