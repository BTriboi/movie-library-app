import React from 'react'
import {FaGripLines} from 'react-icons/fa'
import {useState} from 'react'

const Header = () => {

  const [menu, setMenu] = useState(false);
  
  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header className="App-header">
        <section id="logo-section">
        <a href="/" id="logo">
          Cinetrex
        </a>
        <span id='nav-bars' onClick={toggleMenu}>
        <FaGripLines />
        </span>
        </section>
        
        <nav className={menu && "smallNav"}>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Genre</a></li>
            <li><a href='/'>Country</a></li>
            <li><a href='/'>Movies</a></li>
            <li><a href='/'>TV Series</a></li>
            <li><a href='/'>Top ImDb</a></li>
        </ul>
        </nav>
        
        
      </header>
  )
}

export default Header