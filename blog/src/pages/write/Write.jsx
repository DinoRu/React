import React from 'react'
import './write.scss';

export default function Write() {
  return (
    <div className="write">
        <img 
            src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
            alt="" 
            className="writeImg" 
        />
        <div className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your history" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </div>
    </div>
  )
}
