import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-darknavy position-sticky navbar-dark p-3">
  <div class="container">
    <a class="navbar-brand" href="#"><h2>STARTBOOTSTRAP</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
      <ul class="navbar-nav d-flex gap-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#port"><h6>PORTFOLIO</h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active " href="#about"><h6>ABOUT</h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active " href="#contact"><h6>CONTACT</h6></a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
