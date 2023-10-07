import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const Onlogout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }

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
                {!cookies.access_token ? (
                    <div className="navbar__buttons">
                        <Link className="navbar__buttons__sign-in" to="/auth">
                            Login
                        </Link>
                        <Link className="navbar__buttons__register" to="/auth">
                            Register
                        </Link>
                    </div>
                ) : (
                    <button className='navbar__buttons navbar__buttons__register' onClick={Onlogout}>Logout</button>
                )}

            </div>
        </section>
    )
}

export default Navbar