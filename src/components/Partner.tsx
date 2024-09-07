import React from 'react'


interface PartnerProps {
    partnerImage: string
}
const Partner:React.FC<PartnerProps> = (props) => {

  return (
    <img src={props.partnerImage} alt='' className='partner-img img-fluid'/>
  )
} 

export default Partner