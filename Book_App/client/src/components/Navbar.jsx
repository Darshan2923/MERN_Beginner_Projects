import React from 'react'
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
                        <Link className="app-link" to="/createBooks">
                            Add Book
                        </Link>
                    </li>
                    {/* <li>
                        {" "}
                        <Link className="mobile-pass-link" to="/saved-recipe">
                            Saved Book
                        </Link>
                    </li> */}
                </ul>
                <div className="navbar__buttons">
                    <Link className="navbar__buttons__sign-in" to="/">
                        Login
                    </Link>
                    <Link className="navbar__buttons__register" to="/">
                        Register
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Navbar