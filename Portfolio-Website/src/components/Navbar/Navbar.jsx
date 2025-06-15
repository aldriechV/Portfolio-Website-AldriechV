import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src="" alt="" className='logo'/>
        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </ul>

        <div className="search-box">
            <input type="text" placeholder='Search'/>
            <img src="" alt=""/>
        </div>

        <img src="" alt="" className='logo'/>

    </div>
  )
}

export default Navbar