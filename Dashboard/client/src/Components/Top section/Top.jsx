import React from 'react'
import './Top.css'
import './Top.scss'
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

export default function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti</h1>
          <p>Hello, Welcome back!</p>
        </div>
        <div className='searchBar flex'>
          <input type="text" placeholder='search Dashboard'/>
          <BiSearchAlt className="icon"/>
          <div className="adminImage">
          {/* <img src="/Assets/user.png" Alt="admin Image"/> */}
          </div>
        </div>
        <div className='adminDiv flex'>
          <TbMessageCircle className="icon"/>
          <MdOutlineNotificationsNone className="icon" />
          <img src="/Assets/user.png" Alt="admin Image"/>
          
        </div>
      </div>
      <div className='cardSection flex'>
        <div className='rightCard flex'>
          <h1>Create all extra ordinary products</h1>
          <p>The world's fastest growing industry today are natural made products!</p>
          <div className='button flex'>
            <button className='btn'>Explore</button>
            <button className='btn transparent'>Top sellers</button>
          </div>
          <div className='videoDiv'>
            <video src="/Assets/vedio.mp4" autoPlay loop muted></video>
          </div>
        </div>
        <div className='leftCard flex'>
          <div className='main flex'>
            <div className='textDiv'>
              <h1>my status</h1>
              <div className='flex'>
                <span>Today<br/><small>4 orders</small></span>
              </div>
              <div className='flex'>
                <span>This month<br/><small>127 orders</small></span>
              </div>
              <span className="flex link">
              Go to my Orders <BsArrowRightShort className="icon" />
          
            </span>
            </div>
             <div className="imageDiv">
              <div className="image">
{/* <img src='/Assets/user7.jpeg' alt='image'/> */}
              </div>
             </div>
             <div className='sideBarCard'>
        <BsQuestionCircle className="icon"/>
        <div className='cardContent'>
            <div className="circle1"></div>
            <div className="circle1"></div>
            <h3>Help Center</h3>
            <p>Having trouble of planti, please conact us from more questions.</p>
            <button className='btn'>Goto Help center</button>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
