import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const myLoader = ({ src, width, quality }) => {
  return `https://tech.kavehome.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KaveTech</title>
        <meta name="description" content="Kavetech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to KaveTech
        </h1>

     
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kavehome.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by{' '}</span>
          <span className={styles.logo}>
            <Image  loader={myLoader} src="/kavehome.svg" alt="kavehome" width={120} height={24} />
          </span>
        </a>
      </footer>
    </div>
  )
}
