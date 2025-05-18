import React from "react";
import styles from './Header.module.css';
import { Link , useLocation} from "react-router-dom";
import axios from 'axios';

const Header = () =>{
  
     const handleLogout = async() =>{
      try{
      const res = await axios("http://localhost:3030/logout",{withCredentials:true});
      window.alert("Logout Successfully");
      }
      catch(err){
        window.alert("Logout not Successful");

      }
     }
     

    const myImage1 = new URL('../assets/HosLogo.svg', import.meta.url).href;
    const location = useLocation();
    const path = location.pathname;
    return(
     
    <div className={styles.parenthead}>
      <div className={styles.headerdiv}>
        <img src={myImage1} width={38} height={39} className={styles.Logo}/>
        <p className={styles.title}>MEDICARE</p>
      </div>  
      
      {(path ==='/')&&(<div className={styles.navlink}>
        <Link to={'/dashboard'} className={styles.alink}>Dashboard</Link>
        <Link to={'/login'} className={styles.alink}>Log in</Link>
        <Link to={'/signup'} className={styles.alink}>Sign up</Link>
      </div>)}
      
      {
        (path === '/login' || path === '/signup' ) && (<div className={styles.navlink}>
          <Link to={'/'} className={styles.alink}>Home</Link>
          
        </div>)
      }


      {
        ( path === '/dashboard'|| path==='/profile') && (<div className={styles.navlink}>
          <Link to={'/'} className={styles.alink} onClick={handleLogout}>Logout</Link>
          
        </div>)
      }
    </div>
    )
          
      
  }
  export default Header;