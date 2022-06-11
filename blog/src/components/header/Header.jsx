import React from 'react'
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
            src="https://images.unsplash.com/photo-1649185916280-04fd06789b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80" 
            alt="" 
            className="headerImg" 
        />
    </div>
  )
}
