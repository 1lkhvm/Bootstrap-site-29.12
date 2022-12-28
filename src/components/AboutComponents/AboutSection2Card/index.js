import React from 'react'
import '../AboutSection2Card/style.scss'
function AboutSection2Card() {
  return (
    <>
      <div className='about-card-container'>
        <div className='about-card'>
          <div className='about-card-img'>
            <img src='https://dummyimage.com/600x400/343a40/6c757d' />
          </div>
          <div className='about-card-text'>
            <h2>Our founding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
          </div>
        </div>
        <div className='about-card2'>
          <div className='about-card-img2'>
            <img src='https://dummyimage.com/600x400/343a40/6c757d' />
          </div>
          <div className='about-card-text2'>
            <h2>Growth & beyond</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection2Card