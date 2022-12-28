import React from 'react'
import "../HomeSection1/style.scss"
function HomeSection1() {
    return (
        <>
            <div className='homesection-container'>
                <div className='homesection-text-button'>
                    <h1>A Bootstrap 5 template for modern businesses</h1>
                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit!</p>


                    <div className='homesection-button'>
                        <button className='get-startedbtn'>Get Started</button>
                        <button className='learn-morebtn'>Learn More</button>
                    </div>


                </div>
                <div className='homesection-img'>
                    <img src='https://dummyimage.com/600x400/343a40/6c757d' />


                </div>

            </div>
        </>
    )
}

export default HomeSection1