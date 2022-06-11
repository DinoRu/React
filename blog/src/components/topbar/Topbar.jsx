import {Link} from 'react-router-dom';
import React from 'react'
import './topbar.scss';

const Topbar = () => {

  const user = false;

  return (
    <div className="topbar">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-quora"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/">HOME</Link>
              </li>
              <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
              <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
              <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
              <li className="topListItem">
                {user && "LOGOUT"}
              </li>
          </ul>
      </div>
      <div className="topRight">
        {user ? 
          (
            <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
            alt="" 
            className="topImg" 
           />
          ): (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
           
           <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar
