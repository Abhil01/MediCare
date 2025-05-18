import styles from './Login.module.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login=() =>{


         const[email,setEmail] = useState("");
         const[password,setPassword] = useState("");
         const[error,setError] = useState("");
         const[success,setSuccess] = useState("");

    const logUrl = new URL("../assets/log2.svg",import.meta.url).href;
    const logl = new URL("../assets/loginlogo.svg",import.meta.url).href;
    const emailpic = new URL("../assets/email.svg",import.meta.url).href;
    const lock = new URL("../assets/passlock.svg",import.meta.url).href;

    const navigate = useNavigate();

  const handleEmail = (e) =>{
   
    setEmail(e.target.value);
    // console.log(email);
  } 
  
  const handlePass = (e) =>{
   
    setPassword(e.target.value);
    // console.log(e.target.value);
    
  } 

 const handleLogin = async() =>{
      const data = {email,password};
      setError("");
      setSuccess("");
      try{
         
        const res = await axios.post("http://localhost:3030/login",data,{withCredentials:true});
        setSuccess("User Login Successfully");
        console.log("Login done");
        navigate("/dashboard");
      }
      catch(err){
         setError("Invalid Credentials");
      }

 }



    return(
      <>
      
      <div className={styles.container}>
        <div className={styles.photo}>
            <img className={styles.pic}src={logUrl}/>
        </div>
        
        <div className={styles.form}>
            
             {error && (<p style={{color:'red'}}>Error:{error}</p>)}
            {success && (<p style={{color:'green'}}>Success:{success}</p>)}


            <div className={styles.head}>
            <p className={styles.formhead}>(Login)</p>
            <img src={logl}/>
            </div>
            <div className={styles.inputdiv}>
            <img className={styles.inputpic} src={emailpic}/>
            <input type='text' placeholder='Email address' className={styles.field} name='username' onChange={(e) =>handleEmail(e)}required/>
            </div>
            <div className={styles.inputdiv}>
            <img className={styles.inputpic} src={lock}/>
            <input type='password' placeholder='Password' className={styles.field} name='password'  onChange={(e) =>handlePass(e)} required/>
            </div>
            <a className={styles.forgot}href='/'>Forgot password?</a>
        
            <button className={styles.btn} onClick={handleLogin}>Log in</button>
        
            <button className={styles.btn}><Link to={'/signup'} className={styles.linkbtn}>Sign up</Link></button>
        </div>
       </div>
      </>
    )
}
export default Login;