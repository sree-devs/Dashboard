import React from 'react'
import'./Sidebar.css'
import './Sidebar.scss'
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { TbTrophy } from "react-icons/tb";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdTrendingUp } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";


export default function Sidebar() {
  return (
    <div className='sideBar grid'>
        <div className="logoDiv flex">
            <img src="/Assets/logo.png" alt="Image name" />
            <h2>Planti.</h2>
        </div>
        <div className='menuDiv'>
            <h3 className="divTitle">
                QUICK MENU
            </h3>
            <ul className='menulists grid'>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <IoMdSpeedometer className='icon' />
                    <span className="smallText">
                    Dashboard
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <MdDeliveryDining className='icon' />
                    <span className="smallText">
                    My Orders
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <MdOutlineExplore className='icon' />
                    <span className="smallText">
                    Explore
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <TbTrophy  className='icon' />
                    <span className="smallText">
                    Products
                    </span>
                    </a>
                </li>
            </ul>
        </div>
        <div className='settingsDiv'>
            <h3 className="divTitle">
                SETTINGS
            </h3>
            <ul className='menulists grid'>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <AiOutlinePieChart className='icon' />
                    <span className="smallText">
                    Charts
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <MdTrendingUp  className='icon' />
                    <span className="smallText">
                     Trends
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <MdOutlinePermContactCalendar className='icon' />
                    <span className="smallText">
                    Contact
                    </span>
                    </a>
                </li>
                <li className='listItem'>
                    <a href='#' className='menuLink flex'>
                    <BsCreditCard2FrontFill className='icon' />
                    <span className="smallText">
                    Billing
                    </span>
                    </a>
                </li>
            </ul>
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
  )
}
