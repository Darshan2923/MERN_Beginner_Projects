import React from 'react'
import { Link } from 'react-router-dom'
import Main_Img from '../assets/main-img.png'

const Main = () => {
    return (
        <section className='main-section'>
            <div className="main-sec-container">
                <div className="main-content">
                    <div className="main-text">
                        <div className="main-header">
                            <h1 className='white'>Reach your - <span className='first-underline'><span className='second-underline'>audience</span></span> & convert</h1>
                            <h1 className='white'>your leads</h1>
                        </div>
                        <div className="main-subheader white">Get your customers with SEO, rank your business with email marketing, build sales leads</div>
                        <div className="main-buttons">
                            <div className="get-started "><Link to='#'>Get Started</Link></div>
                            <div className="watch-demo white"><Link to='#'> Watch Demo <i className="fa-solid fa-caret-right"></i></Link></div>
                        </div>
                    </div>
                    <div className="main-img">
                        <div className="img-border-back overlay"></div>
                        <div className="img-container"><img src={Main_Img} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main