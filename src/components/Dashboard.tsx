import React from 'react'

import ScoreBook from './ScoreBook';
import SocialProfiles from './SocialProfiles';
import Projects from './Projects';
import SocialsLink from './SocialsLink';
import SocialsInputLinks from './SocialsInputLinks';
import Authfrom from './Authfrom';

function Dashboard() {
  
  const name = "Danish Belal";
  const YOR = 1.7
  const skills =[
    "htlm, ",
    "JS, ",
    "React "
  ]
  const passion = [
    "Full stack, ",
    "Block chain"
  ]
  const User_ID = "1";

  
  
  return (
    <div>
     
     <Authfrom />
     <SocialsLink />
 
      {/* <p>
        Hi, I'm {name}, a dedicated and passionate individual with {YOR} years of experience 
        in {skills}. I thrive on {passion} and enjoy contributing to innovative projects.
      </p>

      <ScoreBook id={User_ID} />
      <SocialProfiles id= {User_ID} />

      <Projects id={User_ID}/>
      <SocialsLink id={User_ID}/> */}
    </div>

  )
}

export default Dashboard