import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {


    const { captain, setCaptain } = useContext(CaptainDataContext);

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8000/api/captains/login', formData);
            console.log('Login successful', response.data);
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/home');
        } catch (error) {
            console.error('Error during login', error);
        }
        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img
                    src="https://imgs.search.brave.com/ZMRpQ8g_KoB6Hk5mKemNfdIvK6beon4KJ6AYcNvdHTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
                    alt="Uber logo"
                    className="w-16 mb-10"
                />
                <form onSubmit={handleSubmit}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        required
                        placeholder='johndoe@example.com'
                    />
                    <h3 className='text-lg mb-2'>Enter password</h3>
                    <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type='password'
                        required
                        placeholder='password'
                    />
                    <button
                        className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                        type='submit'
                    >
                        Log in
                    </button>
                </form>
                <p className='text-center'>
                    Join a fleet?{' '}
                    <Link to='/captain-register' className='text-blue-400'>
                        Create an account
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to='/user-login'
                    onClick={() => console.log('Signin as Captain')}
                    className='bg-[#d5622d] flex items-center justify-center text-white mb-7 rounded px-4 py-2 mt-10 w-full text-lg placeholder:text-base'
                >
                    Signin as User
                </Link>
            </div>
        </div>
    );
}

export default CaptainLogin;
