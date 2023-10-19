import React from 'react'

const Contact = () => {
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
                        <form>
                            <label htmlFor="name">Name*</label>
                            <input type="text" name='name' placeholder='Enter your name' />
                            <label htmlFor="email">Email*</label>
                            <input type="email" name='email' placeholder='Enter your email' />
                            <label htmlFor="phone">Phone*</label>
                            <input type="number" name='phone' placeholder='Enter your phone number' />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact