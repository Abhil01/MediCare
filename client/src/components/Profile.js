import axios from 'axios';
import styles from './Profile.module.css';
import { useEffect, useState } from 'react';

const Profile = () =>{
    
    const[error,setError] = useState("");
    const[name,setName] = useState("");
    // const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword]= useState("");
    
    useEffect(()=>{
        const getData = async()=>{
            try{const res = await axios.get("http://localhost:3030/profile",{withCredentials:true});
            setError("");
            console.log(res.data);

            // const{name,email,password} = res.data;

            // const [fname,lname] = name.trim().spilt(" ");
          
            // setFirstName(fname);
            // setLastName(lname);
            // setEmail(email);
            // setPassword(password);
           handleValue(res.data);
           
        }
            catch(err){
                setError("User not Authorised");
            }
        }
        getData();
    },[])



    const handleValue=(values)=>{
        const{name,email,password} = values;


        // console.log(name);
        // console.log(email);
        // console.log(password);

            // const [fname,lname] = name.trim().spilt(" ");
            // console.log(fname);
            // console.log(lname);
          
            setName(name);
            // setLastName(lname);
            setEmail(email);
            setPassword(password);
    }

    const user = new URL("../assets/user.svg",import.meta.url).href;

   return(
    <>
    {error ? (<p style={{color:'red'}}>Error:{error}</p>):(
        
        
        <div className={styles.container}>
              
                <div className={styles.form}>


                 <div className={styles.imgContainer}>
                    <img src={user}/>
                   
                 </div>
                  <div className={styles.text}>{name}</div>
                  <hr className={styles.top}></hr>
                 
                 <div className={styles.data}>
                       
                        
                       
                  
                    <div className={styles.value}>
                       <div className={styles.heading}>Full Name</div>
                       <div className={styles.holder}>{name}</div>
                    </div>    
                    <hr></hr>
                    <div className={styles.value}>
                        <div className={styles.heading}>Email</div>
                       <div className={styles.holder}>{email}</div>
                    </div>
                    <hr></hr>
                    <div className={styles.value}>
                        <div className={styles.heading}>Password</div>
                       <div className={styles.holder}>{password}</div>
                    </div>
                    <div className={styles.bar}></div>
                   
                    

                        
                 </div>




                </div>


        </div>
        
        
        
        
        
        
        )}
    </>
   )



}
export default Profile;