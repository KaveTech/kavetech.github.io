import styles from '../../styles/Home.module.scss'


export default function Hero() {
  return (
    <div className={styles.hero} id="top">
        <div className={styles.container} >
        <h1 className={styles.title} >
        <span className={styles.headsmall}>WE MAKE</span>
        <span>THINGS HAPPEN</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis augue dolor.</p>
        </div>      
    </div>
  )
}