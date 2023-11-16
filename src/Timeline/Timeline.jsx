import React from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Status from './Status/Status'
function Timeline() {
  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__status">
      <Status/>
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions/>
      </div>
    </div>
  
  )
}

export default Timeline
