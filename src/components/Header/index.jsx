import React, { useEffect, useState, useRef } from "react";
import "./style.css";
function Header(props) {
  const [navbar, setNavbar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(0)
  //   resize màn hình
  useEffect(() => {
    function changeBackground() {
      if (window.scrollY > 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
    function changeResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", changeResize);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

// click
const dropMenuElement = useRef();
const handleClickIcon = () => {
    const ulElement = dropMenuElement.current;
    ulElement.classList.toggle("show")
    
};

  return (
    <header className={navbar ? "header active" : "header"}>
      <div className="container">
        <div className="col-left">
          <a href="#" className="logo-link">
            dorsin
          </a>
        </div>
        <div className="col-right">
          {width > 1024 ? (
            <>
              <div className="navbar">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <a href="#" className="navbar-link">
                      home
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#service" className="navbar-link">
                      services
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#feature" className="navbar-link">
                      features
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#pricing" className="navbar-link">
                      pricing
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#team" className="navbar-link">
                      team
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#blog" className="navbar-link">
                      blog
                    </a>
                  </li>
                  <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header__button">
                <button className="btn btn-header">Try it Free</button>
              </div>
            </>
          ) : (
            <>
              <span class="material-icons menu-icon" onClick={handleClickIcon}>
                reorder
              </span>
              <ul
               className="drop-menu"
               ref={dropMenuElement}>
                <div className="container">
                  <li className="drop-item">
                    <a href="" className="item-link">
                      home
                    </a>
                  </li>
                  <li className="drop-item">
                    <a href="" className="item-link">
                      services
                    </a>
                  </li>
                  <li className="drop-item">
                    <a href="" className="item-link">
                      features
                    </a>
                  </li>
                  <li className="drop-item">
                    <a href="" className="item-link">
                      pricing
                    </a>
                  </li>
                  <li className="drop-item">
                    <a href="" className="item-link">
                      team
                    </a>
                  </li>
                  <li className="drop-item">
                    <a href="" className="item-link">
                      blog
                    </a>
                  </li>
                  <li className="drop-item">
                    <a href="" className="item-link">
                      contact
                    </a>
                  </li>

                  <li
                    className="header__button"
                    style={{
                      justifyContent: "flex-start",
                      marginBottom: "10px",
                    }}
                  >
                    <button className="btn btn-header"
                     style={{transition:"none"}}>Try it Free</button>
                  </li>
                </div>
              </ul>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
