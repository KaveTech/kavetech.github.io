import styles from '../../styles/Home.module.scss'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.copyright}>
            2021  kavetech ©
        </div>

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
  )
}