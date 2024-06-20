import React from 'react'
import sicoffee from 'react-icons/si'

const Navbar = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <span>
                        <sicoffee/>
                    </span>
                    <h1>CafePulse</h1>
                </div>
                <nav>
                    <link to="home" spy={true} smooth={true} duration={500} className='Curserpoint'>Home</link>
                    <link to="menu" spy={true} smooth={true} duration={500} className='Curserpoint'>Menu</link>
                    <link to="aboutus" spy={true} smooth={true} duration={500} className='Curserpoint'>About Us</link>
                    <link to="products" spy={true} smooth={true} duration={500} className='Curserpoint'>Products</link>
                    <link to="reviews" spy={true} smooth={true} duration={500} className='Curserpoint'>Reviews</link>
                    <link to="reviews" spy={true} smooth={true} duration={500} className='Curserpoint'>Reviews</link>
                    <link to="reviews" spy={true} smooth={true} duration={500} className='Curserpoint'>Reviews</link>

                    
                </nav>
            </div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar
