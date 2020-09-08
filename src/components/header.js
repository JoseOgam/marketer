import React from 'react'
import Home from './home'
import Contact from './contact'
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/header-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header () {
  return (
    <Router>
      <div className='Header'>
        <nav className='navbar navbar-expand-lg navbar-primary bg-warning'>
          <a className='navbar-brand' href=''>
            Marketer
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse my-2 my-lg-0' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Route path='/' exact component={Home} />
      <Route path='/contact' component={Contact} />
    </Router>
  )
}

export default Header
