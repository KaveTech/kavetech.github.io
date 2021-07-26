import styles from '../../styles/Home.module.scss'
import { useLocomotiveScroll } from 'react-locomotive-scroll'



export default function Hero() {
    const { scroll } = useLocomotiveScroll()
  return (
    <div className={styles.hero} data-scroll-section>
        <div className={styles.container} >
        <h1 className={styles.title} data-scroll data-scroll-speed="3">
        <span className={styles.headsmall} data-scroll-delay="4">WE MAKE</span>
        <span>THINGS HAPPEN</span>
        </h1>
        <p data-scroll data-scroll-speed="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis augue dolor.</p>
        </div>      
    </div>
  )
}