import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { HiBars4} from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import {AiOutlineClose } from "react-icons/ai";


function Nav() {
  const [showbar, setShowbar]= useState(false)
    const navigate = useNavigate();
   

    const show=()=>{
      console.log('clicked')
      setShowbar(!showbar)
    }
    const closenav=()=>{
      setShowbar(false )
  }
    const closeNews=()=>{
      setShowbar(false )
      navigate('/')
  }
    const closesport=()=>{
      setShowbar(false )
      navigate('/sport')
  }
    const closebusiness=()=>{
      setShowbar(false )
      navigate('/business')
  }
    const closescience=()=>{
      setShowbar(false )
      navigate('/science')
  }
    const closetech=()=>{
      setShowbar(false )
      navigate('/tech')
  }
    // const [showlinks, setShowLinks]= useState(true)
  //   const showbar=()=>{
  //     console.log('clicked')
  //     setShowLinks(true)
  // }
  return (
    <nav className='nav'>
      <div className="profile-div">
        {/* <span className='profile-span'><CgProfile /> sign-in</span> */}

        <h2 className='logo-h2'><CgProfile /> <span className='profile-span2'>sign-in</span>   </h2>
      </div>
      <div className="logo-div">
        <h1>posh <span className='news'>news</span></h1>
      </div>
      <div className="nav-underline"></div>
      <div className="icons-nav" onClick={show}>
        <div className="navbar-icon"><HiBars4 /></div>
      </div>


         {/* <div className="logo-div" onClick={() => navigate("/")} >
          <h1>
            Posh<span className="news">News  </span>
          </h1>
          <span></span>
        </div>
        <div className="icons-Na">
    <div className="navbar"><HiBars4 className='nav-icon'/></div>
   
    </div>
   */}

    <div className={ `${showbar? ' show' : 'nav-show'}`}>
    <div className="close-icon" onClick={closenav}>
        <AiOutlineClose className='show-closeicon' />
        </div>
        <ul className='link-element'>
            <li onClick={closeNews}>News</li>
            <li onClick={ closebusiness}>Business</li>
            <li onClick={ closesport}>Sport</li>
            <li onClick={ closetech}>Tech</li>
            <li onClick={ closescience}>Science</li>

        </ul> 
    </div>


    </nav>
  )
}

export default Nav