import React , { useState } from 'react'
import "./Header.css"

export default function Header() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }


  return (
    <>
    
     <header>
            <nav>
                <div class="logo">
                    <a href="#">Srajan</a>
                </div>
                <div class="navigators">
                    <ul>
                        <li><a href="#skills">Skills Acquired</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <button className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={handleClick}>
                    <div className='bar'></div>
                </button>
            </nav>
        </header>
        <nav className={`mobile-nav ${isActive ? 'is-active' : ''}`}>
            <a href="#">Skills Acquired</a>
            <a href="#">Projects</a>
            <a href="#">Education</a>
            <a href="#">Contact</a>
        </nav>
    </>
  )
}
