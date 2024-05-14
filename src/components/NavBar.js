import React from 'react';
import './NavBar.css';
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";




function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">secret <span className='pink-box'>desires</span> </a>

                <div className="abc collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="main-nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-op nav-link" aria-current="page" href="/"><IoChatboxEllipsesSharp />Chats</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-op nav-link" href="/"><IoPeople />My Characters</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-op nav-link" href="/"><FaCamera />Generate Images</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link create-char" href="/"><RiHeartAddFill />Create Character</a>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <IoPersonCircleOutline />My Profile
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="/">My Account</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><a className="dropdown-item" href="/">Logout</a></li>
                        </ul>
                    </li>
                    
                    </ul>
                </div>
            
            </div>
        </nav>
    </div>
  )
}

export default NavBar