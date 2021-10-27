import React, {useState} from 'react';
import './style.css';
function Header(props) {
    const [navbar,setNavbar]=useState(false);
    function changeBackground() {
        console.log(window.scrollY);
        if(window.scrollY > 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener("scroll",changeBackground)
    return (
      <header className={navbar ? "header active": "header"}>
          <div className="container">
                  <div className="col-left">
                      <a href="#" className="logo-link">dorsin</a>
                  </div>
                  <div className="col-right">
                          <div className="navbar">
                              <ul className="navbar-list">
                                  <li className="navbar-item"><a href="#" className="navbar-link">home</a></li>
                                  <li className="navbar-item"><a href="#" className="navbar-link">services</a></li>
                                  <li className="navbar-item"><a href="#" className="navbar-link">features</a></li>
                                  <li className="navbar-item"><a href="#" className="navbar-link">pricing</a></li>
                                  <li className="navbar-item"><a href="#" className="navbar-link">team</a></li>
                                  <li className="navbar-item"><a href="#" className="navbar-link">blog</a></li>
                                  <li className="navbar-item"><a href="#" className="navbar-link">contact</a></li>
                              </ul>
                          </div>
                          <div className="header__button">
                              <button className="btn btn-header">
                                  Try it Free
                              </button>
                          </div>
                  </div>
              </div>
      </header>
    );
}

export default Header;