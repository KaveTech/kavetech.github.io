import styles from '../../styles/Home.module.scss'
import Image from 'next/image'


export default function Hiring() {
  return (
    <div className={styles.hiringbox}>
      <div className={styles.hiringboxcontent}>
        <div className={styles.linkdin}>
            <Image src="/linkedin.svg" alt="likendin" width={48} height={48} />
        </div>
        <a href="https://kavehome.com/es/es/jobs/" rel="noreferrer" target='_blank'  className={styles.hiringtext}>
            <h3>We are hiring</h3>
            <div className="arrow-bottom">
            <Image src="/arrow.svg" alt="go to" width={120} height={8} />
            </div>
        </a>
        </div>
    </div>
  )
}