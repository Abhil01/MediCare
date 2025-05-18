import { useEffect } from 'react';
import styles from'./Content.module.css';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Content = () =>{
    const docUrl = new URL('../assets/Doctor.svg',import.meta.url).href;


     useEffect(()=>{
      const cookie = async()=>{
        try{
          const res = await axios("http://localhost:3030/logout",{withCredentials:true});

        }
        catch(err)
        {
          console.log(err);
        }
      }
      cookie();
     })










    return(
      <>        <div className={styles.content}>
        <div className={styles.text}>
        <p className={styles.texttitle}>Healthcare <br></br>
        <span className={styles.textspan}>made easy</span></p>
        <p className={styles.textdesc}>Manage your medications and appointments with reminders and prescriptions.</p>
        <button className={styles.btn}><Link to={'/login'} className={styles.btnlink}>Get Started</Link></button>
        </div>
        
        
        <div className={styles.logo}>
          <img className={styles.logoimg}src={docUrl}/>
        </div>
    
       </div>
       <Footer/>
       </>

       );
}
export default Content;