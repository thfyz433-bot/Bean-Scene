import NavBar from "./1.navbar/NavBar";
import Home from "./2.home/Home";
import Menu from "./3.menu/Menu";
import Features from "./4.features/Features";
import Sectioncoffee from "./5.section-coffee/Sectioncoffee";
import Reviews from "./6.Reviews/Reviews";
import Contact from "./7.contact us/Contact";
import Foter from "./8.foter/Foter";
import { FaArrowUp } from "react-icons/fa6";

import { useEffect, useState } from "react";


export default function MainFiles() {
    const [scorll, setscroll]=useState(false);
 useEffect(()=>{
      window.addEventListener('scroll', () => { 
        if(window.scrollY > 300){
          setscroll(true)
        }else(
          setscroll(false)
        )
       })
    }, []);
  return (
    <div className="files" id="">
        <NavBar/>
        <Home/>
        <Menu/>
        <Features/>
        <Sectioncoffee/>
        <Reviews/>
        <Contact/>
        <Foter/>

         <a style={{opacity:scorll ? 1 : 0 , transition:'1s'}}  href='#' >
        <button   className='scroll2top'><FaArrowUp/></button>
        </a>
    </div>
  )
}
