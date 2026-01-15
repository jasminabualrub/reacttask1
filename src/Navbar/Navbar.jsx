import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>


    <nav style={{backgroundColor: 'red'}} className={`navbar navbar-expand-lg ${styles.bgDarknavy} position-sticky navbar-dark p-3`}>
  <div className="container">
    <a className="navbar-brand" href="#"><h2>STARTBOOTSTRAP</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
      <ul className="navbar-nav d-flex gap-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#port"><h6>PORTFOLIO</h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link  active " href="#about"><h6>ABOUT</h6></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="#contact"><h6>CONTACT</h6></a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
