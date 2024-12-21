import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserRegister = () => {
    const [formData, setFormData] = React.useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
        password: ''
    });

    const { user, setUser } = useContext(UserDataContext)

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8000/api/users/register`, formData);

            if (response.status === 201) {
                console.log('Registration successful:', response.data);
                setUser(response.data.user);
                localStorage.setItem('token', response.data.token);
                navigate('/user-login');
            } else {
                console.error('Unexpected response:', response);
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Server error:', error.response.data);
                alert(`Error: ${error.response.data.message || 'Registration failed'}`);
            } else if (error.request) {
                // No response received
                console.error('No response received:', error.request);
                alert('Error: No response from the server');
            } else {
                // Other errors
                console.error('Error during request setup:', error.message);
                alert(`Error: ${error.message}`);
            }
        }
        setFormData({
            fullname: {
                firstname: '',
                lastname: ''
            },
            email: '',
            password: ''
        })
    };

    return (
        <div className='p-7 flex flex-col min-h-screen'>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber logo"
                    className="w-16 mb-8"
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <h3 className='text-lg font-medium mb-2'>Personal Information</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm text-gray-600">First Name</label>
                                <input
                                    name="fullname.firstname"
                                    value={formData.fullname.firstname}
                                    onChange={handleChange}
                                    className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                    type="text"
                                    required
                                    minLength={3}
                                    placeholder='John'
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-600">Last Name</label>
                                <input
                                    name="fullname.lastname"
                                    value={formData.fullname.lastname}
                                    onChange={handleChange}
                                    className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                    type="text"
                                    required
                                    minLength={3}
                                    placeholder='Doe'
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                type="email"
                                required
                                minLength={5}
                                placeholder='johndoe@example.com'
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                type="password"
                                required
                                placeholder='Enter a secure password'
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='bg-[#111] text-white rounded px-4 py-3 w-full text-lg'
                    >
                        Create Account
                    </button>
                </form>

                <p className='text-center mt-4'>
                    Already have an account?{' '}
                    <Link to='/user-login' className='text-blue-400'>
                        Sign in
                    </Link>
                </p>
            </div>

            <div className='mt-auto pt-6'>
                <Link
                    to='/captain-register'
                    className='bg-[#10b461] flex items-center justify-center text-white rounded px-4 py-3 w-full text-lg'
                >
                    Register as Captain
                </Link>
            </div>
        </div>
    );
};

export default UserRegister;
