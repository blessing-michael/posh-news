import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { HiBars4} from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";


function Nav() {
    const navigate = useNavigate();
    const [showlinks, setShowLinks]= useState(false)
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
      <div className="icons-nav">
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

    <div className={ ` ${showlinks? "nav-show show-container" : 'nav-show'}`}>
        <ul className='link-element'>
            <li>Home</li>
            <li>Business</li>
            <li>Sport</li>
            <li>Tech</li>
            <li>Science</li>

        </ul> 
    </div>


    </nav>
  )
}

export default Nav