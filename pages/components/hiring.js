import styles from '../../styles/Home.module.scss'
import Image from 'next/image'


export default function Hiring() {
  return (
    <div className={styles.hiringbox}>
        <div className={styles.linkdin}>
            <Image src="/linkedin.svg" alt="likendin" width={48} height={48} />
        </div>
        <div className={styles.hiringtext}>
            <h3>We are hiring</h3>
            <Image src="/arrow.svg" alt="go to" width={120} height={8} />
        </div>
    </div>
  )
}