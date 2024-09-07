import React from 'react'


interface FollowImgProps {
    shekilProps:string;
}

const FollowImg:React.FC<FollowImgProps> = ({shekilProps}) => {
  return (
    <img src={shekilProps} alt="" className='col-12 col-md-4'/>
  )
}

export default FollowImg