import { useState } from 'react';
import styles from './Signup.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Signup = () =>{

     const[name,setName] = useState("");
     const[email,setEmail] = useState("");
     const[password,setPassword] = useState("");
     const[error,setError] = useState("");
     const[success,setSuccess] = useState("");



    const sign = new URL("../assets/signup.svg",import.meta.url).href;
    const emailpic = new URL("../assets/email.svg",import.meta.url).href;
    const lock = new URL("../assets/passlock.svg",import.meta.url).href;
    const person = new URL("../assets/person.svg",import.meta.url).href;
    const logl = new URL("../assets/signuplogo.svg",import.meta.url).href;



  const handleEmail = (e) =>{
   
    setEmail(e.target.value);
    // console.log(email);
  } 
  const handleName = (e) =>{
   
    setName(e.target.value);
    // console.log(email);
  } 
  const handlePass = (e) =>{
   
    setPassword(e.target.value);
    console.log(e.target.value);
    
  } 

 const handleSignup = async() =>{
      const data = {name,email,password};
      setError("");
      setSuccess("");
      try{
         
        const res = await axios.post("http://localhost:3030/signup",data);
        setSuccess("User Registered Successfully");

      }
      catch(err){
         setError("Something went wrong");
      }

 }
    return(
        <>
        <div className={styles.container}>
        <div className={styles.photo}>
            <img className={styles.pic}src={sign}/>
        </div>
        
        <div className={styles.form}>

            {error && (<p style={{color:'red'}}>Error:{error}</p>)}
            {success && (<p style={{color:'green'}}>Success:{success}</p>)}
            
            <div className={styles.head}>
                        <p className={styles.formhead}>(Sign up)</p>
                        <img src={logl}/>
                        </div>
            
            <div className={styles.inputdiv}>
            <img className={styles.inputpic} src={person}/>
            <input type='text' placeholder='Full Name' className={styles.field} name='name' 
             onChange={(e)=>handleName(e)} required/>
            </div>

            

            <div className={styles.inputdiv}>
            <img className={styles.inputpic} src={emailpic}/>
            <input type='text' placeholder='Email address' className={styles.field} name='email' 
           onChange={(e)=>handleEmail(e)} required/>
            </div>

            <div className={styles.inputdiv}>
            <img className={styles.inputpic} src={lock}/>
            <input type='password' placeholder='Password' className={styles.field} name='password'   onChange={(e)=>handlePass(e)} required/>
            </div>

            {/* <a className={styles.forgot}href='/'>Forgot password?</a> */}
        
            <button className={styles.btn} onClick={handleSignup}>Sign up</button>
        
            <button className={styles.btn}><Link to={'/login'} className={styles.linkbtn}>Log in</Link></button>
        </div>
       </div>
      </>
    )
}
export default Signup;