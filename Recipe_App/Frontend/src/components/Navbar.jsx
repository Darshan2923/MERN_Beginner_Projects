import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section id='navbar'>
            <div className="navbar">
                <div className="navbar__img">
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <p className='nav_brand__text'>Logo</p>
                    </Link>
                </div>
                <ul className="navbar__links">
                    <li>
                        {" "}
                        <Link className="app-link" to="/create-recipe">
                            Create Recipe
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link className="mobile-pass-link" to="/saved-recipe">
                            Saved Recipe
                        </Link>
                    </li>
                </ul>
                <div className="navbar__buttons">
                    <Link className="navbar__buttons__sign-in" to="/auth">
                        Login
                    </Link>
                    <Link className="navbar__buttons__register" to="/auth">
                        Register
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar