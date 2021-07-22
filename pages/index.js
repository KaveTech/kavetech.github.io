import Head from 'next/head'
import Image from 'next/image'
import { useRef, useEffect } from "react";
import styles from '../styles/Home.module.scss'
import Header from './components/header'
import Hero from './components/hero'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Home() {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll()

  return (
    <>
      <Head>
        <title>KaveTech</title>
        <meta name="description" content="Kavetech" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Poppins&display=swap" 
          rel="stylesheet"
          />
      </Head>
      <Header  />
      <LocomotiveScrollProvider containerRef={containerRef} 
      options={
        {
          smooth: true,
        }
      }
      >
      <main className={styles.main} data-scroll-container ref={containerRef}>
      <Hero  />
      <div className={styles.contentbox} data-scroll-section>
        <div className={styles.container}>
          <div className={styles.boxsize}>
          <div className={styles.imagebox}><Image src="/pic-1.jpg" alt="kavehome" width={743} height={502} /></div>
          <div>
            <h2>Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis augue dolor. Praesent suscipit et nisl et vulputate. Proin rhoncus odio et tellus egestas rhoncus. Curabitur euismod felis ut leo eleifend, nec interdum ex laoreet. Sed ut pretium mi. Nam at dolor sit amet tortor ornare egestas. Quisque a erat a felis lacinia placerat. Aenean quis magna nec diam feugiat semper ut sed massa. 
          </p>
          <p>
          Aenean auctor odio mauris, congue consectetur libero dapibus ac. Vivamus leo turpis, porttitor sed enim sit amet, vulputate pharetra arcu. Etiam tincidunt lectus mi, eget tempor augue malesuada non. Pellentesque consequat purus enim, quis viverra augue molestie quis. Maecenas blandit lectus eu congue pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          </div>
          </div>
          
        </div>
      </div>
     
      </main>
      </LocomotiveScrollProvider>
      <footer className={styles.footer}>
        <a
          href="https://kavehome.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by{' '}</span>
          <span className={styles.logo}>
            <Image src="/kavehome.svg" alt="kavehome" width={120} height={24} />
          </span>
        </a>
      </footer>
      </>
  )
}
