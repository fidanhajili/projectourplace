import React from 'react'
import FollowImg from './FollowImg'
import './FollowAlong.css' 
import FollowDiv from './FollowDiv'


const FollowAlong:React.FC = () => {
  return (
    <div className='row'>
        <FollowImg shekilProps="/images/follow/left-img.svg" />
        <FollowDiv />
        <FollowImg shekilProps="/images/follow/right-img.svg" />
    </div>
  )
}

export default FollowAlong