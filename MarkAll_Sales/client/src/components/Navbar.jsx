import React from 'react'
import { Link } from 'react-router-dom'
import CreateBlog from './pages/CreateBlog'

const Navbar = () => {
    return (
        <section id='nav-section'>
            <div className="nav-container">
                <div className="navbar">
                    <Link to='/'>  <div className="logo-brand white">Markall</div></Link>
                    <nav>
                        <ul className='links'>
                            <Link to="/createBlog"><li className="link-keys white">Create Blog</li></Link>
                            <Link to="#"><li className="link-keys white">Services</li></Link>
                            <Link to="#"><li className="link-keys white">Pricing</li></Link>
                            <Link to="#"> <li className="link-keys white">About Us</li></Link>
                        </ul>
                    </nav>
                    <div className="get-started "><Link to='#'>Get Started</Link></div>
                </div>
            </div>
        </section>
    )
}

export default Navbar