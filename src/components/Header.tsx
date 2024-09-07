import React, { useRef } from 'react'
import './Header.css'

// icon
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';



const Header: React.FC = () => {
const mobileMenyununReferansi = useRef<HTMLDivElement>(null)

  const menyunuAch = () => {
    if(mobileMenyununReferansi.current) {
      mobileMenyununReferansi.current.classList.add("aktiv")
    }
  }

const menyunuBagla = () => {
  if(mobileMenyununReferansi.current) {
    mobileMenyununReferansi.current.classList.remove("aktiv")
  }
}



  return (

    <>
      <div className="mobile-menyu" ref={mobileMenyununReferansi}>
       
      <IoCloseCircleOutline className='baglamaiconu' onClick={menyunuBagla}/>




       <Link to='/'> <img src="/images/header/logo.svg" alt="" /> </Link>
        <div className="mobile-links">

          <Link to="/shop" className='nav-link'>SHOP</ Link>
          <a href="" className='nav-link'>ALWAYS PAN</a>
          <Link to="/mission" className='nav-link'>MISSION</ Link>
          <a href="" className='nav-link'>FAQS</a>
          <a href="" className='nav-link znak'><span>0</span></a>

        </div>
      </div>



      <nav className='container header d-flex justify-content-between align-items-center'>
    

        <div className="navbar-left d-flex gap-5">
          <Link to="shop" className='nav-link'>SHOP</Link>
          <a href="" className='nav-link'>ALWAYS PAN</a>
        </div>
       <Link to='/'><img src="/images/header/logo.svg" alt="" /> </Link> 
        <div className="navbar-right d-flex align-items-center gap-5">
          <Link to="/mission" className='nav-link'>MISSION</Link>
          <Link to="/faq" className='nav-link'>FAQS</Link>
          <a href="" className='nav-link znak'><span>0</span></a>
        </div>
        <FaBarsStaggered className='menyubars' onClick={(menyunuAch)}/>
      </nav>
    </>
  )
}

export default Header