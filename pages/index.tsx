import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage<NextPageContext> = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Role Over Rhymes</title>
        <meta name="description" content="Role Over Rhymes official site" />
        <meta name="google-site-verification" content="LzptzhkWiTnD7rA7wangYq6fTqRoiptdPGwco8gIibs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Role Over Rhymes <a href="https://www.troubador.co.uk/bookshop/picture-books/role-over-rhymes" rel="noreferrer" target="_blank">Book</a>
        </h2>

        <div className={styles.grid}>
          <p className={styles.description}>
            Role Over Rhymes, a book that puts a spin on the fairy-tale classics!
            Suzanne Sasse and June Laurie&#39;s brand-new rhyming book for children teaches
            empowerment and acceptance.
            Role over Rhymes is a collection of ten, alternative fairy-tale rhymes that include revamped
            characters, plot twists, humour, present day settings and plenty of magic! Suzanne Sasse and
            illustrator, June Laurie, bring these classic tales up to date for young readers.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
