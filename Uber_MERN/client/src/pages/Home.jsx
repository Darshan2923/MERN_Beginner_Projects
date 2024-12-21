import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-[url(https://media.istockphoto.com/id/501856332/photo/traffic-lamp.jpg?s=612x612&w=0&k=20&c=q8XylgHKDkE_Cq0xQeYBKzJ2jWOuBInZZXyhmcHk7VI=)] pt-8  h-screen flex justify-between flex-col bg-red-400  w-full'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className="w-16 ml-8" />
                <div className='pb-7 py-4 px-4 bg-white'>
                    <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                    <Link to='/user-login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home