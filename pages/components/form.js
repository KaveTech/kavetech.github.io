import styles from '../../styles/Form.module.scss'


export default function Form() {
  return (
    <div className={styles.form}>
        <h2>Contact us!</h2>
            <div className={styles.labelbox}>
                <label>Email</label>    
                <input
                    type='email'
                    name='email'
                    className='form-control formInput'
                    placeholder='Your email'
                ></input>
            </div>
            <div className={styles.labelbox}>
                <textarea
                    rows={4}
                    name='message'
                    className='form-control formInput'
                    placeholder='Message'
                ></textarea>
            </div>
            <div className={styles.submitbox}>  
                <button className='submit-btn' type='submit'>Send</button>
            </div>
        </div>
  )
}