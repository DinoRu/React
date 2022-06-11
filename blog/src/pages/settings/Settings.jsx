import React from 'react'
import './settings.scss';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <div className="settingForm">
                <label>Profil Picture</label>
                <div className="settingPP">
                    <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Dino" />
                <label>Email</label>
                <input type="mail" placeholder="dino@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>

            </div>
        </div>
        <Sidebar />
    </div>
  )
}
