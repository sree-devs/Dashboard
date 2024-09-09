 import React from 'react'
 import './Activity.css'
 import './Activity.scss'
 import { BsArrowRightShort } from "react-icons/bs";
 export default function Activity() {
   return (
     <div className="activitySection"> 
     <div className="heading flex">
       <h1> Recent Activities</h1>
      <button className="btn flex">
        See All<BsArrowRightShort className="icon" />
      </button>
     </div>
     <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src="/Assets/user2.jpeg" alt="customer Image"></img>
        <div className="customerDetails">
          <span className='name'>Devika</span> 
          <small>Ordered a new plant</small> 

        </div>
        <div className="duration">
          2 min ago
        </div>
      </div>
      <div className="singleCustomer flex">
        <img src="/Assets/user2.jpeg" alt="customer Image"></img>
        <div className="customerDetails">
          <span className='name'>Athira</span> 
          <small>Ordered a new plant</small> 

        </div> 
        <div className="duration">
          10 min ago
        </div>
      </div>
      <div className="singleCustomer flex">
        <img src="/Assets/user2.jpeg" alt="customer Image"></img>
        <div className="customerDetails">
          <span className='name'>Malavika</span> 
          <small>Ordered a new plant</small> 

        </div> 
        <div className="duration">
          15 min ago
        </div>
      </div>
      
     </div>
     
     </div>
   )
 }
 