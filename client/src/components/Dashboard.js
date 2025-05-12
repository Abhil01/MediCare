import { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
const Dashboard = () =>{
         const[error,setError] = useState("");
         const[success,setSuccess] = useState("");
         const [value, onChange] = useState('10:00');
         const[medi,setMedi] = useState('');
         const[card,setCard] = useState([]);

     useEffect(()=>{
      const  getData= async() =>{
      try{
         const res = await axios.get("http://localhost:3030/dashboard",{withCredentials:true});
         // console.log(res);
         
            
         setError("");
         
         setSuccess("User valid");
         

      }
      catch(err){
          setSuccess("");
          setError("User not authorised");
      }
      }
      getData();
},[]);

     
 

    const icon = new URL('../assets/medicineicon.svg',import.meta.url).href;
    const[show,setShow] = useState(false);

    const handle=()=>{
        const set = !show;
        setShow(set);
      //   console.log(show);
    }


   const handleChange=(e)=>{
      setMedi(e.target.value);
   }

   const handleAdd =()=>{
      const data = {medicine:medi,time:value}
      setCard(prev => [...prev,data]);
      setShow(!show);
   }
   const handleLogout = async() =>{
      try{
      const res = await axios("http://localhost:3030/logout",{withCredentials:true});
      window.alert("Logout Successfully");
      }
      catch(err){
        window.alert("Logout not Successful");

      }
     }


    
      if(error)
      {
         return  (<p style={{color:'red'}}>Error:{error}</p>)
          
      }
    
    
    return(
    <>
    
    <div className={styles.container}>


      

        <div className={styles.links}> 
        
              
            <div className={styles.linkdiv}> 
               <Link to={'/'} className={styles.link} >Home</Link> 
            </div>
            <div className={styles.linkdiv}> 
                <Link className={styles.link} onClick={handle}>Add Reminder</Link> 
             </div>
             <div className={styles.linkdiv}> 
                <Link className={styles.link} to={'/profile'}>Profile</Link>
             </div>
             <div className={styles.linkdiv}>  
                <Link className={styles.link} onClick={handleLogout}>Logout</Link> 
             </div>
            

        </div>

            <div className={styles.content}>

                     <div className={styles.conhead}>
                        <p className={styles.contentTitle}>Dashboard</p>
                        <button className={styles.btn} onClick={handle}>+ Add Reminder</button>
                    </div>
                    <hr></hr>

                   <div className={styles.display}>
                        {show && (
     <div className={styles.overlay}>
        <div className={styles.entry}>
          
           <div className={styles.entryhead}>Input Details</div>
           
           <div className={styles.inputcontainer}>
          
           <input className={styles.inputtext} onChange={(e)=>handleChange(e)} type='text' placeholder='Medicine'></input>
         
          <div className={styles.inputdiv}>    <TimePicker onChange={onChange} value={value} />       </div> 
                
          </div>
         
          <button className={styles.addbtn} onClick={handleAdd}>ADD</button>

        </div>
     </div>
   )}              {card.map((car,index)=>(<div className={styles.card} key={index}>
                                 <div className={styles.mediimg}>
                                    <img src={icon}/>
                                 </div>
                                 <div className={styles.mediname}>
                                    <div className={styles.name}>{car.medicine}</div>
                                    <div className={styles.time}>{car.time}</div>
                                    <div className={styles.tag}><span>Active</span></div>
                                 </div>
                            </div>))}
                            

                            
                       
                    </div>

                </div>
     </div>

     
  </>  
    );

}
export default Dashboard;