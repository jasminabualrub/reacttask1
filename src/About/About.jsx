import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <>
    <section className={`${styles.About} py-5  `}>
    
         <div>
                <h1 className={`${styles.AboutText}  text-center mt-5`}>About
    </h1>
            </div>
            <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                <div className={`${styles.Line} justify-content-start`} ></div>
                <div className={styles.star}>
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
    
                <div className={styles.Line}></div>
            </div>
 <div className='row g-3 justify-content-center align-items-start mt-3 text-white p-5'>
    <div className=' col-4 ' >
        <p>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

        </p>
    </div>
    <div className='col-4  ' >
        <p>        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
</p>
    </div>
 </div>
 <div className='d-flex  justify-content-center align-items-center  '>
    <button className='row px-3 g-3 btn btn-outline-light rounded-1 text-white btn bg-transparent  justify-content-center align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="col-6 "><path fill="#ffffff" d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg> 
        <span className="text-white col-6"> Free Download !
    </span>
    </button>
  </div>
    
    </section>
    </>
  )
}
