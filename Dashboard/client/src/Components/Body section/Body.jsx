import React from 'react'
import './Body.css'
import './Body.scss'
import Top from '../Top section/Top'
import Listing from './Listingsection/Listing'
import Activity from './Activity section/Activity'

export default function Body() {
  return (
    <div className="mainContent">
<Top/>

        
        <div className='bottom flex' >
            <Listing/>
            <Activity/>
        
        </div>
        </div>
  )
}
