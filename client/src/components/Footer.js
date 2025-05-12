import styles from'./Footer.module.css';
const Footer = ()=>{
    const remUrl = new URL("../assets/Reminder.svg",import.meta.url).href;
    const pre = new URL("../assets/medipre.svg",import.meta.url).href;
    const lock = new URL("../assets/Lock.svg",import.meta.url).href;
    return(
 <div className={styles.footer}>
     
       <div className={styles.Child}>
       <div className={styles.photo}>
       <img src={remUrl} width={70} height={55}/>
       </div>
       <div className={styles.text}>
        <h1>Simple reminders</h1>
         
       </div>
       <div className={styles.desc}><h6>Set up medication and appointment<br></br> 
       <span className={styles.linespan}>reminders with ease.</span></h6></div>
       </div>
       
       <div className={styles.Child}>
       <div className={styles.photo}>
       <img src={pre} width={70} height={55}/>
       </div>
       <div className={styles.text}> <h1>Scan prescriptions</h1>
      </div>
      <div className={styles.desc}><h6>Use your phone camera to digitize paper<br></br> 
      <span className={styles.linespan}>prescriptions</span></h6></div>
       </div>

       <div className={styles.Child}>
       <div className={styles.photo}>
       <img src={lock} width={70} height={55}/>
       </div>
       <div className={styles.text}> <h1>Secure data</h1>
       </div>
       <div className={styles.desc}><h6>Your health information is protected and<br></br> 
       <span className={styles.linespan}>private</span></h6></div>
       </div>

      
      </div>
      
 
    )
}
export default Footer;