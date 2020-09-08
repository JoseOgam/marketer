import React from 'react'
import Home from './home'
import Contact from './contact'
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/header-styles.css'

function Header () {
  return (
    <Router>
      <div className='Header'>
        <header className='Header-header'>
          {/* <img src={logo} className="Header-logo" alt="logo" /> */}
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <Route path='/' exact component={Home} />
      <Route path='/contact' component={Contact} />
    </Router>
  )
}

export default Header
