import { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

import './navbar.css'

export default function NavBar() {
 const [menu ,setmenu]=useState(false);
  return (
< div className='container-full'>
    <div className="container-nav">
     <a href="" className='h1' ><h1>Bean Scene</h1></a>
      <button  className='menu-icon' 
         onClick={() => { 
          setmenu(true);
          }}
      ><LuMenu /></button>

          <nav  className=" flex nav">
            <a href=""><h1>Bean Scene</h1></a>
            <ul className="flex ">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="flex button">
                <span className='sign'><a href="">Sign In</a></span>
                <span className='sing'><a href="">Sing Up</a></span>
            </div>
          </nav>
  {menu && (
    <div className="menu-links">
            
        
 <ul className="menu-links2">
  <button className='icons' onClick={() => { 
        setmenu(false);
       }}
      
      ><IoMdClose/></button>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  )} 


</div>



 <div id='home' className='container-hero'>
    

            <div className="text-hero">
                <span>We’ve got your morning covered with</span>
                <h1>Coffee</h1>
                <p>It is best to start your day with a cup of coffee. Discover the best 
                  flavours coffee you will ever have. We provide the best for our customers.</p>
            </div>
            <div className="bottom">
                  <button type='submit'>Order Now</button>
            </div>
    </div>

 
    </div>
  )
}
