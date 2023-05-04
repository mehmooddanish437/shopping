import React, { useState, useEffect } from 'react'
import Wraper from './Wraper'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import MenuMobile from './MenuMobile'
import Menu  from './Menu'

const Header = () => {
  const [show, setShow] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false)
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }
  
      prevScrollPos = currentScrollPos;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={ `w-full bg-gray-400 h-[50px]  md:h-[70px] z-10 sticky flex items-center justify-between top-0 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full '
      }`}
    >
      <Wraper className="flex justify-between items-center b relative max-w-[1280px]">
    
        
        <img src="/logo.png"
        alt="My Image"
        className='w-[50px] md:w-[70px]'
       
      />
        
     
        
        <Menu />
        {mobileMenu &&  <MenuMobile   setMobileMenu={setMobileMenu}/>
 }

       <div className='flex gap-5'>

        <div className="flex relative">
  <div className=" grid place-items-center ">
    <AiOutlineHeart className="h-6 w-6 md:h-8 md:w-8" />
  </div>
  <div className="absolute -top-2 left-4  md:-top-3 md:left-5
   text-white bg-red-500 h-4 w-4 md:h-5 md:w-5 rounded-full
    flex justify-center items-center md:text-[17px] text-[15px]  "  >
    5
  </div>
</div>
        <div className=" flex relative">
  <div className=" grid place-items-center ">
    <AiOutlineShoppingCart className="h-6 w-6 md:h-8 md:w-8" />
  </div>
  <div className=" absolute -top-2 left-4  md:-top-3 md:left-6
   text-white bg-red-500 h-4 w-4 md:h-5 md:w-5 rounded-full
    flex justify-center items-center md:text-[17px] text-[15px]  "  >
    5
  </div>
</div>


  <div className="md:hidden grid place-items-center  cursor-pointer"> 
  {mobileMenu ? ( <AiOutlineClose className="h-6 w-6 md:h-8 md:w-8 " 
    onClick={()=>setMobileMenu(false)} />) : (
      <AiOutlineMenu className="h-6 w-6 md:h-8 md:w-8 " 
      onClick={()=>setMobileMenu(true)} />
    ) }
  </div>
 
 
   
       
    


       </div>

         </Wraper>
    </header>
  )
}

export default Header