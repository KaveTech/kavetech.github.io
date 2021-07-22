import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
           
          </span>
        </a>
      </footer>
    </div>
  )
}
