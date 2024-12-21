import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainRegister = () => {
    const [formData, setFormData] = React.useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
        password: '',
        vehicle: {
            color: '',
            plate: '',
            capacity: 4,
            vehicleType: 'car'
        }
    });

    const { captain, setCaptain } = React.useContext(CaptainDataContext)

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
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8000/api/captains/register', formData);
            console.log('Registration successful', response.data);
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-login');
        } catch (error) {
            console.error('Error during registration', error);
        }
        setFormData({
            fullname: {
                firstname: '',
                lastname: ''
            },
            email: '',
            password: '',
            vehicle: {
                color: '',
                plate: '',
                capacity: 4,
                vehicleType: 'car'
            }
        });

    };

    return (
        <div className='p-7 flex flex-col min-h-screen'>
            <div>
                <img
                    src="https://imgs.search.brave.com/ZMRpQ8g_KoB6Hk5mKemNfdIvK6beon4KJ6AYcNvdHTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
                    alt="Uber logo"
                    className="w-16 mb-8"
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
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

                        <h3 className='text-lg font-medium mt-6 mb-2'>Vehicle Information</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm text-gray-600">Vehicle Color</label>
                                <input
                                    name="vehicle.color"
                                    value={formData.vehicle.color}
                                    onChange={handleChange}
                                    className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                    type="text"
                                    required
                                    placeholder='Red'
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-600">License Plate</label>
                                <input
                                    name="vehicle.plate"
                                    value={formData.vehicle.plate}
                                    onChange={handleChange}
                                    className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                    type="text"
                                    required
                                    placeholder='AB123CD'
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm text-gray-600">Vehicle Type</label>
                                <select
                                    name="vehicle.vehicleType"
                                    value={formData.vehicle.vehicleType}
                                    onChange={handleChange}
                                    className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg'
                                    required
                                >
                                    <option value="car">Car</option>
                                    <option value="auto">Auto</option>
                                    <option value="motorcycle">Motorcycle</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-gray-600">Seat Capacity</label>
                                <input
                                    name="vehicle.capacity"
                                    value={formData.vehicle.capacity}
                                    onChange={handleChange}
                                    className='bg-[#eeeeee] mt-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                    type="number"
                                    min="1"
                                    max="8"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='bg-[#111] text-white rounded px-4 py-3 w-full text-lg'
                    >
                        Register as Captain
                    </button>
                </form>

                <p className='text-center mt-4'>
                    Already have an account?{' '}
                    <Link to='/captain-login' className='text-blue-400'>
                        Sign in
                    </Link>
                </p>
            </div>

            <div className='mt-auto pt-6'>
                <Link
                    to='/user-register'
                    className='bg-[#10b461] flex items-center justify-center text-white rounded px-4 py-3 w-full text-lg'
                >
                    Sign up as User
                </Link>
            </div>
        </div>
    );
}

export default CaptainRegister;
