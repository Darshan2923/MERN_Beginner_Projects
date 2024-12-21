import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
    // const { user } = useContext(UserDataContext);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    if (!token) {
        navigate('/user-login');
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper