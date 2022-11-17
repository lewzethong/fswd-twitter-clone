import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login';
import Signup from './Signup';

import './home.scss';

const Home = props => (
  <>    
    <div id="homeback">
    </div>
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle language-menu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language: <strong>English</strong>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Bahasa Melayu</a></li>
            <li><a className="dropdown-item" href="#">Chinese</a></li>
            <li><a className="dropdown-item" href="#">Japanese</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="front-card col-sm-10 offset-sm-1">
            <div className='row'>
              <div className="col-sm-6 welcome">
                <div id="welcome-text">
                  <h1><strong>Welcome to Twitter.</strong></h1>
                  <p>Connect with your friends &#8212; and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
                </div>
                <p><a href="#" id="twit-info">Hack Pacific - Backendium Twitter Project</a></p>
                <p><a href="#" id="twit-account">Tweet and photo by @Hackpacific<br/>3:20 PM - 15 December 2016</a></p>
              </div>
              <div className='col-sm-4 offset-sm-1'>
                <div className="log-in">
                  <Login />
                </div>
                <div className="sign-up">
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
