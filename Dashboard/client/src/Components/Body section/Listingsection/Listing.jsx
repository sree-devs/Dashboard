import React from 'react'
import './Listing.css'
import './Listing.scss'
import { BsArrowRightShort } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
export default function Listing() {
  return (
    <div className="listingSection">
      <div className='heading flex'>
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All<BsArrowRightShort className="icon" />

        </button>
      </div>
      <div className="secContainer flex">
        <div className="singleItem">
        <AiOutlineHeart className="icon"/>
        <img src="/Assets/user3.jpeg" alt="image name"/>
        <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
        <GoHeartFill className="icon"/>
        <img src="/Assets/user4.jpeg" alt="image name"/>
        <h3>Coffee Plant</h3>
        </div>
        <div className="singleItem">
        <AiOutlineHeart className="icon"/>
        <img src="/Assets/user6.jpeg" alt="image name"/>
        <h3>Rose Plant</h3>
        </div>
         

      </div>
       
      </div>
  )
}
