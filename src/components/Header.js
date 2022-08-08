import React from 'react'
import {FaGripLines} from 'react-icons/fa'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  const [menu, setMenu] = useState('');
  
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
        
        <nav className={menu ? "smallNav" : undefined}>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            <li><Link to='/series'>TV Series</Link></li>
        </ul>
        </nav>
        
        
      </header>
  )
}

export default Header