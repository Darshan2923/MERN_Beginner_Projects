import React from 'react'
import Automation from '../assets/automation-img.png'

const Section = () => {
    return (
        <section id='section'>
            <div className="section-container">
                <div className="section-group1">
                    <div className="group1-header">
                        <h2>OUR FEATURES</h2>
                        <h1>Know your audience and boost sales</h1>
                    </div>
                </div>
                <div className="section-group2">
                    <div className="group2-contents">
                        <h2>Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails.</h2>
                    </div>
                </div>
                <div className="rectangle-card">
                    <div className="rect-container">
                        <div className="rect-text-content">
                            <h2>Save precious time with automation</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus.</p>
                            <button>Learn More <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className="rect-img-content">
                            <img src={Automation} alt="automation-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section