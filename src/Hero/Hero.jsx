import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <>
    <section className="Hero py-5">
        <div className=' d-flex justify-content-center align-items-center'>
            <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="avatar for bootstrap" className='img-fluid w-25 h-25'/>
        </div>
        <div>
            <h1 className='Hero-text text-center mt-5'>Start Bootstrap
</h1>
        </div>
        <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
            <div className='Line  justify-content-start' ></div>
            <div className="Star">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    width="40"
    height="40"
    fill="white"
  >
    <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
  </svg>
</div>

            <div className='Line'></div>
        </div>
        <div className='hero-details text-center mt-3'>
            <p>Graphic Artist - Web Designer - Illustrator</p>
            
        </div>
        

    </section>

    </>
  )
}
