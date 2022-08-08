import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer id="footer-section">
        <div id="footer-links">
            <h3>Links</h3>
            <div className='list-wrapper'>
            <ul>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/series">TV Series</Link></li>
                
            </ul>
            <ul>
                <li><Link to="/">Action</Link></li>
                <li><Link to="/">Horror</Link></li>
                <li><Link to="/">Romantic</Link></li>
            </ul>
            <ul>

                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Sitemap</Link></li>
                            
            </ul>
            </div>
            
        </div>
        <div id="footer-about">
            <h3>About Us</h3>
            
            <p><b>Movietrex</b> <span>is free streaming website with zero ads, it allows you watch series online free, watch tv shows online in high quality for free.</span></p>
            <p><span>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</span></p>

        </div>
    </footer>
  )
}