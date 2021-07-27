import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Hamburger from 'hamburger-react'
import React, { useState, setState, useContext } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Linkto from 'next/link'


export default function Header() {
  const [isOpen, setOpen] = useState(false);
  var classActive = isOpen ? `${styles.active}` : '';
  

  const handleSetActive = () => {
    setOpen();
  }

  return (
    <header className={styles.header}>
        <div className={styles.container}>
        <div className={styles.logo}>
        <Link 
              to="top"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500} 
              onClick={handleSetActive}
            >
        <Image 
            src="../logo.png" 
            alt="kavetech"  
            layout="fill"
            objectFit="contain"
            />
             </Link>
        </div>
        <div className={styles.iconmenu}>
            <Hamburger  size={24} direction="left" toggled={isOpen} toggle={setOpen} color="#4A4A4A" rounded />
        </div>
        <nav className={classActive}>
            <Link 
              to="who-are"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500} 
              onClick={handleSetActive}
              hashSpy={true}
            >
              Who we are
            </Link>
            <Link  
              to="mission-value" 
              spy={true}
              smooth={true}
              offset={-48}
              duration={500} 
              onClick={handleSetActive}
              hashSpy={true}
              >
              Mission & values
            </Link>
            <Link 
              to="contact-us" 
              spy={true}
              smooth={true}
              duration={500} 
              onClick={handleSetActive}
              hashSpy={true}
              >
              Contact us
            </Link>
            <Linkto  href="https://kavehome.com/es/es/jobs/">
                <a className={styles.callbtn}  target="_blank">CARRERS</a>
            </Linkto>
        </nav>
        </div>
    </header>
  )
}