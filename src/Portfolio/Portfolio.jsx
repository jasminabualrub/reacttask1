import React from 'react'
import styles from './Portfolio.module.css'
export default function Portfolio() {
  return (
    <>
    <section className={styles.portfolio}>
        <div className="container">
              <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
            <div className={`${styles.Line}   justify-content-start`} ></div>
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
            <div className='row justify-content-center align-items-center gap-2'>
                <div className='col-md-4'>
                  
                </div>
                 <div className='col-md-4 '>
                    <img src="../assets/images/cabin" alt="cabin" className='img-fluid rounded'/>
                    
                </div>
                 <div className='col-md-4'>
                    <img src="../assets/images/cake" alt="cake" className='img-fluid rounded'/>
                    
                </div>
                 <div className='col-md-4'>
                    <img src="../assets/images/circus" alt="circus" className='img-fluid rounded'/>
                    
                </div>
                 <div className='col-md-4'>
                                      <img src="../assets/images/game" alt="game" className='img-fluid rounded'/>
  
                </div>
                 <div className='col-md-4'>
                                      <img src="../assets/images/safe" alt="safe" className='img-fluid rounded'/>
  
                </div>
                         <div className='col-md-4'>
                                      <img src="../assets/images/submarine" alt="submarine" className='img-fluid rounded'/>
  
                </div>
            </div>

        </div>
    </section>
    </>
  )
}
