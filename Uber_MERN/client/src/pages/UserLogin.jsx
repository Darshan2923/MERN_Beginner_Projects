import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserLogin = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    const { user, setUser } = useContext(UserDataContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', formData);
            console.log('Login successful', response.data);
            const data = response.data;
            setUser(data.user);
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
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
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
                    Don't have an account?{' '}
                    <Link to='/user-register' className='text-blue-400'>
                        Create one
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to='/captain-login'
                    onClick={() => console.log('Signin as Captain')}
                    className='bg-[#10b461] flex items-center justify-center text-white mb-7 rounded px-4 py-2 mt-10 w-full text-lg placeholder:text-base'
                >
                    Signin as Captain
                </Link>
            </div>
        </div>
    );
}

export default UserLogin;
