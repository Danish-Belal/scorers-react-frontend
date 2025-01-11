import React from 'react'
import SocialsInputLinks from './SocialsInputLinks';

const SocialsLink = () => {
  const socialsProfiles = [
    "Github",
    "Linkdin",
    "Leetcode",
    "Codeforces",
    "Other"
  ];
  const submitSocialsLinks = ()=>{
    console.log("Submitted");
    
  }
  return (
    <div>
       {
        socialsProfiles.map((profile,index)=>(
          <SocialsInputLinks key={index} index={index} profile={profile} />
          
        ))
      }
       <button className='border-s-black' onClick={submitSocialsLinks}>Submit</button>
    </div>
  )
}

export default SocialsLink
