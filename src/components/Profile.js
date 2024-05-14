import React from 'react';
import photo from './photo.jpg';
import './Profile.css';
import './grid.css';
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
          <p><IoIosArrowBack /> Chat msg: 3</p>
          
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

            <div className='black-box'>
             <p><FaCamera /> 0</p>
             <p><FaCloud /> 8</p>
             <p><FaLock /> Make Character Public <FaShareAlt /></p>
            </div>

            <div className='black-box row'>
              <div className='span_1_of_3'>
                <h5>Who I am</h5>
                <h6>Personality</h6>
                <p>Caregiver</p>
                <h6>Work</h6>
                <p>Yoga Instructor</p>
                <h6>Hobbies</h6>
                <p>Anime Fan</p>
                <h6>Relationship</h6>
                <p>Friend</p>
              </div>
              <div className='span_2_of_3'>
                <div className='row'>
                  <h5>About Me<span><BiSolidEdit /></span></h5>
                  
                </div>
                <div>
                  <p>21-year-old anime fanatic and yoga instructor. I binge-watch anime! Looking for someone to join me in downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from memory. Let's chat.</p>
                </div>
              </div>
            </div>

            
        
    </div>
  )
}

export default Profile