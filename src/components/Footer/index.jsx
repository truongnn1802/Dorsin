import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function Footer() {

  const [width, setWidth] = useState(window.innerWidth);

  const colRef1 = useRef();
  const colRef2 = useRef();
  const colRef3 = useRef();
  const colRef4 = useRef();

 useEffect(()=>{
  if (width < 992) {   
    colRef1.current.classList.add("col-12");
    colRef2.current.classList.add("col-12");
    colRef3.current.classList.add("col-12");
    colRef4.current.classList.add("col-12");
  } if(width >991) {
    colRef1.current.classList.add("col-3");
    colRef2.current.classList.add("col-3");
    colRef3.current.classList.add("col-3");
    colRef4.current.classList.add("col-3");

  }
 },[])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
  // console.log("resize: "+width);
  
      if (width < 992) {   
        colRef1.current.classList.add("col-12");
        colRef2.current.classList.add("col-12");
        colRef3.current.classList.add("col-12");
        colRef4.current.classList.add("col-12");
        colRef1.current.classList.remove("col-3");
        colRef2.current.classList.remove("col-3");
        colRef3.current.classList.remove("col-3");
        colRef4.current.classList.remove("col-3");

      } if(width >991) {
        colRef1.current.classList.add("col-3");
        colRef2.current.classList.add("col-3");
        colRef3.current.classList.add("col-3");
        colRef4.current.classList.add("col-3");
        colRef1.current.classList.remove("col-12");
        colRef2.current.classList.remove("col-12");
        colRef3.current.classList.remove("col-12");
        colRef4.current.classList.remove("col-12");
  
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);



  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col" ref={colRef1}>
            <h3>dorsin</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  about us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  careers
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col" ref={colRef2}>
            <h3>infomation</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  Terms & Condition
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  about us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Jobs
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Bookmarks
                </a>
              </li>
            </ul>
          </div>
          <div className="col" ref={colRef3}>
            <h3>Support</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  FAQ
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Contact
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Disscusion
                </a>
              </li>
            </ul>
          </div>
          <div className="col" ref={colRef4}>
            <h3>subscribe</h3>
            <p>
              In an ideal world this text wouldn’t exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <form action="" className="form-group">
              <input type="text"
               placeholder="Email" />
              <button className="btn-send">
                <i class="far fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;
