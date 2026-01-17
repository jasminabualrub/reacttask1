import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
   <section className='Contact py-5'>
    <div className='container'>
         <h2 className={`${styles.ContactText}  text-center mt-5`}>Contact me
        </h2>
      <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
            <div className={`${styles.Line} justify-content-start`} ></div>
            <div className={styles.star}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    width="40"
    height="40"
    fill="#2c3e50"
  >
    <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
  </svg>
</div>

            <div className={styles.Line}></div>
        </div>

     <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                            <div className="mb-3 col-6 ">
  <label htmlFor="exampleFormControlInput1" className={styles.formlLabel}>Full Name</label>
  <input type="text" className={`${styles.borderButtom} form-control mb-3`} id="exampleFormControlInput1" placeholder="Full Name"/>
</div>
                    <div className="mb-3 col-6">
  <label htmlFor="exampleFormControlInput1" className={styles.formlLabel}>Email address</label>
  <input type="email" className={`${styles.borderButtom} form-control mb-3`} id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                    <div className="mb-3 col-6">
  <label htmlFor="exampleFormControlInput1" className={styles.formlLabel}>Phone Number</label>
  <input type="text" className={`${styles.borderButtom} form-control mb-3`} id="exampleFormControlInput1" placeholder="Phone Number"/>
</div>
<div className="mb-3 col-6">
  <label htmlFor="exampleFormControlTextarea1" className={styles.formlLabel}>Message</label>
  <textarea className={`${styles.borderButtom} form-control mb-3`} id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
          <div className='col-6 d-flex justify-content-start'>
    <button className={`btn rounded ${styles.sendBtn}`}>send</button>
</div> 

     </div>


  
  </div>

             
   </section>
  )
}
