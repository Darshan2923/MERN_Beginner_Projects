import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`http://localhost:8000/api/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/user-login')
        }
    })

    useEffect(() => {
        if (!token) {
            navigate('/user-login')
        }
    }, []);

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout