import React from 'react'
import { Input } from './ui/input';

interface socialsProfilesProps  {
     index:String;
      profile:String;
}

const SocialsInputLinks = ({index, profile}: socialsProfilesProps) => {
  return (
    <div className='flex m-5'>
     
     Enter your {profile} Link 
     <div className='w-2/4 ml-10 '>
     <Input/>
     </div>
    </div>
  )
}

export default SocialsInputLinks
