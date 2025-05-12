import React from "react";
import './Global.css';
import Header from "./components/Header";

import Content from "./components/Content";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";

const App = () =>{
  

  
  return(
    <>
   <Header/>
   <Outlet/>
   </>
  )
        
    
}
export default App;