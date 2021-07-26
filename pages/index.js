import Head from 'next/head'
import Image from 'next/image'
import { useRef, useEffect } from "react";
import styles from '../styles/Home.module.scss'
import Header from './components/header'
import Hero from './components/hero'
import Form from './components/form'
import Hiring from './components/hiring'
import Footer from './components/footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Home() {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll()

  return (
    <div data-scroll-container >
      <Head>
        <title>KaveTech</title>
        <meta name="description" content="Kavetech" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Poppins&display=swap" 
          rel="stylesheet"
          />
      </Head>
      <LocomotiveScrollProvider containerRef={containerRef} 
      options={
        {
          smooth: true,
        }
      }
      >
      <Header  />
      <main className={styles.main} ref={containerRef}>
      <Hero  />
      <section id="WhoAre" className={styles.contentbox} data-scroll-section>
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
      </section>
      <section data-scroll-section>
      <div style={{  position: 'relative', width: '100vw', height: '66.66vw'}}>
        <Image 
          src="/pic-2.jpg"
          layout="fill"
          objectFit="cover"
          alt="kaveTech"
          />
      </div>
      </section>
      <section id="MissionValue" className={styles.contentbox +' '+ styles.values } data-scroll-section>
          <h2 className="center">Missions & values</h2>
          <div className={styles.container}>
            <div className="center">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis augue dolor. </p>
            </div>
            <div className="center">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis augue dolor. </p>
            </div>
            <div className="center">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis augue dolor. </p>
            </div>
          </div>
          <div className={styles.treeimage}>
          <div className={styles.imagesbox}>
          <div className={styles.image}>
            <Image 
          src="/pic-3.jpg"
          width={300} height={453}
          alt="Kavetech"
          />
            </div>
            <div className={styles.image}>
            <Image 
            src="/pic-4.jpg"
            width={300} height={453}
            alt="KaveTech"
           />
          </div>
          </div>
          <div className={styles.highlighttext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis augue dolor. </div>
          </div>
      </section>
      <section id="ContactUs" className={styles.formsection} data-scroll-section>
        <Form  />
        <Hiring  />
      </section>
      </main>
      <Footer  />
      </LocomotiveScrollProvider>
      </div>
  )
}
