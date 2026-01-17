import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
   <>
   <section className={styles.Footer}>
    <div className='row justify-content-center align-items-center py-5'  >
        <div className='col-md-3 text-center text-white'>
<h2>Location</h2>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
        </div>
        <div className='col-md-3'>
<h2 className='text-white mb-4'>Around the Web</h2>
<div className='d-flex gap-2'>
    <div className={`${styles.round} d-flex justify-content-center align-items-center`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg>
    </div>
      <div className={`${styles.round} d-flex justify-content-center align-items-center`}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>   
 </div>
      <div className={`${styles.round} d-flex justify-content-center align-items-center`}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/></svg>    </div>
      <div className={`${styles.round} d-flex justify-content-center align-items-center`}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M92.7 58.8l78.4 78.4c18.2-25 28.9-55.9 28.9-89.2 0-14.1-1.9-27.7-5.5-40.6-38 9.4-72.6 27.2-101.8 51.4zM58.8 92.7c-24.2 29.2-42 63.8-51.4 101.8 12.9 3.6 26.5 5.5 40.6 5.5 33.3 0 64.1-10.7 89.2-28.9L58.8 92.7zM256 0c-4.6 0-9.2 .1-13.7 .4 3.7 15.3 5.7 31.2 5.7 47.6 0 46.6-15.9 89.4-42.6 123.4L256 222.1 419.3 58.8C374.9 22.1 318.1 0 256 0zM48 248c-16.4 0-32.4-2-47.6-5.7-.2 4.5-.4 9.1-.4 13.7 0 62.1 22.1 118.9 58.8 163.3L222.1 256 171.4 205.4C137.4 232.1 94.6 248 48 248zm463.6 21.7c.2-4.5 .4-9.1 .4-13.7 0-62.1-22.1-118.9-58.8-163.3L289.9 256 340.6 306.6c34-26.7 76.9-42.6 123.4-42.6 16.4 0 32.4 2 47.6 5.7zm-7.1 47.8c-12.9-3.6-26.5-5.5-40.6-5.5-33.3 0-64.1 10.7-89.2 28.9l78.4 78.4c24.2-29.2 42-63.8 51.4-101.8zM340.9 374.8c-18.2 25-28.9 55.9-28.9 89.2 0 14.1 1.9 27.7 5.5 40.6 38-9.4 72.6-27.2 101.8-51.4l-78.4-78.4zm-34.3-34.3L256 289.9 92.7 453.2c44.3 36.7 101.2 58.8 163.3 58.8 4.6 0 9.2-.1 13.7-.4-3.7-15.3-5.7-31.2-5.7-47.6 0-46.6 15.9-89.4 42.6-123.4z"/></svg>
    </div>
</div>
        </div>
        <div className='col-md-3'>
<h2 className='text-white mb-3'>About Freelancer</h2>
<p className='text-white'>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#" className={styles.aqua}>Start Bootstrap </a></p>
        </div>

    </div>


   </section>
   </>
  )
}

export default Footer