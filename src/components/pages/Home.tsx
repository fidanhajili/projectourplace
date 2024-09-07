import React from 'react'
import Curated from '../Curated'
import FollowAlong from '../FollowAlong'
import Introduction from '../Introduction'
import Pans from '../Pans'
import Partners from '../Partners'
import Welcome from '../Welcome'

const Home:React.FC = () => {
  return (
    <div>
        <Introduction />
<Partners />
<Welcome />
<Pans />
<Curated />
<FollowAlong />

    </div>
  )
}

export default Home