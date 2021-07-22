import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Hamburger from 'hamburger-react'
import React, { useState, useEffect } from 'react';





export default function Header() {
  const [isOpen, setOpen] = useState(false);
  var classActive = isOpen ? `${styles.active}` : '';
  return (
    <header className={styles.header}>
        <div className={styles.container}>
        <div className={styles.logo}>
        <Image 
            src="../logo.png" 
            alt="kavetech"  
            layout="fill"
            objectFit="contain"
            />
        </div>
        <div className={styles.iconmenu}>
            <Hamburger  size={24} direction="left" toggled={isOpen} toggle={setOpen} color="#4A4A4A" rounded />
        </div>
        <nav className={classActive}>
            <a href="#">Who we are</a>
            <a href="#">Mission & values</a>
            <a href="#">Contact us</a>
            <a href="https://kavehome.com/es/es/jobs/" target='_blank' className={styles.callbtn}>CARRERS</a>
        </nav>
        </div>
    </header>
  )
}