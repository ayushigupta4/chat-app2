import React from 'react';
import photo from './photo.jpg';
import './Profile.css'
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";



function Profile() {
  return (
    <div className='profile-card'>
        <div className='profile-navbar'>
          <p><IoIosArrowBack />Chat msg: 3</p>
          
          <div className='profile-navbar-settings'>
          <SlOptionsVertical />
          <IoSettingsSharp />
          <BiSolidEdit />
          <IoCloseSharp />

          </div>
        </div>
            <div className='profile-image'>
                <img src={photo} alt='Profile' height={400} width={400}/>

            </div>

            <div>
             <p><FaCamera />0</p>
             <p><FaCloud />8</p>
             <p><FaLock />Make Character Public<FaShareAlt /></p>
            </div>
        
    </div>
  )
}

export default Profile