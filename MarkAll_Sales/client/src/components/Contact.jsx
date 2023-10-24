import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [contacts, setContacts] = useState({
        name: "",
        email: "",
        phoneNumber: 0,
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContacts(prevState => ({ ...prevState, [name]: value }))
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/createblog", contacts);
            alert("Contact info sent successfully");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className='contact'>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="content1">
                        <div className="call-us"> <i className="fa fa-phone"></i>Call Us <br /><a href="#">+91 93545 66860</a></div>
                        <div className="call-us"> <i className="fa fa-map-marker"></i>Location <br />Ghaziabad, Uttar Pradesh</div>
                        <div className="call-us"> <i className="fa fa-envelope"></i>Mail Us <br /><a href="#">info@markall.in</a></div>
                    </div>
                    <div className="content2">
                        <h2>Contact Now</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia a voluptatum nostrum quod quia aspernatur!</p>
                        <form onSubmit={onSubmit}>
                            <label htmlFor="name">Name*</label>
                            <input type="text" name='name' placeholder='Enter your name' onChange={handleChange} />
                            <label htmlFor="email">Email*</label>
                            <input type="email" name='email' placeholder='Enter your email' onChange={handleChange} />
                            <label htmlFor="phone">Phone*</label>
                            <input type="number" name='phone' placeholder='Enter your phone number' onChange={handleChange} />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact